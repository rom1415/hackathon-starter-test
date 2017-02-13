const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wouldQuitSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  reasons: [{ type: Schema.Types.ObjectId, ref: 'Reason' }],
  other_reason: String
}, { timestamps: true });

const WouldQuit = mongoose.model('WouldQuit', wouldQuitSchema);

module.exports = WouldQuit;