// mang elphy weather app
import elphy1 from "../assets/images/elphy1.jpg";
import elphy2 from "../assets/images/elphy2.jpg";
import elphy3 from "../assets/images/elphy3.jpg";
import elphy4 from "../assets/images/elphy4.jpg";

// kuvle
import kuvle1 from "../assets/images/kuvle1.jpg";
import kuvle2 from "../assets/images/kuvle2.jpg";
import kuvle3 from "../assets/images/kuvle3.jpg";

// student grade viwer
import studentGrade1 from "../assets/images/studentGrade1.jpg";
import studentGrade2 from "../assets/images/studentGrade2.jpg";
import studentGrade3 from "../assets/images/studentGrade3.jpg";
import studentGrade4 from "../assets/images/studentGrade4.jpg";

// default image for some projects that I did not take any screenshots
import characterEmpty from "../assets/images/characterEmpty.png";

const projects = {
  first: {
    image: [elphy1, elphy2, elphy3, elphy4],
    name: "Mang Elphy",
    stack: ["React Native", "Expo", "Express", "Node.js", "OpenWeatherMap API"],
    description:
      "A mobile weather application built with React Native (Expo) featuring real-time weather data from the OpenWeatherMap API (FT). Includes a Node.js and Express backend deployed on Railway. Features location-based weather tracking and AI-generated image assets. Compiled and available for download as a working Android APK.",
    link: "https://github.com/Benenendyel/mang-elphys-weather-app",
  },

  second: {
    image: [kuvle1, kuvle2, kuvle3],
    name: "KUVLE",
    stack: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Express",
      "Node.js",
      "JWT",
      "Bcrypt",
    ],
    description:
      "A Virtual Learning Environment (VLE) web application with a completed authentication system. Built using HTML, Tailwind CSS, Vanilla JavaScript, and Node.js with Express. Features secure user registration and login with bcrypt password hashing and JWT authentication",
    link: "https://github.com/Benenendyel/KUVLE",
  },

  third: {
    image: [characterEmpty],
    name: "Veterinary Clinic System",
    stack: ["Java"],
    description:
      " A CLI based Java application for simulating my idea of managing pet clinic records. Implemented object-oriented programming principles using abstract classes, inheritance, and polymorphism. Features custom exception handling, file I/O for persistent data storage, and a menu-driven CLI interface.",
    link: "https://github.com/Benenendyel/vet-clinic-sim",
  },

  fourth: {
    image: [studentGrade1, studentGrade2, studentGrade3, studentGrade4],
    name: "Student Grade Viewer",
    stack: ["React", "Tailwind", "Java", "Spring Boot", "REST API"],
    description:
      "A simple full-stack practice project built to get better at React.js, Tailwind CSS, and REST APIs, while exploring Java Spring Boot for the first time. Not meant to be strict or production-ready, just a personal sandbox for learning.",
    link: "https://github.com/Benenendyel/student-grade-viewer",
  },
};

export default projects;
