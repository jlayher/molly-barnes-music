import React from 'react'
import Layout from '@/layout/Layout'


const Testimonials = () => {
  return (
    <Layout>
      <h1>
        Testimonials Page
      </h1>
      {/* Start with Durham being fetched and displayed by default */}
      {/* Durham University, UNC-Greensboro, UNC-Chapel Hill Buttons */}
      {/* on button click, loop over data for testimonials at specified location */}
      <p>Testimonial 1</p>
      <p>Testimonial 2</p>
      <p>Testimonial 3</p>
      <p>Testimonial 4</p>
    </Layout>

  )
}

export default Testimonials
