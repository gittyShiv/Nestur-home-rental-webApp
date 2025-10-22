const mongoose = require('mongoose');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const User = require('../models/user'); // passport-local-mongoose on schema

async function main() {
  if (!process.env.ATLASDB_URL) {
    console.error('ATLASDB_URL not set in .env');
    process.exit(1);
  }
  await mongoose.connect(process.env.ATLASDB_URL);
  console.log('Connected to DB');

  // Use 'new' when constructing ObjectId
  const seededId = new mongoose.Types.ObjectId('68f8ab61aa4c40d5e81f1ed6');

  // Check if a user with that id exists
  let user = await User.findById(seededId);
  if (user) {
    console.log('User with seeded id already exists:', user._id.toString());
    await mongoose.disconnect();
    process.exit(0);
  }

  // passport-local-mongoose provides User.register to hash the password
  const userData = {
    _id: seededId,
    username: 'seeduser',
    email: 'seed@example.com'
  };

  try {
    const registeredUser = await User.register(new User(userData), 'password');
    console.log('Created seed user with id', registeredUser._id.toString());
  } catch (err) {
    console.error('Error registering user:', err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('Failed to create seed user:', err);
  process.exit(1);
});