import React, { useRef } from 'react';
import styles from './OjoDeLocaPage.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';

const OjoDeLocaPage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.015);

  // Datos para los botones. Las posiciones se definirán en CSS.
  const ojoButtonsData = [
    { id: 'btnFlores', text: 'Flores de la llanura', styleKey: 'posBtnFlores' },
    { id: 'btnTamara', text: 'Tamara y la catarina', styleKey: 'posBtnTamara' },
    { id: 'btnNancy', text: 'Querida Nancy', styleKey: 'posBtnNancy' },
    { id: 'btnAlcatraces', text: 'La revolución de los alcatraces', styleKey: 'posBtnAlcatraces' },
    { id: 'btnNegra', text: 'Negra', styleKey: 'posBtnNegra' },
  ];

  const handleOjoButtonClick = (buttonId) => {
    console.log(`Botón de ojo clickeado: ${buttonId}`);
  };

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      {/* El contenido (botones) se posicionará sobre el fondo */}
      {/* El texto "Tu nueva película..." está en el fondo, no aquí. */}
      {/* El logo "Círculo de Brujas" está en el fondo, no aquí. */}
      
      <div className={styles.interactiveButtonsArea}>
        {ojoButtonsData.map(buttonInfo => (
          <button 
            key={buttonInfo.id}
            // Aplicar la clase de estilo para la posición específica
            className={`${styles.ojoButton} ${styles[buttonInfo.styleKey]}`}
            onClick={() => handleOjoButtonClick(buttonInfo.id)}
          >
            {buttonInfo.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OjoDeLocaPage;