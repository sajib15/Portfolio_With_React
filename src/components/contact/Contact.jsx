import React from "react";
import {HiOutlineMail} from "react-icons/hi";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import './contact.css';
import {useRef} from "react";
import emailjs from "emailjs-com";

function Contact(){


  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_orawqet', 'template_kzt9rc9', form.current, 'tQvZcPhB5-rrA-QjQ');
      e.target.reset();
    };



  return <section id="contact">
<h5>Get In Touch</h5>
<h2>Contact Me</h2>
<div className="container contact_container">
<div className="contact_options">
<article className="contact_option">
<HiOutlineMail className="contact_option-icon"/>
<h4>Email</h4>
<h5>sajibahmedshanto14@gmail.com</h5>
<a href="mailto:sajibahmedshanto14@gmail.com" target="_blank">Send a Message</a>
</article>

<article className="contact_option">
<RiMessengerLine className="contact_option-icon"/>
<h4>Messenger</h4>
<h5>sajibahmedshanto14@gmail.com</h5>
<a href="https://m.me/sajibahmed.shanto.37/" target="_blank">Send a Message</a>
</article>

<article className="contact_option">
<BsWhatsapp className="contact_option-icon"/>
<h4>WhatsApp</h4>
<a href="https://wa.me/+8801790363394" target="_blank">Send a Message</a>
</article>
</div>
<form ref={form} onSubmit={sendEmail}>
<input type="text" name="name" placeholder="Your Full Name" required/>
<input type="email" name="email" placeholder="Your Email" required/>
<textarea name="message" placeholder="Your Message" required/>
<button type="submit" className="btn btn-primary">Send Message</button>
</form>
</div>


  </section>
}
export default Contact;
