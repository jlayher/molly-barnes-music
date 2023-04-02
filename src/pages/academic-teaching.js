import Layout from "@/layout/Layout";
import React from "react";
import Image from "next/image";
import styles from "@/styles/academic.module.css";
import SidepanelTest from "@/components/Body-Components/SidepanelTest";
import mollyImg from "../../public/molly_black_full.jpg";
const AcademicTeaching = () => {
  return (
    <Layout>
      <div className={styles.academic__body_container}>
   
        <div className={styles.academic__body_text_container}>
          
          <div className={styles.academic__photo_quote_container}>
            
            <div className={styles.academic__body_img_container}>
              <Image src={mollyImg} alt="profile image" />
            </div>

            <div className={styles.academic__body_sidepanel_container}>
              <SidepanelTest></SidepanelTest>
            </div>
          </div>
    
          <div className={styles.academic__body_text_teaching}>
            
              <div className={styles.academic__title}>Academic Teaching</div>
              <div className={styles.academic__body_textsection}>
                <p>
                  I consider teaching music a passion and a calling, and I love
                  getting to know my students as human beings with real lives,
                  hopes, fears, and ambitions. Whether I am teaching music
                  history, musicianship skills, or the violin, my goal is to
                  share my love of the subject such that my students are
                  inspired to learn more and discover the joy that can come from
                  a deep intellectual and emotional engagement with music.
                </p>
                <p>
                  Excerpts from previous student evaluations of my teaching in
                  music history and musicianship classes at Durham University,
                  UNC-Greensboro, and UNC-Chapel Hill can be viewed in the
                  Teaching Evaluations tab above.
                </p>
              </div>
            
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default AcademicTeaching;
