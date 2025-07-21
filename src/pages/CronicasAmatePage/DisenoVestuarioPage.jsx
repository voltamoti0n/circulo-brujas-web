// src/pages/CronicasAmatePage/DisenoVestuarioPage.jsx
import React from 'react';
import styles from './DisenoVestuarioPage.module.css';

const DisenoVestuarioPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerBackground}></div>
      <img 
        src="/assets/images/cronicas/diseno-vestuario.jpg" 
        alt="Diseño de Vestuario" 
        className={styles.contentImage} 
      />
    </div>
  );
};

export default DisenoVestuarioPage;