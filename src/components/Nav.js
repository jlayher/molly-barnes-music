import React from 'react'

import Link from 'next/link'

import styles from "@/styles/nav.module.css"
import DropdownLink from "@/components/Body-Components/DropdownLink";



const Nav = () => {
  return (
      <div className={styles.linkcontainer}>
        {/* <p className='linkcontainer'>I'm testing things</p> */}
        <nav>
        <Link href="/" className={styles.link}>Home</Link>

        {/* Dropdown for Teaching */}
        <DropdownLink title={"Academic"}></DropdownLink>
          <Link href="/academic-teaching" className={styles.link}>Academic</Link>
          <Link href="/private-lessons" className={styles.link}>Private Lessons</Link>
          {/* <Link href="/research" className={styles.link}>Research</Link> */}
          <Link href="/testimonials" className={styles.link}>Testimonials</Link>
          <Link href="/performance" className={styles.link}>Performance</Link>


{/*This should link to the CV in the href */}
          <Link href='barnes_the_other_otto_dresel_ncmr.pdf' className={styles.link}>CV</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>
      </div>
  );
};

export default Nav
