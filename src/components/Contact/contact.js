import React, { useRef } from 'react'; // Додаємо імпорт useRef
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_veronikadeiko', 'template_8wsba6u', form.current, {
            publicKey: 'ojGBUKqjF61wl1YR8',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    };

    return (
        <section id='contact'>
            <h1 className='contactTitle uppercase'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work oppotunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name='name'></input>
                <input type="email" className="email" placeholder="Your Email" name='email'></input>
                <textarea name="message" className="msg" rows="5" placeholder="Your Message"></textarea>
                <button type='submit' value="Send" className='submitBtn'>Submit</button>
                <div className='links'>
                    <a class="contact-icon-header link flex justify-center align-items-center" href="https://t.me/deveronika" target="_blank">
                     <FontAwesomeIcon icon={faTelegram} />   {/* Telegram icon */}
                    </a>
                    <a class="contact-icon-header link flex justify-center align-items-center" href="mailto:deikoveronika@gmail.com" target="_blank">
                     <FontAwesomeIcon icon={faEnvelope} /> {/* Gmail icon */}
                    </a>
                    <a class="contact-icon-header link flex justify-center align-items-center" href="https://github.com/DeikoVeronika" target="_blank">
                     <FontAwesomeIcon icon={faGithub} />    {/* GitHub icon */}
                    </a>
                    <a class="contact-icon-header link flex justify-center align-items-center" href="https://www.instagram.com/deiko_veronika/" target="_blank">
                     <FontAwesomeIcon icon={faInstagram} /> {/* Instagram icon */}
                    </a>
                </div>
                <div class="flex contacts-icons-header contacts-icon-contact">
            
          </div>
            </form>
        </section>
    )
}

export default Contact;
