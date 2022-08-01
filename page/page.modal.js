const mongoose = require('mongoose');
const { Schema } = mongoose;

const Page = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    customName: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    content: Object,
    view: {
      type: Object,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Pages', Page);
