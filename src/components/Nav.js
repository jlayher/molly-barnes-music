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
        <Link href="Barnes_CV_March_2023.pdf" className={styles.link}>CV</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </nav>
    </div>
  );
};

export default Nav;
