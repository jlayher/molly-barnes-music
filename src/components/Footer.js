import React from 'react'

import styles from '@/styles/footer.module.css'

const Footer = () => {
  return (
      <div className={styles.footer__container}>
      
        {/* this contains the contact me directly links */}
        <div className={styles.footer__section_container}>
            <h3>Contact Me Directly</h3>
            <p>Call Me (Contact Directly to cell)</p>
            <p>Personal Email Link</p>
            <p>Potential Social Media</p>
          </div>

        {/* this contains the Dowload Links */}
        <div className={styles.footer__section_container}>
          <h3>Downloads</h3>
          <p>Resume</p>
          <p>CV</p>
          <p>Article on blah blah bloo</p>
        </div>

        {/* this contains the Private Lesson/Company Links */}
        <div className={styles.footer__section_container}>
        <h3>Private Lessons from
          <br/>Skylar Music School</h3>
          <p>Company Phone #</p>
          <a href="https://www.skylarkmusicschool.com/">Visit Skylar Music School</a>
          <p>Company Email</p>
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
    
  )
}

export default Footer
