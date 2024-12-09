import React from "react";
import Header from "../components/Header";

const Skills = () => {
  const projects = [
    {
      name: "Interactive Web Form with JavaScript",
      url: "https://bks.boo.mybluehost.me/webform/",
      image: "/images/form.gif",
    },
    {
      name: "Asynchronous Drag&Drop Web App",
      url: "https://bks.boo.mybluehost.me/drag&drop/",
      image: "/images/drag&drop.gif",
    },
    {
      name: "CSS Flexbox and CSS Grid Portfolio",
      url: "https://bks.boo.mybluehost.me/portfolioHW3/",
      image: "/images/portfolio.gif",
    },
    {
      name: "Country Management System with TypeScript",
      url: "https://bks.boo.mybluehost.me/country-management/",
      image: "/images/country.gif",
    },
    {
      name: "React Dynamic Routing Inventory App",
      url: "https://inventory-app-hw5-6.netlify.app/",
      image: "/images/grocery.gif",
    },
  ];

  return (
    
    <div className="skills">
      <Header />
      <h2>My Skills</h2>
      <p>Click on my project demos below</p>
      <div className="grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <img src={project.image} alt={project.name} className="project-image" />
              <h3>{project.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
