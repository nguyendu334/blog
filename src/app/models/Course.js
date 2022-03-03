const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, required: true },
  description: { type: String, maxlength: 600 },
  img: { type: String, maxlength: 255 },
  videoId: { type: String, required: true },
  level: { type: String, maxlength: 255 },
  slug: { type: String, slug: 'name', unique: true },
}, {
  timestamps: true
});

// add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt : true , overrideMethods: 'all' })

module.exports = mongoose.model('Course', Course);