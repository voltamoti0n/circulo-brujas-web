import React, { useRef } from 'react';
// ASEGURAR QUE ESTA IMPORTACIÓN SEA LA CORRECTA PARA ESTA PÁGINA:
import styles from './HechizosParaConocerPage.module.css'; 
import useParallaxBackground from '../../hooks/useParallaxBackground';

const HechizosParaConocerPage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.02);

  // Datos para las pociones con sus clases de estilo para posicionamiento
  // Estos deberían ser los que ya habías ajustado
  const potionsData = [
    { id: 'potion1', imgSrc: '/assets/images/icons/pocion1.png', styleClass: 'potionPos1' },
    { id: 'potion2', imgSrc: '/assets/images/icons/pocion2.png', styleClass: 'potionPos2' },
    { id: 'potion3', imgSrc: '/assets/images/icons/pocion3.png', styleClass: 'potionPos3' },
    { id: 'potion4', imgSrc: '/assets/images/icons/pocion4.png', styleClass: 'potionPos4' },
    { id: 'potion5', imgSrc: '/assets/images/icons/pocion5.png', styleClass: 'potionPos5' },
    { id: 'potion6', imgSrc: '/assets/images/icons/pocion6.png', styleClass: 'potionPos6' },
  ];

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        {/* Área para superponer las pociones sobre el librero del fondo */}
        <div className={styles.shelfArea}>
          {potionsData.map(potion => (
            <img 
              key={potion.id} 
              src={potion.imgSrc} 
              alt={`Poción ${potion.id}`} 
              className={`${styles.potionImage} ${styles[potion.styleClass]}`} 
            />
          ))}
        </div>
      </div>
      {/* El texto se posiciona debajo del área del logo (que está en el fondo) */}
       <div className={styles.textBelowLogoArea}>
          
        </div>
    </div>
  );
};

export default HechizosParaConocerPage;