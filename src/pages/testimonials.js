import React from 'react'
import Layout from '@/layout/Layout'
import { DurhamUniversityData, UncGreensboroData, UncChapelHillData } from '@/constants/testimonials'
// import TestCard from '@/components/Body-Components/TestCard'
import TestimonialCard from '@/components/Body-Components/TestimonialCard'


import styles from '@/styles/testimonials.module.css'

const Testimonials = () => {

  const durham = DurhamUniversityData;
  const greensboro = UncGreensboroData;
  const chapelhill = UncChapelHillData;


  return (
    <Layout>
      <div className={styles.testimonials__title}>Testimonials</div>
    
      <div className={styles.testimonials__blurb}>
        Explaining that these are testimonials from previous students.  List the 3 institutions and say something that throws in some personality
      </div>

      <div className={styles.testimonials__container}>
        <div>
          <h1>Durham</h1>
          {durham.map(({ id, text, course }) => (
            <TestimonialCard text={text} course={course}>
            </TestimonialCard>
          ))}
        </div>

        {/* <div>
          <h1>Greensboro</h1>
          {greensboro.map(({ id, text, course }) => (
            <TestimonialCard text={text} course={course}>
            </TestimonialCard>
          ))}
        </div>

        <div>
          <h1>Chapel Hill</h1>
          {chapelhill.map(({ id, text, course }) => (
            <TestimonialCard text={text} course={course}>
            </TestimonialCard>
          ))}
        </div> */}
      </div>
      
      

    </Layout>

  )
}

export default Testimonials
