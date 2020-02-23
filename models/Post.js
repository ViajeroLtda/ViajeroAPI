const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.ObjectId, ref: "User" },
  comments: [
    {
      text: String,
      createdAt: { type: Date, default: Date.now},
      author: { type: mongoose.Schema.ObjectId, ref: "User" }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Pin', PostSchema);