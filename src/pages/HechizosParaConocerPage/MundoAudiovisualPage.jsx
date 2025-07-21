// src/pages/HechizosParaConocerPage/MundoAudiovisualPage.jsx
import React from 'react';
import styles from './PostPage.module.css'; // Usaremos un CSS genérico

const MundoAudiovisualPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerBackground}></div>
      <img 
        src="/assets/images/hechizos/mundo-audiovisual.jpg" 
        alt="5 Concejos para crecer el mundo audiovisual" 
        className={styles.contentImage} 
      />
    </div>
  );
};

export default MundoAudiovisualPage;