const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  description: String
}, { timestamps: true });

const Company = mongoose.model('Company', companySchema);

module.exports = Company;