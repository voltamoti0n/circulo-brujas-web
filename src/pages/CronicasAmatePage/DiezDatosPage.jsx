// Ejemplo de cómo debe quedar DiezDatosPage.jsx
import React from 'react';
import styles from './DiezDatosPage.module.css';

const DiezDatosPage = () => {
  return (
    <div className={styles.pageContainer}>
      <img 
        src="/assets/images/cronicas/diez-datos-completo.jpg" 
        alt="10 Datos de personajes femeninos emblemáticos" 
        className={styles.contentImage} 
      />
    </div>
  );
};

export default DiezDatosPage;