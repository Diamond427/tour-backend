const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const { mongo_url } = require('./config');
const router = require('./routes');

app.use(cors());
app.use(express.json());

router(app);

mongoose.connect(mongo_url)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})