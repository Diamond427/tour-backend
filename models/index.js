const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.tours = require("./tour.model.js")(mongoose);

module.exports = db;