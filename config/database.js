const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/groceries`
  // process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }
  );

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});