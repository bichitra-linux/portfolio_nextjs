import React from "react";
import  styles from "./footer.module.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* eslint-disable-next-line */}
      <a href="#" className={styles.footer_logo}>
        Bichitra Gautam
      </a>
      <ul className={styles.permalinks}>
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={styles.footer_socials}>
        <a href="https://www.youtube.com/@linepsofficial" aria-label="YouTube">
          <BsYoutube />
        </a>
        <a href="https://www.linkedin.com/in/Bichitra-Gautam/" aria-label="LinkedIn">
          <BsLinkedin />
        </a>
        <a href="https://github.com/bichitra-linux" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
      <div className={styles.footer_copyright}>
        <small>&copy; Bichitra Gautam. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
