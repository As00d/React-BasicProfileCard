import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/app.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return <Container />;
}

function Container() {
  return (
    <div className="container">
      <AboutSection />
      <OtherInfo />
    </div>
  );
}

function AboutSection() {
  return (
    <div>
      <img src="../../github.jpeg" />
    </div>
  );
}

function OtherInfo() {
  return (
    <div className="otherInfo">
      <h1 className="heading">Ankita Sood</h1>
      <p className="information">
        Hello, I’m Ankita and I work as a web developer. I have been working as
        a web developer for quite some time now. I believe I am a very ambitious
        person who loves to work on making the website work well. Working on the
        web is my passion as I love to work on exciting projects. This is the
        field I get to express my creativity. I would love to work in your
        esteemed organisation.
      </p>
      <div className="skill">
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </div>
  );
}

function Skill({ skill }) {
  const style = {
    backgroundColor: skill.color,
    margin: "3px",
    height: "25px",
    padding: "0.25em",
    borderRadius: "5px",
    fontWeight: "bold",
  };
  const skillSet = skill.level;
  return (
    <p style={style}>
      {skill.skill}
      {skillSet === "advanced" ? "💪🏻" : ""}
      {skillSet === "intermediate" ? "👍🏻" : ""}
      {skillSet === "beginner" ? "👶🏻" : ""}
    </p>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
