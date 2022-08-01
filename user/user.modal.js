const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;

const User = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    min: 18,
    max: 60,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    enum: ['male', 'female'],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error('invalid email');
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    // match: /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/,
  },
  addresses: [
    {
      details: {
        type: String,
        required: true,
        trim: true,
      },
      addrType: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: {
    type: String,
    trim: true,
  },
  userType: {
    type: String,
    enum: ['user', 'admin', 'super'],
  },
});

module.exports = mongoose.model('Users', User);
