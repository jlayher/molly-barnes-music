import React from "react";
import Layout from "@/layout/Layout";
import Image from "next/image";

import performanceImage from "../../public/molly_crimson_full.jpg"

import styles from "@/styles/performance.module.css";

const Performance = () => {
  return (
    <Layout>
      <div className={styles.performance__title}>Performance</div>

      <div className={styles.performance__body_container}>
        <div className={styles.performance__body_text}>
          <p>
            As a performer on modern violin, I have played primarily throughout
            North Carolina, especially in concerts in the Charlotte metro region
            and in the Triangle area, at University Baptist Church in Chapel
            Hill (where I also sing alto in the chancel choir), and at weddings
            and other gatherings. I especially enjoy playing chamber music, an
            extremely intimate form of music-making that allows the musician to
            express musical ideas to listeners in a more personal manner.
            <br />
            <br />
            Early music is a major passion of mine, and I am an active performer
            on the baroque violin and the viola da gamba. I have had the
            privilege of participating in the Oberlin Baroque Performance
            Institute, the Amherst Early Music Festival, and the annual Conclave
            of the Viola da Gamba Society of America. In addition to playing
            professional concerts throughout the Triangle area of North
            Carolina, I played baroque violin for many years in the UNC-Chapel
            Hill Baroque Ensemble. I currently play bass viol in the
            university's Viol Consort.
            <br />
            <br />
            For any inquiries about performing at your event, please contact me at&nbsp;
            <a href="mailto: molly.l.barnes@gmail.com" >Molly.L.Barnes@gmail.com</a>
          </p>
        </div>

        <div className={styles.performance__body_image_container}>
          <Image
            src={performanceImage}
            alt="site logo"
          />
        </div>

      </div>
    </Layout>
  );
};

export default Performance;
