const mongoose = require('mongoose');

const revijaSchema = new mongoose.Schema({
  naziv: String,
  opis: String,
}, { collection: 'revije' }); // Nastavite ime zbirke tukaj

module.exports = mongoose.model('Revija', revijaSchema);
