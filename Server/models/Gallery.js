const mongoose = require('mongoose');

const galleryItemSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  altText: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('GalleryItem', galleryItemSchema);
