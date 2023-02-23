import React from 'react'
import Layout from '@/layout/Layout'
import { DurhamUniversityData, UncGreensboroData, UncChapelHillData } from '@/constants/testimonials'
import TestCard from '@/components/Body-Components/TestCard'


const Testimonials = () => {

  const durham = DurhamUniversityData;
  const greensboro = UncGreensboroData;
  const chapelhill = UncChapelHillData;


  return (
    <Layout>
      <h1>
        Testimonials Page
      </h1>
      {/* Start with Durham being fetched and displayed by default */}
      {/* Durham University, UNC-Greensboro, UNC-Chapel Hill Buttons */}
      {/* on button click, loop over data for testimonials at specified location */}

      {/* map over the data in the durham array, and generate a card for each, passing the text and the course */}
      <div>
        {durham.map(({ id, text, course }) => (
          <>
          <p>{text}</p>
          <p>{course}</p>
          </>
        ))}
      </div>

      {/* map over greensboro array */}
      <div>
        {greensboro.map(({ id, text, course }) => (
          <>
          <p>{text}</p>
          <p>{course}</p>
          </>
        ))}
      </div>

      {/* map over greensboro array */}
      <div>
        {chapelhill.map(({ id, text, course }) => (
          <>
          <p>{text}</p>
          <p>{course}</p>
          </>
        ))}
      </div>
      
      <TestCard>

      </TestCard>

      {/* create 3 buttons.  One for each array of testimonials. */}
      {/* onClick these buttons should route to the page of the specific testimonial? */}
      
    { }
    </Layout>

  )
}

export default Testimonials
