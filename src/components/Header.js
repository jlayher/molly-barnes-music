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
        {/* possible logo icon here*/}
        <div className={styles.header__image_container}>
          <Image src={musichome} alt="site logo" className={styles.music_home}/>
        </div>

        <div>
          <h1 className={styles.header__name}>Dr. Molly Barnes</h1>
          <p>Professor of Musicology</p>
          <p>Music Instructor</p>
          <p>Performer</p>
          <p>&</p>
          <p>She's a Molly ;b</p>
        </div>

      </div>

      <div>
        <Nav />
      </div>

    </div>
  );
};

export default Header;
