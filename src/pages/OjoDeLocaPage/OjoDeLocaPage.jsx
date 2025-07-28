import React, { useState, useEffect, useRef } from 'react';
import styles from './OjoDeLocaPage.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';

// Componente para el Modal del Video
const VideoModal = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const OjoDeLocaPage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.015);

  const [currentVideoId, setCurrentVideoId] = useState(null);

  // Datos para los botones, ahora con el ID del video de YouTube
  const ojoButtonsData = [
    { id: 'btnFlores', text: 'Flores de la llanura', styleKey: 'posBtnFlores', videoId: 'yzhlh6ftf1o' },
    { id: 'btnTamara', text: 'Tamara y la catarina', styleKey: 'posBtnTamara', videoId: 'e3rUXoLruSQ' },
    { id: 'btnNancy', text: 'Querida Nancy', styleKey: 'posBtnNancy', videoId: 'OYAN7aceROQ' },
    { id: 'btnAlcatraces', text: 'La revolución de los alcatraces', styleKey: 'posBtnAlcatraces', videoId: 'V6emDB2ijcc' },
    { id: 'btnNegra', text: 'Negra', styleKey: 'posBtnNegra', videoId: '-juY21mil6s' },
  ];
  
  const openModal = (videoId) => {
    setCurrentVideoId(videoId);
  };

  const closeModal = () => {
    setCurrentVideoId(null);
  };

  // Efecto para cerrar el modal con la tecla 'Escape'
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <div ref={pageRef} className={styles.pageContainer}>
        <div className={styles.interactiveButtonsArea}>
          {ojoButtonsData.map(buttonInfo => (
            <button 
              key={buttonInfo.id}
              className={`${styles.ojoButton} ${styles[buttonInfo.styleKey]}`}
              onClick={() => openModal(buttonInfo.videoId)}
            >
              {buttonInfo.text}
            </button>
          ))}
        </div>
      </div>
      
      {/* El modal se renderiza aquí cuando hay un videoId seleccionado */}
      <VideoModal videoId={currentVideoId} onClose={closeModal} />
    </>
  );
};

export default OjoDeLocaPage;