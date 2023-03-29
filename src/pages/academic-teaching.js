import Layout from "@/layout/Layout";
import React from "react";

import styles from "@/styles/academic.module.css";
import SidepanelTest from "@/components/Body-Components/SidepanelTest";

const AcademicTeaching = () => {
  return (
    <Layout>
      {/* academic title container */}
      <div className={styles.academic__title}>Academic Teaching & Research</div>

      {/* Body Content Container */}
      <div className={styles.academic__body_container}>
        
        {/* Container for Academic Teaching and Research Cards */}
        <div className={styles.academic__body_text_container}>
          {/* create a container for Academic teaching and show on left */}
          <div className={styles.academic__body_text_teaching}>
            <h1>Academic Teaching</h1>
            <p>
              I consider teaching music a passion and a calling, and I love
              getting to know my students as human beings with real lives,
              capacities&mdash;weddings, parties, church services&mdash;and currently I
              hopes, fears, and ambitions. My goal as a teacherwhether I am
              teaching music history, musicianship skills, or the violin--is to
              share my love of the subject such that my students are inspired to
              learn more and discover the joy that can come from a deep
              intellectual and emotional engagement with music.
              <br />
              <br />
              Excerpts from previous student evaluations of my teaching in music
              history and musicianship classes at Durham University,
              UNC-Greensboro, and UNC-Chapel Hill can be viewed in the
              Testimonials tab above.
            </p>
          </div>

          <div className={styles.academic__body_sidepanel_container}>
            <SidepanelTest></SidepanelTest>
          </div>

 
        </div>

        {/* Side Panel for Testimonials */}

        <div className={styles.academic__body_sidepanel_container}>
          <SidepanelTest></SidepanelTest>
          <div className={styles.academic__body_text_research}>
            <h1>Research</h1>
            <p>
              My research primarily concerns issues of musical taste and the
              formation of cultural hierarchies in the West during the
              nineteenth century.
              <br />
              <br />
              My current book project (based on my PhD dissertation),
              tentatively titled <i>Old World Harmony, New World Democracy:
              &nbsp;American Idealism and the European Musical Inheritance, 1830-1870</i>,
              explores mid-nineteenth-century American perceptions of the
              relationship between Western art music and the ideal of democratic
              egalitarianism.
              <br />
              <br />
              Other research interests include the musical culture of German
              immigrants to the United States in the nineteenth century; music
              and social theory in the twentieth century, particularly the
              thought of Adorno and the Frankfurt School; 1960s psychedelic
              music in the U.S. and the U.K.; chamber music as a social
              phenomenon in the nineteenth century; and many other topics.
              <br />
              <br />
              My 2021 article in <i>
              Nineteenth-Century Music Review
              </i> and my 2016
              dissertation are available for download below.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AcademicTeaching;
