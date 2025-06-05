import React, { useRef } from 'react';
import styles from './BrujasDelSeptimoArtePage.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';

const BrujasDelSeptimoArtePage = () => {
  const pageRef = useRef(null);
  // useParallaxBackground(pageRef, 0.015); 

  // Datos para los botones/etiquetas principales
  const cineastaLabelsData = [
    { id: 'ana', labelText: "Ana Ts'uyeb", positionClass: 'labelPosAna' },
    { id: 'michelle', labelText: 'Michelle Garza Cervera', positionClass: 'labelPosMichelle' },
    { id: 'angeles', labelText: 'Ángeles Cruz', positionClass: 'labelPosAngeles' },
    { id: 'lila', labelText: 'Lila Avilés', positionClass: 'labelPosLila' },
    { id: 'astrid', labelText: 'Astrid Rondero', positionClass: 'labelPosAstrid' },
    { id: 'natalia', labelText: 'Natalia Bermúdez', positionClass: 'labelPosNatalia' },
    { id: 'issa', labelText: 'Issa López', positionClass: 'labelPosIssa' },
    // Issa López se manejará en el sideTextContainer
  ];

  const handleCineastaClick = (cineastaId) => {
    console.log(`Cineasta/Botón clickeado: ${cineastaId}`);
  };

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      <div className={styles.contentGrid}>
        
        <div className={styles.interactiveLabelsArea}>
          {cineastaLabelsData.map(cineasta => (
            <button 
              key={cineasta.id} 
              className={`${styles.cineastaLabelButton} ${styles[cineasta.positionClass]}`}
              onClick={() => handleCineastaClick(cineasta.id)}
            >
              {cineasta.labelText}
            </button>
          ))}
        </div>

        

      </div>
    </div>
  );
};

export default BrujasDelSeptimoArtePage;