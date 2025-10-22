if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const fs = require("fs").promises;
const path = require("path");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN; // add this to .env

const cachePath = path.join(__dirname, "geocache.json");

async function loadCache() {
  try {
    const raw = await fs.readFile(cachePath, "utf8");
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}

async function saveCache(cache) {
  try {
    await fs.writeFile(cachePath, JSON.stringify(cache, null, 2), "utf8");
  } catch (e) {
    console.warn("Failed to write geocache:", e);
  }
}

async function geocodePlace(place, cache) {
  if (!place) return null;
  if (cache[place]) return cache[place]; // cached result

  if (!MAPBOX_TOKEN) {
    console.warn("MAPBOX_TOKEN not set; returning fallback coords for:", place);
    return null;
  }

  const query = encodeURIComponent(place);
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${MAPBOX_TOKEN}&limit=1`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`Mapbox request failed for "${place}" status=${res.status}`);
      return null;
    }
    const data = await res.json();
    if (data.features && data.features.length > 0) {
      const coords = data.features[0].geometry.coordinates; // [lng, lat]
      cache[place] = coords;
      return coords;
    } else {
      console.warn("No geocoding result for:", place);
      cache[place] = null;
      return null;
    }
  } catch (e) {
    console.warn("Geocoding error for", place, e);
    return null;
  }
}

async function main() {
  if (!dbUrl) {
    console.error("ATLASDB_URL is not set. Put your MongoDB URI in .env as ATLASDB_URL.");
    process.exit(1);
  }
  await mongoose.connect(dbUrl);
  console.log("connected to DB");
}

async function initDB() {
  // WARNING: this deletes all listings in the DB. Backup production data first.
  await Listing.deleteMany({});
  console.log("Existing listings cleared.");

  const cache = await loadCache();

  const seeded = [];
  for (const obj of initData.data) {
    const place = obj.location || obj.country || "";
    let coords = null;
    if (place && MAPBOX_TOKEN) {
      coords = await geocodePlace(place, cache);
    }

    // If geocoding failed or no MAPBOX_TOKEN, fallback to [0,0] to satisfy schema
    // (you can change the fallback behavior if you'd rather omit geometry)
    if (!coords) {
      console.warn(`Using fallback coords for "${place}"`);
      coords = [0, 0]; // [lng, lat], replace later with real coordinates if needed
    }

    seeded.push({
      ...obj,
      owner: "68f8ab61aa4c40d5e81f1ed6", // replace with your real owner id
      geometry: {
        type: "Point",
        coordinates: coords,
      },
    });
  }

  // Save cache so future runs don't re-query Mapbox for the same places
  await saveCache(cache);

  await Listing.insertMany(seeded);
  console.log("data was initialized with geocoded coordinates");
  process.exit(0);
}

main()
  .then(() => initDB())
  .catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
  });