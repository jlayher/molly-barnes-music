import React from "react";

import Link from "next/link";

import styles from "@/styles/nav.module.css";
import DropdownLink from "@/components/Body-Components/DropdownLink";

const Nav = () => {
  return (
    <div className={styles.linkcontainer}>
      <nav className={styles.nav_row}>
        <Link href="/" className={styles.link}>Home</Link>

        <DropdownLink title={"Teaching"} className={styles.link}></DropdownLink>

        <Link href="/testimonials" className={styles.link}>Testimonials</Link>
        <Link href="/performance" className={styles.link}>Performance</Link>
        {/*This should link to the CV in the href */}
        <Link href="barnes_the_other_otto_dresel_ncmr.pdf" className={styles.link}>CV</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </nav>
    </div>
  );
};

export default Nav;
