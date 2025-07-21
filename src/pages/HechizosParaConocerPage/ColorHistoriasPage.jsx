// src/pages/HechizosParaConocerPage/ColorHistoriasPage.jsx
import React from 'react';
import styles from './PostPage.module.css'; // Usaremos un CSS genérico

const ColorHistoriasPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerBackground}></div>
      <img 
        src="/assets/images/hechizos/color-historias.jpg" 
        alt="El Color para potenciar tus historias" 
        className={styles.contentImage} 
      />
    </div>
  );
};

export default ColorHistoriasPage;