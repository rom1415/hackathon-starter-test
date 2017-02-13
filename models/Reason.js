const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const reasonSchema = new mongoose.Schema({
  name: String
}, { timestamps: true });

const Reason = mongoose.model('Reason', reasonSchema);

module.exports = Reason;