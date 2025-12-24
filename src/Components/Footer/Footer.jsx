import React, { useEffect, useState } from "react";
import FooterCss from "./../Footer/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
      AOS.init({
        duration: 1500,
        easing: "ease-in-out",
        once: true, // animation happens only once
      });
    }, []);
  return (
    <>
      <section className={FooterCss.footer}>
        <div className={FooterCss.container}>
          {/* LEFT SIDE */}
          <div className={FooterCss.left} data-aos="fade-right" data-aos-delay="100">
            <h1 className={FooterCss.heroName}>M. Abrar Ahamed</h1>

            <div className={FooterCss.contact}>
              <p>
                <a href="tel:+917871095074">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+91 78710 95074</span>
                </a>
              </p>

              <p>
                <a
                  href="https://www.google.com/maps/place/Salem,+Tamil+Nadu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>Salem, Tamil Nadu</span>
                </a>
              </p>
            </div>

            <div className={FooterCss.social}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          {/* MIDDLE */}
          <div className={FooterCss.middle} data-aos="fade" data-aos-delay="500">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className={FooterCss.right} data-aos="fade-left" data-aos-delay="1000">
            <h4>Information</h4>
            <ul>
              <li>
                <a href="#">Membership</a>
              </li>
              <li>
                <a href="#">Privacy & Policy</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
