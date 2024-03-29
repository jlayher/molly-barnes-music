import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/layout/Layout";

// import profile image
import profileImg from "../../public/molly_purple_upper.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Molly Barnes: Musicologist</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 
      <main className={styles.main}> */}
      {/* <div className={styles.pagepadding}> */}
      <Layout>
        {/* Container for About Page Body */}
        <div className={styles.home__body_container}>
          {/* Identity Container (photo and qualifications) */}
          
          <div className={styles.home__id_container}>
            {/* Profile Image Container */}
            <div className={styles.home__id_container_image}>
              <Image src={profileImg} alt="site logo" />
            </div>
          </div>

          {/* About me Text */}
          <div className={styles.home__full_aboutme_text}>
            {/* Title for Page ( About Molly Barnes*/}
            <div className={styles.home__title_container}>About Molly</div>
            <p>
              Welcome! I am a music scholar, teacher, musician, and editor currently
              based in Chapel Hill, NC.
              <br />
              <br />
              I received my PhD and my MA in historical musicology
              from the University of North Carolina at Chapel Hill and my BA
             in music from Davidson College.
              <br />
              <br />
              As a scholar I am broadly interested in the relationship between
              musical taste and the formation of cultural hierarchies in the
              West during the eighteenth and nineteenth centuries. My book
              project, tentatively titled <i>Old World Harmony, New World
              Democracy:&nbsp; American Idealism and the European Musical Inheritance,
              1830-1870</i>, examines the intersection of social and democratic
              idealism with the burgeoning culture of classical music in the
              United States during the mid-19th century.&nbsp;As an independent contractor 
              with&nbsp;<a href='https://www.dissertation-editor.com/'>Dissertator-Editor.com</a>
              , I edit 
              and revise scholarly manuscripts for graduate students and writers
              seeking academic publication.
              <br />
              <br />
              My primary calling has always been teaching. For three years I
              worked as a Teaching Fellow in the Department of Music at Durham
              University (UK), where I taught classes and seminars in music
              history and culture for undergraduates and graduate students. In
              addition to my teaching at Durham, I have taught a wide variety of
              music history and musicianship courses for music majors and
              non-majors at UNC-Chapel Hill and UNC-Greensboro, including
              electives of my own design, such as "Music, Madness, and the
              Modern World," and "Popular Music in 1960s U.S. Culture." In
              addition to my academic teaching, I have taught private music
              lessons to students of all ages for many years. I am currently a
              piano and violin teacher at <a href="https://www.skylarkmusicschool.com/">Skylark Music School</a> in Chapel
              Hill.
              <br />
              <br />I am an active performer on modern violin, baroque violin,
              and viola da gamba, and have sung with professional choirs
              including the Oratorio Singers of the Charlotte Symphony and
              Concentus Carolina. Over the years I have performed in many
              capacities&mdash;weddings, parties, church services&mdash;and currently I
              can be found performing in concerts, church services, and special
              events across the Raleigh-Durham-Chapel Hill region.
            </p>
          </div>
        </div>
      </Layout>
      {/* </div> */}
      {/* </main> */}
    </>
  );
}
