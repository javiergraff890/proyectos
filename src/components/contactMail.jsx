import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactMail.css'
import Swal from 'sweetalert2';

export default function ContactUs () {
    const form = useRef();
    const input_name = useRef(null);
    const input_email = useRef(null);
    const textArea = useRef(null);

    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_3tmrktb', 'template_1qw86if', form.current, {
          publicKey: 'oFPzDRcjRY2rAaRJd',
        })
        .then(
          () => {
            Swal.fire({
                position: 'center',
                text: 'Mensaje Enviado',
                width: '300px',
                backdrop: 'rgba(190, 224, 227, 0.43)',
                customClass: {
                    container: 'custom-container',
                    timerProgressBar: 'mi-barra-de-progreso-css',
                    confirmButton: 'css-confirm'
                  },
                icon: 'info',
                timer: 5000, // Tiempo en milisegundos (5 segundos en este caso)
                timerProgressBar: true,
                showConfirmButton: true,
              });
              input_name.current.value="";
              input_email.current.value="";
              textArea.current.value="";
          },
          (error) => {
            
            Swal.fire({
                position: 'center',
                text: 'Error desconocido, contactar a jjaviergraff@gmail.com',
                width: '300px',
                backdrop: 'rgba(190, 224, 227, 0.43)',
                customClass: {
                    container: 'custom-container',
                    timerProgressBar: 'mi-barra-de-progreso-css',
                    confirmButton: 'css-confirm'
                  },
                icon: 'info',
                timer: 5000, // Tiempo en milisegundos (5 segundos en este caso)
                timerProgressBar: true,
                showConfirmButton: true,
              });
                input_name.current.value="";
              input_email.current.value="";
              textArea.current.value="";
          },
        );
    };

  
    return (
        <div className="conteiner-form-mail">
                <form ref={form} onSubmit={sendEmail}>
                <label>Nombre</label>
                <input ref={input_name} required maxLength="50" type="text" name="from_name" />
                <label>Email</label>
                <input ref={input_email} required maxLength="50" type="email" name="user_email" />
                <label>Mensaje</label>
                <textarea ref={textArea} required maxLength="400" name="message" />
                <input className='button-submit' type="submit" value="Send" />
            </form>
        </div>
      
    );
  }