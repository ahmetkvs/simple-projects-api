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
  {
    id: 3,
    name: "WebWares",
    descriptionEn:
      "As the capstone project for my Frontend Bootcamp at Workintech, I developed this e-commerce platform to practically apply a modern React tech stack. This intensive, hands-on experience was crucial in navigating the complexities of building a real-world application, allowing me to learn and refine my skills through each stage of development. Reflecting on this project, I recognize the significant learning curve and envision the potential for even greater optimization and polish with additional time and experience.",
    descriptionTr:
      "Workintech'teki Frontend Bootcamp'imin bitirme projesi olarak geliştirdiğim bu e-ticaret platformu, modern bir React teknoloji yelpazesini pratik olarak uygulama fırsatı sundu. Bu yoğun ve uygulamalı deneyim, gerçek dünya ölçeğinde bir uygulama geliştirmenin karmaşıklıklarını anlamam ve her geliştirme aşamasında becerilerimi öğrenip iyileştirmem açısından kritik öneme sahipti. Bu projeye dönüp baktığımda, kaydettiğim önemli öğrenme sürecini görüyor ve ek zaman ve deneyimle çok daha iyi bir hale getirme potansiyelini hayal edebiliyorum.",
    techStack: ["Redux", "Redux-Thunk", "React"],
    githubUrl: "https://github.com/ahmetkvs/webwares",
    deployUrl: "https://https://webwares.vercel.app/",
    image:
      "https://res.cloudinary.com/dotjbmwdl/image/upload/v1746083247/D4AADD94-5E77-4C80-AA2F-1A3248B37647_ighqcq.png",
  },
];

router.get("/projects", (req, res) => {
  res.json(projects);
});

app.use("/api", router);

module.exports = async (req, res) => {
  await app(req, res);
};
