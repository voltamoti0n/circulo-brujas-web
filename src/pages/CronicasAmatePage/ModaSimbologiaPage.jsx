// src/pages/CronicasAmatePage/ModaSimbologiaPage.jsx
import React from 'react';
import styles from './ModaSimbologiaPage.module.css';

const ModaSimbologiaPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerBackground}></div>
      <img 
        src="/assets/images/cronicas/moda-simbolo.jpg" 
        alt="La Moda como Símbolo" 
        className={styles.contentImage} 
      />
    </div>
  );
};

export default ModaSimbologiaPage;