import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


import styles from '@/styles/layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.page_padding}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer  />
    </div>
  );
};

export default Layout
