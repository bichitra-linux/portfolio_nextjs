import React from "react";
import styles from "./about.module.css";
import profile3 from "../../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to learn</h5>
      <h2>About Me</h2>
      <div className={`container ${styles.about_container}`}>
        <div className={styles.about_me}>
          <div className={styles.about_me_image}>
            <img className={styles.about_me_image_edit} src={profile3.src} alt="About Bichitra image" />
          </div>
        </div>
        <div className={styles.about_content}>
          <div className={styles.about_cards}>
            <article className={styles.about_card}>
              <FaAward className={styles.about_icon} />
              <h5>Experience</h5>
              <small>
                3+ Years Dev XP
              </small> <br />
              <small>
                2,000+ Subscribers
              </small>
            </article>
            <article className={styles.about_card}>
              <FiUsers className={styles.about_icon} />
              <h5>Education</h5>
              <small>
                B.Sc. Computer Science and Information Technology
                <br />
                {/*M.Sc. Innovation &
                Entrepreneurship*/}
              </small>
            </article>
            <article className={styles.about_card}>
              <VscFolderLibrary className={styles.about_icon} />
              <h5>Projects</h5>
              <small>
                20+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
            I'm a fullstack developer currently working on the GUI of The UMS System, a
            large scale Mrdical Records Management system. My primary tech stack is NextJS 14, Material Design, TypeScript, Node, and SCSS / SASS for styling. Git is used for team collaboration and Vercel and Netlify deployment.
            My day-to-day consists of a daily stand-up and biweekly sprints. My core responsibility centers on creating and maintaining components for new features that interact with our large databases as
            well as creating and designing an effective user experience.<br />
            Additionally, I actively participate in code reviews to ensure the quality and consistency of our codebase, and I frequently collaborate with UX/UI designers to refine the interface based on user feedback.
            I also stay up-to-date with the latest developments in web technologies and incorporate best practices to enhance performance and security. My role requires continuous learning and adaptation to meet evolving 
            project requirements and to implement innovative solutions that drive the success of The UMS System.
            
          </p>
          <p>
            When I'm not coding at my job, I do miscellaneous activities on my YouTube channel with
            2,000+ subscribers, called <a href="https://www.youtube.com/@linepsofficial">Lineps Official</a>
          </p>
          {/* <p>
            As a problem solver at heart I have a background in Engineering,
            Product Design, & Entrepreneurship. I previously also aquired funding by Innovation Norway and ran a startup called Streets of Oslo. In a past life I also worked as a Consultant in TietoEvry within Product Development and Pre-Sales of RPA technology.
          </p>
          <p>
            In 2022, after a career focused on the business side of IT, I
            immersed myself in the technical side, and become a frontend
            developer through Academic Work's 12-week intensive training in
            JavaScript. I then worked as a JavaScript Consultant for Academic
            Work before continuing my career as a Frontend Developer for
            Integration Systems AS.
          </p> */}
          <p></p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
