import React from "react";
import Layout from "@/layout/Layout";
import Image from "next/image";

import performanceImage from "../../public/molly_crimson_full.jpg"

import styles from "@/styles/performance.module.css";

const Performance = () => {
  return (
    <Layout>
      

      <div className={styles.performance__body_container}>
        <div className={styles.performance__body_text}>
        <div className={styles.performance__title}>Performance</div>
          <p>
            As a performer on modern violin, I have played primarily throughout
            North Carolina, especially in concerts in the Charlotte metro region
            and the Triangle, at University Baptist Church in Chapel
            Hill and many other area churches, and at weddings
            and other special events. I especially enjoy chamber music, 
            and have played in many smaller configurations with friends and colleagues 
            in a variety of performance settings, including with the Mallarm&eacute; Chamber Players and El Fuego Early Music Ensemble.
            <br />
            <br />
            Early music is an abiding passion of mine, and I am an active performer
            on the baroque violin and the viola da gamba. I have performed with the North Carolina Baroque Orchestra, and have had the
            privilege of participating in the Oberlin Baroque Performance
            Institute, the Amherst Early Music Festival, and the annual Conclave
            of the Viola da Gamba Society of America. In addition to playing
            professional concerts throughout the Triangle region of North
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
