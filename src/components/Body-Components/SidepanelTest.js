import React from 'react'
import { DurhamUniversityData, UncGreensboroData, UncChapelHillData } from '@/constants/testimonials'

import styles from '@/styles/sidepaneltest.module.css'


const SidepanelTest = ({ text, course }) => {
  
  return (
    <div className={styles.sidepanel__container}>
      <p className={styles.sidepanel__container_text}>"Molly always provided fresh takes from contemporary musicological writers that always had me intrigued. Loved the focus on class/gender/race roles in people that supported great composers of the centuries as well as the composers themselves."{text}</p>
      <p className={styles.sidepanel__container_course}>(Hello Course){course}</p>
    </div>
  )
}

export default SidepanelTest
