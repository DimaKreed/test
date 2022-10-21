const mongoose = require('mongoose');

const unsortedObjectsSchema = new mongoose.Schema({
  object: Object,
  keyCount: Number,
  depth: Number,
  size: Number,
  generationTime: Number,
});

module.exports = mongoose.model('UnsortedObjects', unsortedObjectsSchema);
