import React, { useEffect, useState } from "react";
import ProjectCss from "./../Projects/Projects.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true, // animation happens only once
    });
  }, []);

  return (
    <>
      <section id="projects">
        <div className={ProjectCss.project}>
          <h2 data-aos="fade-right" data-aos-dely="100">Project Title</h2>
          <p data-aos="fade-right" data-aos-dely="200">The projects are done in my college time</p>
          <div className={ProjectCss.project_cards}>
            <div className={ProjectCss.project_card} data-aos="fade-right" data-aos-delay="500">
              {/* <img src={ImgAr} alt="AR Bubble Attack" /> */}
              <div>
                <h4>AR Bubble Attack</h4>
                <p>
                  An immersive Augmented Reality game releases balloons into
                  environment which the player has to shoot
                </p>
                {/* <a href="#">
                  Read More <FontAwesomeIcon icon={faArrowRightLong} />
                </a> */}
              </div>
            </div>
            <div className={ProjectCss.project_card} data-aos="fade-left" data-aos-delay="1000">
              {/* <img src={ImgHb} alt="AR Bubble Attack" /> */}
              <div>
                <h4>Home Automation Using BlueTooth</h4>
                <p>
                  A centralized smart home system to control all electrical
                  appliances connected via Bluetooth
                </p>
                {/* <a href="#">
                  Read More <FontAwesomeIcon icon={faArrowRightLong} />
                </a> */}
              </div>
            </div>
            <div className={ProjectCss.project_card}data-aos="fade-right" data-aos-delay="1500">
              {/* <img src={ImgFp} alt="FingerPrint" /> */}
              <div>
                <h4>FingerPrint Recognition using Fuzzy</h4>
                <p>
                  A centralized smart home system to control all electrical
                  appliances connected via Bluetooth
                </p>
                {/* <a href="#">
                  Read More <FontAwesomeIcon icon={faArrowRightLong} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
