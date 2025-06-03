import React from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.preloaderContainer}>
      <video 
        className={styles.preloaderVideo}
        src="/assets/images/backgrounds/varita-magica.mp4" // Ruta desde la carpeta public
        autoPlay 
        loop 
        muted // Importante para autoplay en muchos navegadores
        playsInline // Importante para iOS
      >
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  );
};

export default Preloader;