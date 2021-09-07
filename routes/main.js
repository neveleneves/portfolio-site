const { Router } = require("express");
const router = Router();

const Skills = require("../models/Skills");
const Project = require("../models/Project");

//Current prefix /api/main

router.get("/skills", async (req, res) => {
  try {
    const skills = await Skills.find({});
    if (!skills.length)
      return res.status(504).json({ message: "Skills list is empty" });

    res.status(200).json(skills);
  } catch (e) {
    res.status(500).json({ message: "Failed to get the list of skills" });
    console.warn("Failed to get the list of skills: ", e.message);
  }
});

router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find({});
    if (!projects.length)
      return res.status(504).json({ message: "Project list is empty" });

    res.status(200).json(projects);
  } catch (e) {
    res.status(500).json({ message: "Failed to get the list of project" });
    console.warn("Failed to get the list of skills: ", e.message);
  }
});
module.exports = router;
