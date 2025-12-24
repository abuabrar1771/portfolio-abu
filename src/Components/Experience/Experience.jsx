import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ExperCss from "./../Experience/Experience.module.css";

function Experience() {
  const scrollRef = useRef(null);

  const scrollNext = () => {
    scrollRef.current.scrollLeft += 320;
  };

  const scrollPrev = () => {
    scrollRef.current.scrollLeft -= 320;
  };

  return (
    <section className={ExperCss.experience}>
      <div className={ExperCss.header}>
        <h2 className={ExperCss.title}>Experience</h2>
      </div>

      <div className={ExperCss.wrapper}>
        {/* SCROLL ROW */}
        <div className={ExperCss.experienceRow} ref={scrollRef}>
          <div className={ExperCss.expCard}>
            <h2>Software Developer</h2>
            <h3>Transporeon - A Trimble Company</h3>
            <h5>09/2023 - Present, Hyderabad</h5>
            <ul>
              <li>
                Achievements/Tasks Developed and maintained scalable solutions
              </li>
              <li>Optimized system performance and reliability</li>
              <li>Integrated third-party APIs</li>
              <li>Code reviews and testing</li>
              <li>Worked with QA and product managers</li>
            </ul>
          </div>

          <div className={ExperCss.expCard}>
            <h2>Software Engineer</h2>
            <h3>Wipro Technologies</h3>
            <h5>11/2021 - 09/2023, Chennai</h5>
            <ul>
              <li>Developed IOS Plugin</li>
              <li>Migrated Application to Angular14</li>
              <li>Created internal Angular framework</li>
              <li>Handled multi-flow migration</li>
              <li>Worked with QA and product teams</li>
            </ul>
          </div>

          <div className={ExperCss.expCard}>
            <h2>Android, React Native, Developer</h2>
            <h3>Wipro Technologies</h3>
            <h5>12/2020 - 10/2021, Coimbatore</h5>
            <p className={ExperCss.meta}>
              <span className={ExperCss.watermark}>
                {" "}
                • DTT Provides Custom Solutions, Build Product & Offer
                Technology Services And Training
                <a
                  href="https://dwelltimetech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dwelltimetech.com
                </a>
              </span>
            </p>

            <ul>
              <li>Built Android CMS application</li>
              <li>Built admin dashboard</li>
              <li>Hybrid E-Commerce App</li>
              <li>Multi-flow React Native project</li>
              <li>Timely feature delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
