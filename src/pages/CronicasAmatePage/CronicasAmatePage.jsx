import React, { useRef } from 'react';
import styles from './CronicasAmatePage.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';

const CronicasAmatePage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.03);

  const mapIconsData = [
    { id: 'personajes', imgSrc: '/assets/images/icons/personajes.png', alt: '10 datos de personajes femeninos', styleClass: 'personajesIcon' },
    { id: 'directoras', imgSrc: '/assets/images/icons/oportunidades.jpg', alt: 'Sin oportunidades', styleClass: 'directorasIcon' },
    { id: 'moda', imgSrc: '/assets/images/icons/moda.png', alt: 'La moda', styleClass: 'modaIcon' },
    { id: 'lenterosa', imgSrc: '/assets/images/icons/camara.png', alt: 'Lente Rosa', styleClass: 'lenteRosaIcon' },
    { id: 'vestuario', imgSrc: '/assets/images/icons/vestuario.png', alt: 'Vestuario', styleClass: 'vestuarioIcon' },
  ];

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      <div className={styles.leftTextContainer}>
        {/* Punto 5: Logo eliminado */}
        
      </div>
      
      <div className={styles.interactiveMapArea}>
        {mapIconsData.map(icon => (
          <div key={icon.id} className={`${styles.mapIconWrapper} ${styles[icon.styleClass]}`}>
            <img src={icon.imgSrc} alt={icon.alt} className={styles.mapIconImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CronicasAmatePage;