const mongoose = require('mongoose');

const revijaSchema = new mongoose.Schema({
  naziv: String,
  opis: String,
});

module.exports = mongoose.model('Revija', revijaSchema);
