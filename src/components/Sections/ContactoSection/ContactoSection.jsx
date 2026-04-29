import React from 'react'
import "./ContactoSection.css"
import { FormularioContacto } from './FormularioContacto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'


export const ContactoSection = () => {
  return (
    <section  id="contacto" className='section4'>

      <div className='contacto-title'>

        <h2>Contacto</h2>
      </div>

      
      <div className='content-section4'>


        <div className='form-contacto'>

          <FormularioContacto />
        </div>




        <div className='info-contacto'>
          <div className='info-contacto-header'>



            <h2>Información de Contacto</h2>
          </div>


          {/*Email*/}
          <div className='info-email'>


            <FontAwesomeIcon icon={faEnvelope} size="3x" ></FontAwesomeIcon>
            <div className='info-text'>

              <h4>Email:</h4>
              <h4 className='email'>alvarezclarosjosegabriel568@gmail.com</h4>
            </div>

          </div>

          {/*Phone*/}
          <div className='info-phone'>

            <FontAwesomeIcon icon={faPhone} size="3x" ></FontAwesomeIcon>

            <div className='info-text'>

              <h4>Teléfono:</h4>
              <h4>6187-6506</h4>
            </div>
          </div>

          {/*Location*/}
          <div className='info-location'>

            <FontAwesomeIcon icon={faLocation} size="3x" ></FontAwesomeIcon>

            <div className='info-text'>

              <h4>Ubicación:</h4>
              <h4>Lourdes Colón, El Salvador</h4>
            </div>
          </div>


        </div>




      </div>



    </section>
  )
}
