import React, { useEffect, useState } from "react";
import NavCSS from "./../Nav/Nav.module.css";

import AOS from "aos";
import "aos/dist/aos.css"; 

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true, // animation happens only once
    });
  }, []);

    let [navbar, setnavbar] = useState({ height: 0, padding: 0 });

    const activeNav = () => {
      if (navbar.height == 0) {
        setnavbar({ height: "250px", padding: "20px" });
      } else {
        setnavbar({ height: 0, padding: 0 });
      }
    };
   const [open, setOpen] = useState(false);
  

  // const activeNav = () => {
  //   setIsOpen((prev) => !prev);
  // };

  return (
    <>
      <section>
        <header className={NavCSS.header}>
          <div className={NavCSS.logo} data-aos="fade-right" >
            <h2>
              M<span>.Abrar Ahamed</span>
            </h2>
          </div>
          <div className={`${NavCSS.nav} ${isOpen ? NavCSS.active : ""}`}>
            <a href="#home" data-aos="fade-down" data-aos-delay ="200">
              Home
            </a>
            <a href="#about" data-aos="fade-down" data-aos-delay ="300">
              About Me
            </a>
            <a href="#service" data-aos="fade-down" data-aos-delay ="400">
              Services
            </a>
            <a href="#projects" data-aos="fade-down" data-aos-delay ="500">
              Projects
            </a>
            <a href="#contact" data-aos="fade-down" data-aos-delay ="600">
              Contact
            </a>
          </div>
          <div
            className={`${NavCSS.bars} ${isOpen ? NavCSS.open : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
      </section>
    </>
  );
}

export default Nav;
