import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BrujasDelSeptimoArtePage.module.css';

const BrujasDelSeptimoArtePage = () => {
  const navigate = useNavigate();

  // El array ya contiene los IDs correctos para Ángeles y Natalia. 
  // Ahora que las rutas existen, los botones funcionarán.
  const cineastaLabelsData = [
    { id: 'ana-tsuyeb', labelText: "Ana Ts'uyeb", positionClass: 'labelPosAna' },
    { id: 'michelle-garza-cervera', labelText: 'Michelle Garza Cervera', positionClass: 'labelPosMichelle' },
    { id: 'angeles-cruz', labelText: 'Ángeles Cruz', positionClass: 'labelPosAngeles' },
    { id: 'lila-aviles', labelText: 'Lila Avilés', positionClass: 'labelPosLila' },
    { id: 'astrid-rondero', labelText: 'Astrid Rondero', positionClass: 'labelPosAstrid' },
    { id: 'natalia-bermudez', labelText: 'Natalia Bermúdez', positionClass: 'labelPosNatalia' },
    { id: 'issa-lopez', labelText: 'Issa López', positionClass: 'labelPosIssa' },
  ];

  const handleCineastaClick = (cineastaId) => {
    if (cineastaId) {
      navigate(`/brujas-del-septimo-arte/${cineastaId}`);
    } else {
      console.log(`ID de cineasta no válido: ${cineastaId}`);
    }
  };

  return (
    <div className={styles.pageContainer}>
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