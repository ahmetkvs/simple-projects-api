const express = require("express");
const router = express.Router();
const app = express();

const projects = [
  {
    id: 1,
    name: "Pizza Project",
    description: "A pizza ordering frontend",
    techStack: ["React", "Cypress", "Axios"],
    githubUrl: "https://github.com/ahmetkvs/wit-s8-challenge-pizza-project",
    deployUrl: "https://pizza-project-sigma.vercel.app/",
    image: "/images/pizza-app.webp",
  },
];

router.get("/projects", (req, res) => {
  res.json(projects);
});

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = router;
