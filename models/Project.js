const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {type: String, required: true, unique: true},
  description: { type: String, required: true, unique: false },
  stack: { type: Array, required: true, unique: false },
  image_path: {type: String, required: true, unique: true}
});
module.exports = mongoose.model("projects", ProjectSchema);
