// src/pages/HechizosParaConocerPage/MatchCutPage.jsx
import React from 'react';
import styles from './MatchCutPage.module.css';
import SocialFooter from '../../components/SocialFooter/SocialFooter';

const MatchCutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentCanvas}>
        {/* Contenedor del video que ya posicionaste */}
        <div className={styles.videoWrapper}>
          <video
            src="/assets/videos/matchcut.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.videoPlayer}
          >
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>

        {/* Nuevo contenedor para posicionar el SocialFooter correctamente */}
        <div className={styles.footerWrapper}>
          <SocialFooter />
        </div>
      </div>
    </div>
  );
};

export default MatchCutPage;