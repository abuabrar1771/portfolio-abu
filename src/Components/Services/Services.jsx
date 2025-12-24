import React, { useEffect, useState } from "react";
import ServiceCss from "./Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AOS from "aos";
import "aos/dist/aos.css";

// solid icons
import {
  faLayerGroup,
  faScrewdriverWrench,
  faLaptopCode,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

// brand icons
import {
  faAndroid,
  faApple,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";

function Services() {
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
      <section id="service">
        <div className={ServiceCss.service}>
          <h2 data-aos="fade-right" data-aos-dely="100">Services</h2>
          <h4 data-aos="fade-right" data-aos-dely="500">
            Building scalable web and mobile applications with modern
            technologies.
          </h4>
          <div className={ServiceCss.service_cards}>
            <div className={ServiceCss.service_card} data-aos="fade-right" data-aos-delay="100">
              <FontAwesomeIcon
                icon={faLaptopCode}
                className={ServiceCss.serviceIcon}
              />
              <h3>Java Development</h3>
              <p>
                Building robust applications using Core & Advanced Java
                Developing secure RESTful APIs with Spring Boot Efficient
                database integration & performance optimization
              </p>
              {/* <a href="#">
                Read More <FontAwesomeIcon icon={faArrowRightLong} />
              </a> */}
            </div>
            <div className={ServiceCss.service_card} data-aos="fade" data-aos-delay="500">
              <FontAwesomeIcon
                icon={faAndroid}
                className={ServiceCss.serviceIcon}
              />
              <h3>Android App Development</h3>
              <p>
                Designing modern apps using Java & Kotlin Implementing clean
                UI/UX with Material Design Integrating APIs, databases, and
                performance optimization
              </p>
              {/* <a href="#">
                Read More <FontAwesomeIcon icon={faArrowRightLong} />
              </a> */}
            </div>
            <div className={ServiceCss.service_card} data-aos="fade-left" data-aos-delay="1000">
              <FontAwesomeIcon
                icon={faApple}
                className={ServiceCss.serviceIcon}
              />
              <h3>iOS App Development </h3>
              <p>
                High-performance apps using Swift & SwiftUI Creating intuitive
                UI/UX following Apple guidelines Integrating APIs, databases,
                and App Store–ready features
              </p>
              {/* <a href="#">
                Read More <FontAwesomeIcon icon={faArrowRightLong} />
              </a> */}
            </div>
            <div className={ServiceCss.service_card} data-aos="fade-right" data-aos-delay="1500">
              <FontAwesomeIcon
                icon={faAngular}
                className={ServiceCss.serviceIcon}
              />
              <h3>Angular Development </h3>
              <p>
                Building dynamic web applications using Angular & TypeScript
                Developing reusable components with RxJS & modular architecture
                Integrating REST APIs and optimizing performance
              </p>
              {/* <a href="#">
                Read More <FontAwesomeIcon icon={faArrowRightLong} />
              </a> */}
            </div>
            <div className={ServiceCss.service_card} data-aos="fade" data-aos-delay="2000">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className={ServiceCss.serviceIcon}
              />
              <h3>MERN Stack</h3>
              <p>
                Full-stack applications using MERN Developing secure REST APIs
                and responsive user interfaces Optimizing performance and
                ensuring scalable solutions
              </p>
              {/* <a href="#">
                Read More <FontAwesomeIcon icon={faArrowRightLong} />
              </a> */}
            </div>

            <div className={ServiceCss.service_card}  data-aos="fade-left" data-aos-delay="2500">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className={ServiceCss.serviceIcon}
              />
              <h3>Maintenance & Support </h3>
              <p>
                Providing ongoing application monitoring and bug fixes Ensuring
                security updates, backups, and performance stability Offering
                reliable technical support and system enhancements
              </p>
              {/* <a href="#">
                Read More <FontAwesomeIcon icon={faArrowRightLong} />
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
