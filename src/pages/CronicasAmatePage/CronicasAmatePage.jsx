import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CronicasAmatePage.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';

const CronicasAmatePage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.03);
  const navigate = useNavigate();

  const mapIconsData = [
    { id: 'personajes', imgSrc: '/assets/images/icons/personajes.png', alt: '10 datos de personajes femeninos', styleClass: 'personajesIcon' },
    { id: 'directoras', imgSrc: '/assets/images/icons/oportunidades.png', alt: 'Sin oportunidades', styleClass: 'directorasIcon' },
    { id: 'moda', imgSrc: '/assets/images/icons/moda.png', alt: 'La moda como símbolo', styleClass: 'modaIcon' },
    { id: 'lenterosa', imgSrc: '/assets/images/icons/camara.png', alt: 'Lente Rosa', styleClass: 'lenteRosaIcon' },
    { id: 'vestuario', imgSrc: '/assets/images/icons/vestuario.png', alt: 'Diseño de Vestuario', styleClass: 'vestuarioIcon' },
  ];

  const handleIconClick = (iconId) => {
    const routes = {
      personajes: '/cronicas-sobre-amate/diez-datos-personajes',
      directoras: '/cronicas-sobre-amate/sin-oportunidades',
      moda: '/cronicas-sobre-amate/moda-simbologia',
      lenterosa: '/cronicas-sobre-amate/lente-rosa',
      vestuario: '/cronicas-sobre-amate/diseno-vestuario',
    };
    if (routes[iconId]) {
      navigate(routes[iconId]);
    }
  };

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      <div className={styles.leftTextContainer}>
      </div>
      
      <div className={styles.interactiveMapArea}>
        {mapIconsData.map(icon => (
          <div 
            key={icon.id} 
            className={`${styles.mapIconWrapper} ${styles[icon.styleClass]}`}
            onClick={() => handleIconClick(icon.id)}
          >
            <img src={icon.imgSrc} alt={icon.alt} className={styles.mapIconImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CronicasAmatePage;