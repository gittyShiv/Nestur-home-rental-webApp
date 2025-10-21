mapboxgl.accessToken =maptoken;
const map = new mapboxgl.Map ({
container: "map", // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: "mapbox://styles/mapbox/streets-v12", // style URL
center: coordinates, // starting position ling, lat]
zoom: 9, // starting zoom
})
const marker = new mapboxgl.Marker({color:"red"})
 .setLngLat ( [12.554729, 55.70651]) //Listing-geometry-coordinates
 .addTo (map) ;
 
 