import React, { useState, useEffect, use } from 'react'
import { bestTestimonials } from '@/constants/besttestimonials'
import styles from '@/styles/sidepaneltest.module.css'

const testimonials = bestTestimonials;

const SidepanelTest = () => {
  
  const [randomData, setRandomData] = useState({});

  const getRandomObject = (arr) => {
    const randomObject = arr[Math.floor(Math.random() * arr.length)];
    setRandomData(randomObject);
  }
  
  useEffect(() => {
    getRandomObject(testimonials);
  }, []);

  return (
    <div className={styles.sidepanel__container}>
      <div className={styles.sidepanel__container_text}>"{randomData.text}"</div>
      <div className={styles.sidepanel__container_course}>{randomData.course}</div>
    </div>
  )
}

export default SidepanelTest



