import React from 'react'

import styles from '@/styles/footer.module.css'

// import article
// import article from "../../public/barnes_the_other_otto_dresel_ncmr.pdf"


const Footer = () => {
  return (
    <div className={styles.footer__container}>
      {/* this contains the contact me directly links */}
      <div className={styles.footer__section_container}>
        <h3>Contact Me Directly</h3>
        <span>Contact Number: </span>
          <a href="tel: 7046541519">(704) 654-1519</a>
        <br/>
        <span>Email: </span>
          <a href="mailto: mollylbarnes@gmail.com">mollylbarnes@gmail.com</a>
          <br />
        <p>Potential Social Media</p>
      </div>

      {/* this contains the Private Lesson/Company Links */}
      <div className={styles.footer__section_container}>
        <h3>Private Lessons from Skylar Music School</h3>
        <span>Contact Number: </span>
          <a href="tel: 9192059849">(919) 205-9849</a>
          <br />
        <span>Website: </span>
          <a href="https://www.skylarkmusicschool.com/"> Skylar Music School</a>
          <br />
        <span>Email: </span>
          <a href="mailto: info@skylarkmusicschool.com">info@skylarkmusicschool.com</a>
      </div>

      {/* this contains the Dowload Links */}
      <div className={styles.footer__section_container}>
        <h3>Downloads</h3>
        <p>Resume</p>
        <p>CV</p>
        <p>Article Download</p>
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
