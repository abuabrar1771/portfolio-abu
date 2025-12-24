import React, { useEffect, useState, forwardRef } from "react";
import AboutCss from "./About.module.css";
import About_img from "../../assets/abu-4.png";
import Typed from "typed.js";

import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    const typed = new Typed(".multiple", {
      strings: [
        "Java Developer",
        "Android Developer",
        "iOS Developer",
        "Angular Developer",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1300,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true, // animation happens only once
    });
  }, []);
  const MyButton = forwardRef((props, ref) => {
    return (
      <button ref={ref} {...props}>
        Click Me
      </button>
    );
  });
  return (
    <>
      <section id="about">
        <div className={AboutCss.about}>
          <div
            className={AboutCss.about_img}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img src={About_img} alt="" />
          </div>
          <div
            className={AboutCss.about_info}
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <h2 data-aos="fade-right" data-aos-dely="600">
              About Me
            </h2>
            <h3 data-aos="fade-right" data-aos-dely="800">
              {" "}
              Abrar Ahamed
            </h3>
            <h4 data-aos="fade-right" data-aos-dely="1000">
              Hi I am&nbsp;<span className="multiple"></span>
            </h4>
            <p data-aos="fade-right" data-aos-delay="1200">
              I am a versatile developer specializing in Java, Android, iOS, and
              Angular, with a strong focus on building scalable,
              high-performance applications. I enjoy transforming complex
              requirements into intuitive user experiences and writing clean,
              maintainable code. I am passionate about learning new technologies
              and delivering reliable solutions across mobile and web platforms.
            </p>
            <a href="/abu-resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="download-btn">Download CV</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
