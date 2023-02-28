import React from 'react'

import styles from '@/styles/testcard.module.css'


// destructure props for id, text, course
// include as info for card
const TestimonialCard = ({text, course}) => {
    
    return (
    //   container div should be similar to "styles.xxx__body_text"
    <div className={styles.testcard__body_text}>
            <p>{text}</p>
            <p>{course}</p>
    </div>
  )
}

export default TestimonialCard
