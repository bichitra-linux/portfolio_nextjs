import React from "react";
import styles from "./header.module.css"
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className={styles.header_socials}>
      <a target="_blank" rel="noopener" href="https://www.youtube.com/@linepsofficial" aria-label="YouTube">
        <BsYoutube />
      </a>
      <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/Bichitra-Gautam/" aria-label="LinkedIn">
        <BsLinkedin />
      </a>
      <a target="_blank" rel="noopener" href="https://github.com/bichitra-linux" aria-label="GitHub">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
