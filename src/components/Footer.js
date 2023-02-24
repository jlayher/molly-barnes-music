import React from 'react'

import styles from '@/styles/footer.module.css'

const Footer = () => {
  return (
      <div className={styles.footer__container}>
      <h1>This is the footer</h1>

      <div>
        <p>Call (Contact Directly to cell)</p>
      </div>

      <div>
        <p>Personal Email Link</p>
      </div>

      <div>
        <p>Private Lessons Contact Info</p> 
        <div>
          <p>Company Phone #</p>
          <p>Company Website Link</p>
          <p>Company Email</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
