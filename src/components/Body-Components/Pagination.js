import React from "react";

import styles from "@/styles/testimonials.module.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <div className={styles.testimonials_pagination_buttons}>
          
          {pageNumbers.map((number) => (
        <button
          key={number}
          className={styles.testimonials_pagination_buttons_button}
          onClick={() => paginate(number)}>
          {number}
        </button>
      ))}

</div>
     
  );
};

export default Pagination;
