const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    // required: true,
  },
  password: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    // required: true,
  },
  rating: {
    type: Number,
    // required: true,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
