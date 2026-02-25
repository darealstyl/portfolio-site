import project1image from "../img/project1.png";
import project2image from "../img/project2.png";
import project3image from "../img/project3.png";
import project4image from "../img/project4.png";
import project5image from "../img/project5.png";
import project6image from "../img/project7.png";
import project7image from "../img/alpha_blog_screenshot.png";

const projects = [
    {
        id: "alpha-blog",
        title: "Alpha-Blog",
        tagline: "Rails blog app with auth + roles + tagging",
        stack: ["Ruby on Rails", "PostgreSQL (Neon)", "Bootstrap", "Render"],
        description:
            "A Ruby on Rails + Bootstrap web app with authentication and role-based authorization (admin vs user), CRUD posts, and category tagging (many-to-many). Deployed via Render using Neon for Postgres.",
        highlights: ["Authentication + admin/user roles", "CRUD posts", "Many-to-many categories/tags"],
        links: {
            github: "https://github.com/darealstyl/alpha-blog",
            live: null,
        },
        image: project7image,
    },
    {
        id: "track-my-degree",
        title: "Track My Degree",
        tagline: "Degree progress tracker with credits + requirements",
        stack: ["React", "Node.js", "SQL"],
        description:
            "A web application that allows students to track their degree progress through a user-friendly interface that displays their courses, degree requirements, and credit calculations.",
        highlights: ["Degree requirement display", "Credit calculations", "Student-friendly UI"],
        links: {
            github: null,
            live: "https://trackmydegree.com",
        },
        image: project6image,
    },
    {
        id: "personal-music-player",
        title: "Personal Music Player",
        tagline: "Custom React music player with Three.js background",
        stack: ["React", "Three.js"],
        description:
            "A React-based music player with a custom design. Features include play/pause, volume control, and a progress bar. Background designed with Three.js. Designed to play my own music as a fun project.",
        highlights: ["Play/pause + volume", "Progress bar UI", "Three.js background"],
        links: {
            github: null,
            live: "https://darealstyl.github.io/music-website",
        },
        image: project1image,
    },
    {
        id: "a-whole-lotta-axolotl",
        title: "A Whole Lotta Axolotl",
        tagline: "Unity 2D platformer (team project)",
        stack: ["Unity", "C#"],
        description:
            "A 2D platformer game created with Unity. The game features a cute axolotl character that navigates platforms and avoids obstacles with the objective of finishing the level as quickly as possible. Co-developed with another student.",
        highlights: ["2D platforming gameplay", "Obstacle avoidance", "Collaborative development"],
        links: {
            github: "https://github.com/darealstyl/AWLAx",
            live: null,
        },
        image: project2image,
    },
    {
        id: "opengl-class-project",
        title: "OpenGL Class Project",
        tagline: "Simulated tennis match with custom assets + audio",
        stack: ["C++", "OpenGL"],
        description:
            "A team project for a computer graphics class: a simulated tennis match with animations, models, and audio being coded from scratch. Developed in C++ with OpenGL.",
        highlights: ["Graphics + animation work", "Models + audio integrated", "Team-built from scratch"],
        links: {
            github: "https://github.com/MillerSty/Coen371_Project",
            live: null,
        },
        image: project3image,
    },
    {
        id: "video-game-db",
        title: "Video Game DB",
        tagline: "Game data merged from RAWG + IGDB APIs",
        stack: ["MySQL", "Neo4j", "Python", "APIs"],
        description:
            "A databases class project that merges video game data from the RAWG and IGDB public APIs. Built with MySQL (relational), Neo4j (NoSQL alternative), and Python for scripting.",
        highlights: ["Relational + graph DB comparison", "API data ingestion", "Python scripting pipeline"],
        links: {
            github: "https://github.com/Shredsauce/SOEN_363_PROJECT",
            live: null,
        },
        image: project4image,
    },
    {
        id: "endless-driver",
        title: "Endless Driver",
        tagline: "On-rails Unity driving game with procedural track",
        stack: ["Unity", "C#"],
        description:
            "An on-rails driving game created for a game development course. Features a procedurally generated track, obstacles, and a scoring system.",
        highlights: ["Procedural track generation", "Obstacles + scoring", "Course project"],
        links: {
            github: "https://github.com/darealstyl/Endless-Driver",
            live: null,
        },
        image: project5image,
    },
];

export default projects;