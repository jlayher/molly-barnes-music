import React, {useState} from "react";

import Link from "next/link";

import styles from "@/styles/nav.module.css";
import DropdownLink from "@/components/Body-Components/DropdownLink";

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => {
<>
<Link href="/" className={styles.link}>Home</Link>
<DropdownLink title={"Teaching"} className={styles.link}></DropdownLink>
<Link href="/testimonials" className={styles.link}>Testimonials</Link>
<Link href="/performance" className={styles.link}>Performance</Link>
<Link href="Barnes_CV_March_2023.pdf" className={styles.link}>CV</Link>
<Link href="/contact" className={styles.link}>Contact</Link>
</>


}

const Nav = () => {

  // const [toggleMenu, setToggleMenu] = useState(false);

  return (
    //navbar container
    <div className={styles.linkcontainer}>
      {/* if nav row is breaking, switch to sandwhich menu,
      sandwhich menu has dropdown menu (in a collumn format) */}
      <nav className={styles.nav_row}>
        <Link href="/" className={styles.link}>Home</Link>
        <DropdownLink title={"Teaching"} className={styles.link}></DropdownLink>
        <Link href="/testimonials" className={styles.link}>Testimonials</Link>
        <Link href="/performance" className={styles.link}>Performance</Link>
        <Link href="Barnes_CV_March_2023.pdf" className={styles.link}>CV</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </nav>
      
      <div className={styles.nav__menu_dropdown}>
        
      </div>
    </div>
  );
};

export default Nav;
