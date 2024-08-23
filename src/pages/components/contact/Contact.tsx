import React, { useState } from "react";
import styles from "./contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  const [emailIsSent, setEmailIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n7papu2",
        "template_9k75o76",
        e.target as HTMLFormElement,
        "JrpLuB-uxzB0N6KCt"
      )
      .then(() => {
        setEmailIsSent(true);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className={`container ${styles.contact_container}`}>
        <div className={styles.contact_options}>
          <article className={styles.contact_option}>
            <MdOutlineEmail className={styles.contact_option_icon} />
            <h4>LinkedIn</h4>
            <h5>Bichitra Gautam</h5>
            <a href="https://www.linkedin.com/messaging/compose/?recipient=urn:li:person:bichitra-linux">
  Send a message
</a>
          </article>
        </div>
        {emailIsSent ? (
          <h2 id={styles.Contact_sent_message}>
            Your Message was successfully sent!
          </h2>
        ) : (
          <form className={styles.form} onSubmit={sendEmail}>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className={styles.textarea}
              name="message"
              rows={7}
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
