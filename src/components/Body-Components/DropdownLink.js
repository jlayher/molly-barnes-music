import React from "react";


import Link from "next/link";

import styles from "@/styles/dropdownlink.module.css";

import { useState } from "react";

// onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}

const DropdownLink = () => {
  const [open, setOpen] = useState(false);

    return (
    //   style top div like other link Tabs in Nav Bar
      <div className={styles.dropdownlink__link} onClick={() => setOpen(!open)}>
          Teaching
      <div
        className={open ? styles.dropdownlink__dropdown_menu_active : styles.dropdownlink__dropdown_menu_inactive}>
        <ul className={styles.dropdownlink__dropdown_menu_active__ul}>
          <Link href="/academic-teaching" className={styles.dropdownlink__dropdown_menu_active__ul_link}><p className={styles.dropdownlink__dropdown_menu_active__ul_link_text}>Academic</p></Link>
          <Link href="/private-lessons" className={styles.dropdownlink__dropdown_menu_active__ul_link}><p className={styles.dropdownlink__dropdown_menu_active__ul_link_text}>Private <br />Lessons</p></Link>
          <Link href="/testimonials" className={styles.dropdownlink__dropdown_menu_active__ul_link}><p className={styles.dropdownlink__dropdown_menu_active__ul_link_text}>Teaching<br/>Evaluations</p></Link>

          </ul>
      </div>
    </div>
  );
};

export default DropdownLink;


