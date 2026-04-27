import React from "react";
import "./HabilidadesSection.css";

export const HabilidadesSection = () => {
  const frontend = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "HTML", icon: "/icons/html5.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "Clerk", icon: "/icons/clerk.svg" },
    { name: "React Router", icon: "/icons/react-router.svg" },
  ];

  const backend = [
    { name: "Node.js", icon: "/icons/node.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "Prisma", icon: "/icons/prisma.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "FastAPI", icon: "/icons/fastapi.svg" },
    { name: "AWS", icon: "/icons/aws.svg" },
  ];

  return (
    <section id="habilidades" className="section1">
      <div className="content-section1">

        <h2 className="title">Habilidades</h2>

        <div className="skills-wrapper">

          {/* FRONTEND */}
          <div className="skill-box">
            <h3>Frontend</h3>
            <div className="grid">
              {frontend.map((tech) => (
                <div className="card" key={tech.name}>
                  <img src={tech.icon} alt={tech.name} />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="skill-box">
            <h3>Backend</h3>
            <div className="grid">
              {backend.map((tech) => (
                <div className="card" key={tech.name}>
                  <img src={tech.icon} alt={tech.name} />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};