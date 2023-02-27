import React from "react";
import Layout from "@/layout/Layout";

import styles from "@/styles/contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contact__title}>Contact</div>

      <div className={styles.contact__body_container}>
        <div className={styles.contact__body_text}>
          <p>This is my basic contact info</p>

          <div>
            <h3>Downloads</h3>
            <a href="">CV Download</a>
            <a href="">PDF For Article</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
