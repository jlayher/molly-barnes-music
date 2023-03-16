import React from 'react'
import Layout from '@/layout/Layout'
import { TestimonialData } from '@/constants/testimonials'
// import TestCard from '@/components/Body-Components/TestCard'
import TestimonialCard from '@/components/Body-Components/TestimonialCard'
import { useState } from "react";

import styles from '@/styles/testimonials.module.css'

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [testsPerPage, setTestsPerPage] = useState(10)

  const testimonyData = TestimonialData;

  const lastTestIndex = currentPage * testsPerPage;
  const firstTestIndex = lastTestIndex - testsPerPage;
  const currentTests = testimonyData.slice(firstTestIndex, lastTestIndex)
  const totalPages = 4;

  return (
    <Layout>
      <div className={styles.testimonials__title}>Testimonials</div>

      

      <div className={styles.testimonials__grid_container}>

          {currentTests.map(({ id, text, course }) => (
            <TestimonialCard text={text} course={course}>
            </TestimonialCard>
          ))}

      </div>
      <div className={styles.testimonials_pagination_buttons}>
        <button onClick={() => setCurrentPage(1)}>1</button>            
        <button onClick={() => setCurrentPage(2)}>2</button>            
        <button onClick={() => setCurrentPage(3)}>3</button>            
        <button onClick={() => setCurrentPage(4)}>4</button>            
      </div>
      
    </Layout>

  )
}

export default Testimonials
