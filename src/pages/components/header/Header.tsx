import React from "react";
import styles from "./header.module.css";
import CTA from "./CTA";
import headerpicture2 from "../../../assets/header-picture2.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header_container}`}>
        <h5>Hello I'm</h5>
        <h1>Bichitra Gautam</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={styles.bichitra}>
          <img src={headerpicture2.src} alt="Bichitra Gautam" />
        </div>
        <a href="#contact" className={styles.scroll_down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
