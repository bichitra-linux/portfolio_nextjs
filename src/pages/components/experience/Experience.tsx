import React from "react";
import styles from "./experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Check out</h5>
      <h2>My skills</h2>
      <div className={`container ${styles.experience_container}`}>
        <div className={styles.experience_frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.experience_content}>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>NextJS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>TypeScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Material UI</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS / SASS / SCSS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Adobe CC</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className={styles.experience_backend}>
          <h3>Backend Development</h3>
          <div className={styles.experience_content}>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Spring Boot</h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */}
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>API&apos;s</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NoSQL(MongoDB)</h4>
              </div>
            </article>
            <article className={styles.experience_details}>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
