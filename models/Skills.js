const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillsSchema = new Schema({
  name: {type: String, required: true,unique: false,},
  path_img: { type: String, required: true, unique: true },
  type: { type: String, required: true, unique: false }
});
module.exports = mongoose.model("skills", SkillsSchema);
