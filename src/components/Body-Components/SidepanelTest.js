import React from 'react'
import { DurhamUniversityData, UncGreensboroData, UncChapelHillData } from '@/constants/testimonials'


const SidepanelTest = ({text, course}) => {
  return (
    <div>
      <p>Hello Text{text}</p>
      <p>Hello Course{course}</p>
    </div>
  )
}

export default SidepanelTest
