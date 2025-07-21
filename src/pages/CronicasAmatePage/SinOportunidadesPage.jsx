// src/pages/CronicasAmatePage/SinOportunidadesPage.jsx
import React from 'react';
import styles from './SinOportunidadesPage.module.css';

const SinOportunidadesPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerBackground}></div>
      <img 
        src="/assets/images/cronicas/sin-oportunidades.jpg" 
        alt="Sin Oportunidades" 
        className={styles.contentImage} 
      />
    </div>
  );
};

export default SinOportunidadesPage;