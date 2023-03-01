import React from "react";
import Layout from "@/layout/Layout";

import styles from "@/styles/contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contact__title}>Contact</div>

      <div className={styles.contact__body_container}>
        <div className={styles.contact__body_text}>

            <h3 className={styles.contact__body_titles}>Contact Me</h3>
              <span className={styles.contact__body_item}>Email: </span>
                <a href="mailto: molly.l.barnes@gmail.com" className={styles.footer__section_container_anchors}>Molly.L.Barnes@gmail.com</a>

            <h3 className={styles.contact__body_titles}>Contact Skylark Music School</h3>
              <span className={styles.contact__body_item}>Contact Number: </span>
                <a href="tel: 9192059849" className={styles.footer__section_container_anchors}>(919) 205-9849</a>
                  <br />
              <span className={styles.contact__body_item}>Website: </span>
                <a href="https://www.skylarkmusicschool.com/" className={styles.footer__section_container_anchors}> Skylark Music School</a>
                <br />
              <span className={styles.contact__body_item}>Email: </span>
                <a href="mailto: info@skylarkmusicschool.com" className={styles.footer__section_container_anchors}>info@skylarkmusicschool.com</a>




            <h3 className={styles.contact__body_titles}>Downloads</h3>
              <a href='' className={styles.footer__section_container_anchors}>CV</a>
              <br/>
              <a href='' className={styles.footer__section_container_anchors}>Article Download</a>
          </div>
      </div>
      
      {/* maybe add image of molly on one side */}

    </Layout>
  );
};

export default Contact;
