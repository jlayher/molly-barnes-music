import React from "react";
import Layout from "@/layout/Layout";
import Image from "next/image";
import styles from "@/styles/privatelessons.module.css";


import privateLessonsImage from "../../public/molly_violin_recital_better.jpg"

const PrivateLessons = () => {
  return (
    <Layout>
      {/* body container */}
      <div className={styles.privatelessons__body_container}>
        {/* text container */}
        <div className={styles.privatelessons__body_text}>
          <div className={styles.privatelessons__title}>Private Lessons</div>
          <p>
            I have taught private violin lessons for many years, and my students
            have ranged in age from 3 to 60. My teaching style is traditional
            (i.e., non-Suzuki), although I do frequently use Suzuki books as
            sources of repertoire.
            <br />
            <br />
            A successful student-teacher relationship depends on respect, trust,
            and both parties' determination to achieve specific goals, whether
            technical or musical in nature. I focus heavily on the fundamental
            issues of rhythm and intonation, which form the basis for excellent
            musicianship. I expect students to practice daily and to be ready
            for and open to new challenges.
            <br />
            <br />
            Currently I teach private lessons in piano and violin, in-home and
            in-studio, through Skylark Music School in Chapel Hill. For more
            information about Skylark, please visit&nbsp;
            <a
              className={styles.privatelessons__body_text_anchor}
              href="https://www.skylarkmusicschool.com">
              skylarkmusicschool.com.
            </a>
          </p>
        </div>

        {/* image container */}

        <div className={styles.privatelessons__body_imgpanel}>
          <div className={styles.privatelessons__body_image_container}>
            <Image src={privateLessonsImage} alt="site logo" />
          </div>

          <div className={styles.privatelessons__container_text} >
            Molly with her violin students after their winter recital, December
            2018.
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default PrivateLessons;
