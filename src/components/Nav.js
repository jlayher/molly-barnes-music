import React from 'react'

import Link from 'next/link'

import styles from "@/styles/nav.module.css"



const Nav = () => {
  return (
      <div className={styles.linkcontainer}>
        {/* <p className='linkcontainer'>I'm testing things</p> */}
        <nav>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/academic-teaching" className={styles.link}>Academic</Link>
          <Link href="/private-lessons" className={styles.link}>Private Lessons</Link>
          {/* <Link href="/research" className={styles.link}>Research</Link> */}
          <Link href="/testimonials" className={styles.link}>Testimonials</Link>
        <Link href="/performance" className={styles.link}>Performance</Link>
        <Link href="/molly_black_full" className={styles.link}>CV
        {/* <button className={styles.link} >CV</button> */}
        </Link>
          {/* <a href="/cv" className={styles.link}>CV</a> */}
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>
      </div>
  );
};

export default Nav
