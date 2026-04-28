import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./ProyectosSection.css";

export const ProyectosSection = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [index, setIndex] = useState(0);

  const openModal = (images, startIndex = 0) => {
    setCurrentImages(images);
    setIndex(startIndex);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const next = () => {
    setIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="proyectos" className="section2">
      <div className="content-section2">
        <h2 className="title">Proyectos</h2>

        <div className="projects-grid">

          {/* PROYECTO REACT */}
          <div className="project-card">

            <div className="project-image">

              <img
                src="/images/react1.webp"
                alt="Proyecto React 1"
                onClick={() =>
                  openModal(
                    [
                      "/images/react1.webp",
                      "/images/react2.webp",
                      "/images/react3.webp",
                    ],
                    0
                  )
                }
              />

              <img
                src="/images/react2.webp"
                alt="Proyecto React 2"
                onClick={() =>
                  openModal(
                    [
                      "/images/react1.webp",
                      "/images/react2.webp",
                      "/images/react3.webp",
                    ],
                    1
                  )
                }
              />

              <img
                src="/images/react3.webp"
                alt="Proyecto React 3"
                onClick={() =>
                  openModal(
                    [
                      "/images/react1.webp",
                      "/images/react2.webp",
                      "/images/react3.webp",
                    ],
                    2
                  )
                }
              />
            </div>

            <div className="project-content">
              <h3>Gestor de Notas Fullstack</h3>
              <p>
                Aplicación web para gestión de notas con autenticación,
                backend propio y persistencia de datos en base de datos.
              </p>

              <div className="tech-stack">
                <img src="/icons/react.svg" alt="React" />
                <img src="/icons/node.svg" alt="Node" />
                <img src="/icons/javascript.svg" alt="JavaScript" />
                <img src="/icons/express.svg" alt="Express" />
                <img src="/icons/clerk.svg" alt="Clerk" />
                <img src="/icons/prisma.svg" alt="Prisma" />
                <img src="/icons/postgresql.svg" alt="PostgreSQL" />
                <img src="/icons/html5.svg" alt="HTML" />
                <img src="/icons/css.svg" alt="CSS" />
              </div>

              <div className="buttons">
                <a href="https://github.com/arestra12/mi-nota-proyect-fullstack" target="_blank" className="btn primary">
                  GitHub
                </a>
                <a href="https://mi-nota-frontend-fullstack.vercel.app" target="_blank" className="btn secondary">
                  Demo
                </a>
              </div>
            </div>
          </div>

          {/* PROYECTO PYTHON */}
          <div className="project-card">

            <div className="project-image">

              <img
                src="/images/python1.webp"
                alt="Proyecto Python 1"
                onClick={() =>
                  openModal(
                    [
                      "/images/python1.webp",
                      "/images/python2.webp",
                      "/images/python3.webp",
                    ],
                    0
                  )
                }
              />

              <img
                src="/images/python2.webp"
                alt="Proyecto Python 2"
                onClick={() =>
                  openModal(
                    [
                      "/images/python1.webp",
                      "/images/python2.webp",
                      "/images/python3.webp",
                    ],
                    1
                  )
                }
              />

              <img
                src="/images/python3.webp"
                alt="Proyecto Python 3"
                onClick={() =>
                  openModal(
                    [
                      "/images/python1.webp",
                      "/images/python2.webp",
                      "/images/python3.webp",
                    ],
                    2
                  )
                }
              />
            </div>

            <div className="project-content">
              <h3>Predicción de Deserción Estudiantil</h3>
              <p>
                Modelo de Machine Learning para predecir la deserción estudiantil
                usando técnicas de clasificación y análisis de datos.
              </p>

              <div className="tech-stack">
                <img src="/icons/python.svg" alt="Python" />
                <img src="/icons/aws.svg" alt="AWS" />
                <img src="/icons/postgresql.svg" alt="PostgreSQL" />
                <img src="/icons/html5.svg" alt="HTML" />
                <img src="/icons/css.svg" alt="CSS" />
              </div>

              <div className="buttons">
                <a href="https://github.com/arestra12/Sistema-Predictivo-Desercion-Estudiantil-Machine-Learning" target="_blank" className="btn primary">
                  GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MODAL ================= */}
      {isOpen &&
        createPortal(
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

              <button className="nav left" onClick={prev}>‹</button>

              <img
                src={currentImages[index]}
                alt="preview"
                className="modal-img"
              />

              <button className="nav right" onClick={next}>›</button>

              <button className="close" onClick={closeModal}>✕</button>

            </div>
          </div>,
          document.body
        )
      }

    </section>
  );
};