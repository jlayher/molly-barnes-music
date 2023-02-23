import React from 'react'
import { DurhamUniversityData, UncGreensboroData, UncChapelHillData } from '@/constants/testimonials'


const TestCard = ({text, course}) => {
  return (
    <div>
      {/* Text */}
      <p>{text}</p>
      {/* Course */}
      <p>{course}</p>
    </div>
  )
}

export default TestCard
