import React from 'react'

import Link from 'next/link'


const Nav = () => {
  return (
    <>
    <h1>This is the Nav</h1>
    <nav>
      {/* Change these to Link tags? */}
      <Link href='/'>Home</Link>
      <Link href="/academic-teaching">Academic Teaching</Link>
      <Link href="/private-lessons">Private Lessons</Link>
      <Link href="/research">Research</Link>
      <Link href="/testimonials">Testimonials</Link>
      <Link href="/performance">Performance</Link>
      <Link href="/contact">Contact</Link>
      </nav>
    </>
  )
}

export default Nav
