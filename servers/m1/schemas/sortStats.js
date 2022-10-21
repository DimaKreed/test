const mongoose = require('mongoose');

const sortStatsSchema = new mongoose.Schema({
  objectId: { type: mongoose.Types.ObjectId, ref: 'UnsortedObjects' },
  sortDuration: Number,
});

module.exports = mongoose.model('SortStats', sortStatsSchema);
