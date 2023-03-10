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
            <span className={styles.contact__body_item}>Email: &nbsp;<a href="mailto: molly.l.barnes@gmail.com" className={styles.footer__section_container_anchors}>Molly.L.Barnes@gmail.com</a></span>
              

          <h3 className={styles.contact__body_titles}>Contact Skylark Music School</h3>
            <span className={styles.contact__body_item}>Contact Number: &nbsp;<a href="tel: 9192059849" className={styles.footer__section_container_anchors}>(919) 205-9849</a></span>
            <span className={styles.contact__body_item}>Website: &nbsp;<a href="https://www.skylarkmusicschool.com/" className={styles.footer__section_container_anchors}> Skylark Music School</a></span>
            <span className={styles.contact__body_item}>
            Email: &nbsp;<a href="mailto: info@skylarkmusicschool.com" className={styles.footer__section_container_anchors}>info@skylarkmusicschool.com</a>
          </span>
          
          <h3 className={styles.contact__body_titles}>Downloads</h3>
          
            <a href='Barnes_CV_March_2023.pdf' download='Barnes_CV_March_2023.pdf' className={styles.contact__body_item_downloads}>CV Download</a>

            <a href='barnes_the_other_otto_dresel_ncmr.pdf' download='barnes_the_other_otto_dresel_ncmr.pdf' className={styles.contact__body_item_downloads}>Article Download</a>
          </div>
      </div>
    </Layout>
  );
};

export default Contact;
