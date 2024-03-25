import React, { useState } from "react";
import Nav from "./Nav";

import Link from "next/link";
import styles from "@/styles/header.module.css"
import DropdownLink from "@/components/Body-Components/DropdownLink";
import musichome from '../../public/musichome.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Image from 'next/image'

const Header = () => {
const [toggleMenu, setToggleMenu] = useState(false)

  return (
    //container for the header and nav bar
    <div className={styles.header__container}>
      
        <div>
          <h1 className={styles.header__name}>Dr. Molly Barnes</h1>
          <p className={styles.header__subtitle}>Musicologist, Teacher, Performer</p>
        </div>

      <div className={styles.header__nav_container}>
        <Nav />
      </div>

      
      <div className={styles.header__nav_dropdown_icon}>
        {toggleMenu
          /* if toggleMenu is true, display close line "X".  When Clicked, switch toggleMenu to false, and the menu line executes */
          ? <RiCloseLine color="beige" size={32} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="beige" size={32} onClick={() => setToggleMenu(true)} />
        }
      {toggleMenu && (
        <div className={styles.header__nav_dropdown_menu_container}>
          <Link href="/" className={styles.header__nav_dropdown_menu_container_items_container}>Home</Link>
          <Link href="/academic-teaching" className={styles.header__nav_dropdown_menu_container_items_container}>Academic</Link>
          <Link href="/private-lessons" className={styles.header__nav_dropdown_menu_container_items_container}> Private<br />Lessons</Link>
          <Link href="/performance" className={styles.header__nav_dropdown_menu_container_items_container}>Performance</Link>
          <Link href="/research" className={styles.header__nav_dropdown_menu_container_items_container}>Research</Link>
          <Link href="/testimonials" className={styles.header__nav_dropdown_menu_container_items_container}>&nbsp; Teaching<br/>Evaluations</Link>
          <Link href="Barnes_CV_March_2024.pdf" className={styles.header__nav_dropdown_menu_container_items_container}>CV</Link>
          <Link href="/contact" className={styles.header__nav_dropdown_menu_container_items_container}>Contact</Link>
        </div>
      )}
      </div>
      </div>
  );
};

export default Header;
