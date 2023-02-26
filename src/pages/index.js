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

      <main className={styles.main}>
        <Layout>
          {/* Container for About Page Body */}
          <div className={styles.home__body_container}>
            
            {/* Identity Container (photo and qualifications) */}
            <div className={styles.home__identity_container}>
              
              {/* Profile Image Container */}
              <div className={styles.home__profile_image_container}>
                <Image
                  src={profileImg}
                  alt="site logo"
                  className={styles.music_home}
                />
              </div>

              {/* Container for Profile Card */}
              <div className={styles.home__profile_card}>
                <h3>Dr. Molly Barnes</h3>
                <p>Professor of Musicology</p>
                <p>Violin & Piano Instructor</p>
                <p>Professional Performer</p>

              </div>
            </div>

            {/* Title for Page */}
            {/* <div className={styles.home__title_container}>
            <h1 className={styles.home__title_container_item}>
              About Molly Barnes
            </h1>
          </div> */}

            {/* About me Text: Centered in bottom of page */}
            <div className={styles.home__full_aboutme_text}>
              Welcome! I am a music scholar, teacher, and musician currently
              based in Chapel Hill, NC.
              <br />
              <br />
              I received my PhD (2016) and my MA (2012) in historical musicology
              from the University of North Carolina at Chapel Hill, and my BA
              (2009) in music from Davidson College.
              <br />
              <br />
              As a scholar I am broadly interested in the relationship between
              musical taste and the formation of cultural hierarchies in the
              West during the eighteenth and nineteenth centuries. My book
              project, tentatively titled Old World Harmony, New World
              Democracy: American Idealism and the European Musical Inheritance,
              1830-1870, examines the intersection of social and democratic
              idealism with the burgeoning culture of classical music in the
              United States during the mid-19th century.
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
              lessons for many years to students of all ages. I am currently a
              piano and violin teacher at Skylark Music School based in Chapel
              Hill.
              <br />
              <br />I am an active performer on modern violin, baroque violin,
              and viola da gamba, and have sung with a number of choirs,
              including the Oratorio Singers of the Charlotte Symphony and
              Concentus Carolina. Over the years I have performed in many
              capacities--weddings, parties, church services--and currently I
              can be found performing in concerts, church services, and special
              events across the Raleigh-Durham-Chapel Hill region.
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
