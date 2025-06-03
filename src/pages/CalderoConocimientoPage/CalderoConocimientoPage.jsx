import React, { useState, useRef, useEffect } from 'react';
import styles from './CalderoConocimientoPage.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';

// Datos de los videos
const videosData = [
  {
    // Punto 2: ASEGÚRATE QUE ESTE ID SEA CORRECTO Y SOLO EL ID (EJ: dQw4w9WgXcQ)
    id: '-ONVlK0EEUw', // REEMPLAZA ESTE ID
    // Punto 3: Thumbnail se generará automáticamente
    title: "ERA YO (It's me) Cortometraje",
    description: "María, una adolescente con un carácter arrollador, cree tener el derecho a hacer lo que quiera y cuando quiera. Lo que no sabe es que, a veces en la vida, uno también recibe lo que da.",
    duration: "11:37"
  },
  {
    id: 'cY5Co07H3Zw', // REEMPLAZA ESTE ID
    title: '"Nosotras": cortometraje sobre feminicidios en México',
    description: "Dirigido por Natalia Beristain. En México son asesinadas nueve mujeres al día, y según datos de la ONU, seis de cada diez han sufrido violencia en algún momento de su vida. Este cortometraje documental aborda los distintos niveles de violencia contra las mujeres...",
    duration: "23:16"
  },
  {
    id: '6jYlzu3RG5Y', // REEMPLAZA ESTE ID
    title: 'Los Domingos No Se Trabaja | Cortometraje (2023)',
    description: "Un domingo, una joven empleada del hogar ensaya su valerosa renuncia, con la cual espera poder enfrentar a su jefa. Sin embargo, las cosas no son como parecen...",
    duration: "12:24"
  },
];

const VideoModal = ({ videoId, onClose }) => {
  if (!videoId) return null;
  const रोकPropagation = (e) => e.stopPropagation();

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={ रोकPropagation}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} // Añadido rel=0 para no mostrar videos relacionados
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

const CalderoConocimientoPage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.015);

  const [currentVideoId, setCurrentVideoId] = useState(null);

  const openModal = (videoId) => {
    setCurrentVideoId(videoId);
  };

  const closeModal = () => {
    setCurrentVideoId(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' || event.keyCode === 27) { // Añadido event.key
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      <div className={styles.mainContentGrid}>
        <div className={styles.leftColumn}>
          {/* Punto 1: Logo y texto */}
          <img src="/assets/images/backgrounds/logo.png" alt="Círculo de Brujas" className={styles.sectionLogo} />
          <p className={styles.discoverText}>
            Visita y descubre nuevas propuestas fílmicas
          </p>
        </div>

        <div className={styles.rightColumn}>
          {videosData.map((video) => (
            <div key={video.id} className={styles.videoItem} onClick={() => openModal(video.id)}>
              <div className={styles.thumbnailContainer}>
                {/* Punto 3: Usar thumbnail de YouTube */}
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                  alt={video.title} 
                  className={styles.thumbnail} 
                />
                <div className={styles.durationBadge}>{video.duration}</div>
                <div className={styles.playIconWrapper}>
                  <div className={styles.playIcon}></div>
                </div>
              </div>
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                <p className={styles.videoDescription}>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentVideoId && <VideoModal videoId={currentVideoId} onClose={closeModal} />}
    </div>
  );
};

export default CalderoConocimientoPage;