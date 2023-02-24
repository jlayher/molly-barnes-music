import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


import styles from '@/styles/layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer  />
    </div>
  );
};

export default Layout
