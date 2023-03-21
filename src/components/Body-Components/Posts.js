import React from "react";
import styles from "@/styles/testcard.module.css";

const Posts = ({ posts }) => {
  return (
    <>
      {/* map over the currentPosts array (labeled as "posts" here).  Generate an li for every post, assign a key= post.id, and use the post.title as text */}
      {posts.map((post) => (
        <div className={styles.testcard__body_text}>
          <p className={styles.testcard__body_text_text}>{post.text}</p>
          <p className={styles.testcard__body_text_course}>{post.course}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
