import React from 'react'
import "./AcercaDeSection.css"

export const AcercaDeSection = () => {
  return (
    <section id="acerca" className='section3'>
      <div className='content-section3'>
        <h2 className='title '>Acerca de mi</h2>

        <div className='about-container'>
          {/* Bloque Profesional: Párrafo largo */}
          <div className='about-block professional'>
            <p>
              Soy <strong>Desarrollador Web Full-Stack</strong> con experiencia en la creación de aplicaciones web completas y funcionales, utilizando tecnologías como React, Node.js y APIs RESTful con Express. Me enfoco en desarrollar soluciones eficientes, escalables y bien estructuradas, priorizando el rendimiento, la calidad del código y la experiencia de usuario.
            </p>
            <p>
              Me distingue un compromiso inquebrantable con el aprendizaje continuo y la mejora constante, lo que me permite adaptarme rápidamente a nuevas tecnologías, entornos y desafíos. La adaptabilidad es una de mis principales fortalezas, lo que me facilita integrarme en distintos equipos y proyectos con facilidad.
            </p>
          </div>

          {/* Bloque Académico y Metas */}
          <div className='side-content'>
            <div className='about-block academic'>
              <h3>Formación Académica</h3>
              <p> <strong>Ingeniería en Sistemas</strong> en la Universidad Tecnológica de El Salvador (2019 – 2025).</p>
            </div>

            <div className='about-block goals'>
              <h3>Aprendizaje y Evolución</h3>
              <p>
                Actualmente me encuentro explorando nuevos lenguajes de programación como <strong>Java</strong>, con el objetivo de ampliar mis habilidades y comprender diferentes paradigmas de desarrollo. Me adapto fácilmente a nuevos entornos buscando siempre evolucionar profesional y personalmente.
              </p>
            </div>
          </div>

          {/* Bloque Personal / Visión */}
          <div className='about-block vision'>
            <h3>Valores y Visión</h3>
            <p>
              Tengo interés en las buenas prácticas de desarrollo, la optimización de procesos y la creación de software que aporte valor real a los usuarios.
            </p>
            <p>
              Soy una persona apasionada por la cultura en general, especialmente por los <strong>animes y los videojuegos</strong>, los cuales han influido en mi forma de pensar, resolver problemas y mantener la creatividad en el desarrollo de software.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}