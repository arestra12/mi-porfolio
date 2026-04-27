import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./FormularioContacto.css";

export const FormularioContacto = () => {

  const Service_ID=import.meta.env.VITE_Service_ID
  const Template_ID=import.meta.env.VITE_Template_ID
  const Api_Email=import.meta.env.VITE_Api_Email

  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      Service_ID, //Id
      Template_ID, //Template
      form.current,
      Api_Email //public key
    )
    .then(() => {
      alert("Mensaje enviado correctamente 🚀");
      e.target.reset();
    })
    .catch(() => {
      alert("Error al enviar ❌");
    });
  };

  return (
    <form ref={form} onSubmit={enviarEmail} className="formulario">
      <h2>Contáctame</h2>

      <input
        type="text"
        name="user_name"
        placeholder="Tu nombre"
        required
      />

      <input
        type="email"
        name="user_email"
        placeholder="Tu correo"
        required
      />

      <textarea
        name="message"
        placeholder="Tu mensaje"
        required
      ></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
};