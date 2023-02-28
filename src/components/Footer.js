import React from 'react'

import styles from '@/styles/footer.module.css'

// import article
// import article from "../../public/barnes_the_other_otto_dresel_ncmr.pdf"


const Footer = () => {
  return (
    <div className={styles.footer__container}>
      {/* this contains the contact me directly links */}
      <div className={[styles.footer__section_container, styles.footer__section_container_private]}>
        <h3>Contact Me Directly</h3>
        <span>Email: </span>
          <a href="mailto: molly.l.barnes@gmail.com" className={styles.footer__section_container_anchors}>Molly.L.Barnes@gmail.com</a>
      </div>

      {/* this contains the Private Lesson/Company Links */}
      <div className={[styles.footer__section_container, styles.footer__section_container_private]}>
        <h3>Private Lessons from Skylark Music School</h3>
        <span>Contact Number: </span>
        <a href="tel: 9192059849" className={styles.footer__section_container_anchors}>(919) 205-9849</a>
          <br />
        <span>Website: </span>
          <a href="https://www.skylarkmusicschool.com/" className={styles.footer__section_container_anchors}> Skylark Music School</a>
          <br />
        <span>Email: </span>
          <a href="mailto: info@skylarkmusicschool.com" className={styles.footer__section_container_anchors}>info@skylarkmusicschool.com</a>
      </div>

      {/* this contains the Dowload Links */}
      <div className={[styles.footer__section_container, styles.footer__section_container_private]}>
        <h3>Downloads</h3>
        <a href='' className={styles.footer__section_container_anchors}>CV</a>
        <br/>
        <a href='' className={styles.footer__section_container_anchors}>Article Download</a>
      </div>

      {/* this contains the Copyright Info */}
      {/* Add my personal information, copyright, and any references to assets used */}
      {/* <div className={styles.footer__section_container}>
        <h3>Private Lessons</h3>
        <p>Resume</p>
        <p>CV</p>
        <p>Article on blah blah bloo</p>
      </div> */}
    </div>
  );
}

export default Footer
