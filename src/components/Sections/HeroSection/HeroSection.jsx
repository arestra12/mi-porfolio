import React from 'react'
import "./HeroSection.css"
import { CoverParticles } from '../../CoverParticles/CoverParticles'
import foto from "../../../assets/images/foto.png"

export const HeroSection = () => {


  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/cv_jose_gabriel_alvarez_claros.pdf";

    // 👇 IMPORTANTE: usar el mismo nombre del archivo
    link.download = "cv_jose_gabriel_alvarez_claros.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="inicio" className='hero'>




      <div className="particles-wrapper">
        <CoverParticles />
      </div>




      <div className='content-hero'>


        <div class="hero-text">
          <h1>Hola, soy <span class="name">Gabriel Claros</span></h1>

          <h2 class="subtitle">Desarrollador Web Full-Stack</h2>

          <p class="description">
            Construyo aplicaciones web completas utilizando{" "}
            <span class="highlight">React</span>,{" "}
            <span class="highlight">Node.js</span> y APIs con{" "}
            <span class="highlight">Express</span>,
            enfocándome en experiencias rápidas, funcionales y bien estructuradas.
          </p>

          <div className='btn-content'>
            <button className="btn-cv" onClick={handleDownload}>
              Descargar CV
            </button>

          </div>
        </div>


        <div className='hero-image'>
          <div className='image-wrapper'>

            <img className="hero-img" src={foto} alt="Foto de perfil" />
          </div>

        </div>


      </div>









    </section>
  )
}
