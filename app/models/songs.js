var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Song schema
 */

var SongSchema = new Schema({
  title: { type: String, default: '' },
  id: { type: String, default: '' },
  url: { type: String, default: '' },
  imageUrl: { type: String, default: '' },
  params: { type: String, default: '' }
});

mongoose.model('Song', SongSchema);