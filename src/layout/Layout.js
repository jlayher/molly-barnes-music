import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


import styles from '@/styles/layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.page_padding}>
          <main>{children}</main>
        </div>
      <Footer  />
    </div>
  );
};

export default Layout
