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
          <div className={styles.contact__body_item}>
            Email: &nbsp;
            <a
              href="mailto: molly.l.barnes@gmail.com"
              className={styles.footer__section_container_anchors}>
              Molly.L.Barnes@gmail.com
            </a>
          </div>

          <h3 className={styles.contact__body_titles}>
            Contact Skylark Music School
          </h3>
          <div className={styles.contact__body_item}>
            Contact Number: &nbsp;
            <a href="tel: 9192059849">
              (919) 205-9849
            </a>
          </div>
          <div className={styles.contact__body_item}>
            Website: &nbsp;
            <a
              href="https://www.skylarkmusicschool.com/"
              className={styles.footer__section_container_anchors}>
              Skylark Music School
            </a>
          </div>
          <div className={styles.contact__body_item}>
            Email: &nbsp; 
            <a
              href="mailto: info@skylarkmusicschool.com"
              className={styles.footer__section_container_anchors}>
              info@skylarkmusicschool.com
            </a>
          </div>

          <h3 className={styles.contact__body_titles}>Downloads</h3>
          <div className={styles.contact__body_item}>
          <a
            href="Barnes_CV_March_2023.pdf"
            download="Barnes_CV_March_2023.pdf"
            className={styles.contact__body_item_downloads}>
            CV Download
            </a>
            </div>
            <div className={styles.contact__body_item}>
          <a
            href="barnes_the_other_otto_dresel_ncmr.pdf"
            download="barnes_the_other_otto_dresel_ncmr.pdf"
            className={styles.contact__body_item_downloads}>
            Article Download
          </a>

          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;
