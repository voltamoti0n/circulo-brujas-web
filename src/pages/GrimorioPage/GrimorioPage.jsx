import React, { useRef } from 'react';
import styles from './GrimorioPage.module.css';

const GrimorioPage = () => {
  const pageRef = useRef(null); 

  const bookElementsData = [
    { id: 'alquimistas', imgSrc: '/assets/images/icons/piedra.png', buttonText: 'Alquimistas' },
    { id: 'guardianas', imgSrc: '/assets/images/icons/copa.png', buttonText: 'Guardianas' },
    { id: 'curanderas', imgSrc: '/assets/images/icons/recipiente.png', buttonText: 'Curanderas' },
    { id: 'lectoras', imgSrc: '/assets/images/icons/libro.png', buttonText: 'Lectoras' },
  ];

  const handleButtonClick = (itemId) => {
    console.log(`Botón clickeado: ${itemId}`);
  };

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      <div className={styles.leftPageContent}> {/* Este es el contenedor a posicionar */}
        <div className={styles.interactiveGrid}>
          {bookElementsData.map(item => (
            <div key={item.id} className={styles.gridItem}>
              <img src={item.imgSrc} alt={item.buttonText} className={styles.itemIcon} />
              <button 
                className={styles.itemButton} 
                onClick={() => handleButtonClick(item.id)}
              >
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* La página derecha del libro es parte del fondo del .pageContainer */}
    </div>
  );
};

export default GrimorioPage;