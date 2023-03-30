import Layout from "@/layout/Layout";
import React from "react";

import styles from "@/styles/academic.module.css";
import SidepanelTest from "@/components/Body-Components/SidepanelTest";

const AcademicTeaching = () => {
  return (
    <Layout>
      {/* academic title container */}
      <div className={styles.academic__title}>Academic Teaching</div>

      {/* Body Content Container */}
      <div className={styles.academic__body_container}>
        
        {/* Container for Academic Teaching and Research Cards */}
        <div className={styles.academic__body_text_container}>
          {/* create a container for Academic teaching and show on left */}
          <div className={styles.academic__body_text_teaching}>
  
            <p>
              I consider teaching music a passion and a calling, and I love
              getting to know my students as human beings with real lives,
              
              hopes, fears, and ambitions. Whether I am
              teaching music history, musicianship skills, or the violin, my goal is to
              share my love of the subject such that my students are inspired to
              learn more and discover the joy that can come from a deep
              intellectual and emotional engagement with music.
              <br />
              <br />
              Excerpts from previous student evaluations of my teaching in music
              history and musicianship classes at Durham University,
              UNC-Greensboro, and UNC-Chapel Hill can be viewed in the
              Teaching Evaluations tab.
            </p>
          </div>

          {/* flex right */}
          {/* <div className={styles.academic__body_sidepanel_container}>
            <SidepanelTest></SidepanelTest>
          </div> */}

 
        </div>

        {/* Side Panel for Testimonials */}

        
      </div>
    </Layout>
  );
};

export default AcademicTeaching;
