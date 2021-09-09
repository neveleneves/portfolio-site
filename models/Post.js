const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  title: { type: String, required: true, unique: false },
  subtitle: { type: String, required: true, unique: false },
  body_text: { type: String, required: true, unique: false },
  date_creation: { type: String, required: true, unique: false },
  image_path: { type: String, required: true, unique: false },
});
module.exports = mongoose.model("posts", PostsSchema);
