import React from 'react'

import styles from '@/styles/footer.module.css'

// import article
// import article from "../../public/barnes_the_other_otto_dresel_ncmr.pdf"


const Footer = () => {
  return (
    <div className={styles.footer__container}>
      
      <div className={styles.footer__container_toplinks}>
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
          <a href="Barnes_CV_March_2023.pdf" className={styles.footer__section_container_anchors} download="Barnes_CV_March_2023.pdf">CV</a>
          
          <br/>
          <a href="barnes_the_other_otto_dresel_ncmr.pdf" className={styles.footer__section_container_anchors} download="barnes_the_other_otto_dresel_ncmr.pdf">Article Download</a>
        </div>

      </div>


      {/* this contains the Copyright Info */}
      <div className={styles.footer__container_bottom}>
        <div className={styles.footer__container_bottom_copyright}>&copy;2023 John Layher: &nbsp;Web Developer,&nbsp; All Rights Reserved </div>
 
        <div className={styles.footer__container_bottom_links}>
          <span className={styles.footer__container_bottom_links}>Email: &nbsp;</span>
          <a href="mailto: john.e.layher@gmail.com" className={[ styles.footer__section_container_anchors, styles.footer__container_bottom_links]}>john.e.layher@gmail.com </a>
  
          {/* <span>Portfolio: </span>
          <a href="https://www.johnlayher-portfolio.com/" className={styles.footer__section_container_anchors}> https://www.johnlayher-portfolio.com/</a> */}
        </div>
        
      </div>

    </div>
  );
}

export default Footer
