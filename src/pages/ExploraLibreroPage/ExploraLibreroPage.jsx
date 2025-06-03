import React, { useRef } from 'react';
import styles from './ExploraLibreroPage.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';

const ExploraLibreroPage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.015); // Mismo parallax que Home

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      <div className={styles.contentArea}>
        {/* <h1>Explora el Librero Mágico</h1> */}
        {/* <p>Contenido próximamente...</p> */}
        {/* Dejar vacío o con un mensaje muy sutil si se prefiere */}
      </div>
    </div>
  );
};

export default ExploraLibreroPage;