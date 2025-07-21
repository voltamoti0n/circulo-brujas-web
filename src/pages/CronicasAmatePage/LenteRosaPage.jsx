// src/pages/CronicasAmatePage/LenteRosaPage.jsx
import React from 'react';
import styles from './LenteRosaPage.module.css';

const LenteRosaPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerBackground}></div>
      <img 
        src="/assets/images/cronicas/lente-rosa.jpg" 
        alt="POV con Lente Rosa" 
        className={styles.contentImage} 
      />
    </div>
  );
};

export default LenteRosaPage;