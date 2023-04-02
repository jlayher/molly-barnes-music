import React from 'react'
import Layout from "@/layout/Layout";
import Image from "next/image";
import johnSullivanImg from "../../public/john_sullivan.jpg"

import styles from "@/styles/research.module.css";
// import styles from "@/styles/research.module.css";
import SidepanelTest from "@/components/Body-Components/SidepanelTest";
const research = () => {
    return (
        <Layout>
        <div className={styles.research__container}>
        <div className={styles.research__body_text_research}>
          
     
            <h1 className={styles.research__title}>Research</h1>
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
                My 2021 article in&nbsp;
              <a >Nineteenth-Century Music Review</a>
              &nbsp;and my&nbsp;
              <a>2016 dissertation</a> are available for download.
            </p>
          </div>
      
          
          <div className={styles.research__body_image_container}>
            <div className={styles.research__body_image_container_img}>
            <Image
            src={johnSullivanImg}
              alt="site logo"
              
            />
            </div>

            <p><i>
            John Sullivan Dwight (1813-1893), American music critic and Transcendentalist, and a figure of abiding interest to me.
            </i>
           
            </p>
          </div>
</div>
       
          

            </Layout>
  )
}

export default research







