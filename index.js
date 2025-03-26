const express = require("express");
const app = express();
const router = express.Router();

const projects = [
  {
    id: 1,
    name: "Pizza Project",
    description: "A pizza ordering frontend",
    techStack: ["React", "Cypress", "Axios"],
    githubUrl: "https://github.com/ahmetkvs/wit-s8-challenge-pizza-project",
    deployUrl: "https://pizza-project-sigma.vercel.app/",
    image: "/images/pizza-app.png",
  },
];

router.get("/projects", (req, res) => {
  res.json(projects);
});

app.use("/api", router);

module.exports = async (req, res) => {
  await app(req, res);
};
