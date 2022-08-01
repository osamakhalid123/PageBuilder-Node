const mongoose = require('mongoose');
const { Schema } = mongoose;

const Asset = new Schema({
  type: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25,
  },
  src: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
});

module.exports = mongoose.model('Assets', Asset);
