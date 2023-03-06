import React from "react";
import Nav from "./Nav";

import styles from "@/styles/header.module.css"

import musichome from '../../public/musichome.png';

import Image from 'next/image'

const Header = () => {
  return (
    //container for the header and nav bar
    <div className={styles.header__container}>
      
      <div className={styles.header__logo_container}>


        <div>
          <h1 className={styles.header__name}>Dr. Molly Barnes</h1>
          <p className={styles.header__subtitle}>Musicologist, Teacher, Performer</p>


        </div>

      </div>

      <div className={styles.header__nav_container}>
        <Nav />
      </div>

    </div>
  );
};

export default Header;
