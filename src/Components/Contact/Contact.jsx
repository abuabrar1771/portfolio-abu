import React, { useEffect, useState } from "react";
import ContactCss from "./../Contact/Contact.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true, // animation happens only once
    });
  }, []);
  return (
    <>
      <section id="contact">
        <div className={ContactCss.contact}>
          <div>
            <h2 data-aos="fade-right" data-aos-delay="100">
              Contact Me
            </h2>
            <p data-aos="fade-right" data-aos-delay="800">
              Let’s Connect
            </p>
          </div>
          <form data-aos="fade-left" data-aos-delay="1000">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your Name"
              id="name"
              required
            ></input>
            <label>Email:</label>
            <input
              type="text"
              placeholder="Enter your Email"
              id="email"
              required
            ></input>
            <label>Phone Number:</label>
            <input
              type="text"
              placeholder="Enter your Phone Number"
              id="phone"
              required
            ></input>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
            <div className={ContactCss.contactlinks}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abrarfaisal82@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={ContactCss.email}
              >
                📧 Email
              </a>
              <a
                href="https://web.whatsapp.com/send?phone=917871095074&text=Hi%20Abrar,%20I%20would%20like%20to%20hire%20you."
                target="_blank"
                rel="noreferrer"
                className={ContactCss.whatsapp}
              >
                💬 WhatsApp
              </a>
              <a
                href="https://linkedin.com/in/Abrar Faisal"
                target="_blank"
                rel="noreferrer"
                className={ContactCss.linkedin}
              >
                🔗 LinkedIn
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
