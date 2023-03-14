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

      {/* placeholder line */}
      {/* <div className={styles.sidepanel__container_text}>"Dr. Barnes is very welcoming and wants all students to be successful. It is obvious that she wants all of her students to succeed. She encourages students to ask her questions and she does whatever she can to ensure that we feel confident."</div>
       */}
      <div className={styles.sidepanel__container_course}>{randomData.course}</div>
    </div>
  )
}

export default SidepanelTest



