import React, { useEffect, useState } from "react";
import NavCSS from "./../Nav/Nav.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import HeaderCSS from "./Headers.module.css";
import Hero from "../../assets/abu-profile-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true, // animation happens only once
    });
  }, []);
  return (
    <>
      <section id="home">
        <div className={HeaderCSS.hero}>
          <div className={HeaderCSS.hero_info}>
            <h1 data-aos="fade-right" data-aos-delay="1000">
              Hi I am&nbsp;
              <span>Abrar Ahamed</span>
            </h1>
            <p data-aos="fade-right" data-aos-dely="1000">
              “Engineering solutions for real-world problems. Focused on
              performance, scalability, and clean architecture. Building the web
              with performance and precision. Turning ideas into high-quality
              web experiences.”
            </p>
            <div className={HeaderCSS.social_icons}>
              <span
                className={HeaderCSS.icon}
                data-aos="fade-right"
                data-aos-delay="1200"
              >
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
              </span>
              <span
                className={HeaderCSS.icon}
                data-aos="fade-right"
                data-aos-delay="1300">
               <a href="https://facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
              </span>
              <span
                className={HeaderCSS.icon}
                data-aos="fade-right"
                data-aos-delay="1400"
              >
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
              </span>
              <span
                className={HeaderCSS.icon}
                data-aos="fade-right"
                data-aos-delay="1500"
              >
                <a href="https://github.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                              </a>
              </span>
            </div>

            <div className={HeaderCSS.hero_btns}>
              <button data-aos="fade-right" data-aos-dely="1600">
                Hire Me
              </button>
              <button data-aos="fade-right" data-aos-dely="1700">
                Contact
              </button>
            </div>
          </div>
          <div
            className={HeaderCSS.hero_img}
            data-aos="fade-left"
            data-aos-delay="1800"
          >
            <img src={Hero} alt="Hero Image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
