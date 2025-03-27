const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");

app.use(cors());

const projects = [
  {
    id: 1,
    name: "Pizza Project",
    descriptionEn:
      "A pizza ordering application created as a challenge project to practice and showcase skills in building interactive user interfaces with React, managing component state, and applying responsive design principles.",
    descriptionTr:
      "React ile state management, interaktif kullanıcı arayüzü, routing, vb. konuları çalışmak için geliştirdiğim, bir yemek sipariş uygulaması arayüzü.",
    techStack: ["React", "Cypress", "Axios"],
    githubUrl: "https://github.com/ahmetkvs/wit-s8-challenge-pizza-project",
    deployUrl: "https://pizza-project-sigma.vercel.app/",
    image:
      "https://res.cloudinary.com/dotjbmwdl/image/upload/v1742970005/pizza-project-fullscreen.png",
  },
  {
    id: 2,
    name: "tikit",
    descriptionEn:
      "This project is a fundamental task management application created to solidify my understanding and implementation of React Hook Form for form handling and state management in React.",
    descriptionTr:
      "Bu proje React Hook Form ile form validasyon, form state management bilgilerimi pratiğe dökmek için geliştirdiğim bir görev takip uygulaması.",
    techStack: ["React", "ReactHookForm", "ES6+"],
    githubUrl: "https://github.com/ahmetkvs/tikit",
    deployUrl: "https://tikit-beta.vercel.app/",
    image:
      "https://res.cloudinary.com/dotjbmwdl/image/upload/v1743034867/tikit-project-screenshot.png",
  },
];

router.get("/projects", (req, res) => {
  res.json(projects);
});

app.use("/api", router);

module.exports = async (req, res) => {
  await app(req, res);
};
