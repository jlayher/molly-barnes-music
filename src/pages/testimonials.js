import React from 'react'

import Posts from "@/components/Body-Components/Posts";
import Pagination from "@/components/Body-Components/Pagination";
import Layout from '@/layout/Layout'

import { TestimonialData } from '@/constants/testimonials'
// import TestimonialCard from '@/components/Body-Components/TestimonialCard'
import { useState } from "react";

import styles from '@/styles/testimonials.module.css'


const testimonials2 = () => {
  // state

  //store fetched posts (total posts)
  const posts = TestimonialData;
  //set current page to the pagination button clicked (initialize as 1).  Use value to calculate the indexOfLastPost (used for getting current posts)
  const [currentPage, setCurrentPage] = useState(1);
  //set the number of posts to show per page.  Used to calculate the indexOfLastPost and indexOfFirstPost, which are used to generate the currentPosts array
  const [postsPerPage, setPostsPerPage] = useState(10);
 

//get current posts by slicing the posts (total posts array) depending on page number and number of posts per page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


// Change page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <Layout>
            <div className={styles.testimonials__title}>Testimonials</div>

            <div className={styles.testimonials__grid_container}>
                  {/* pass currentPosts and loading state. */}
                <Posts posts={currentPosts} />
                </div>
    
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />



      </Layout>

  );
}


export default testimonials2
