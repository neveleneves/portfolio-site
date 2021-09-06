const { Router } = require("express");
const router = Router();

const Skills = require("../models/Skills");

//Current prefix /api/main

router.get("/skills", async (req, res) => {
  try {
    const skills = await Skills.find({});
    
    res.status(200).json(skills);
  } catch (e) {
    res.status(500).json({ message: "Failed to get the list of skills" });
    console.warn("Failed to get the list of skills: ", e.message);
  }
});
module.exports = router;
