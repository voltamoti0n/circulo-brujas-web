import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GrimorioPage.module.css';

const GrimorioPage = () => {
  const pageRef = useRef(null); 
  const navigate = useNavigate();

  const bookElementsData = [
    { id: 'alquimistas', imgSrc: '/assets/images/icons/piedra.png', buttonText: 'Alquimistas' },
    { id: 'guardianas', imgSrc: '/assets/images/icons/copa.png', buttonText: 'Guardianas' },
    { id: 'curanderas', imgSrc: '/assets/images/icons/recipiente.png', buttonText: 'Curanderas' },
    { id: 'lectoras', imgSrc: '/assets/images/icons/libro.png', buttonText: 'Lectoras' },
  ];

  const handleButtonClick = (itemId) => {
    // Navegar a la página correspondiente
    if (itemId === 'alquimistas') {
      navigate('/grimorio-de-historias/alquimistas');
    } else if (itemId === 'guardianas') {
      navigate('/grimorio-de-historias/guardianas');
    } else if (itemId === 'curanderas') {
      navigate('/grimorio-de-historias/curanderas');
    } else if (itemId === 'lectoras') {
      navigate('/grimorio-de-historias/lectoras');
    }
  };

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      <div className={styles.leftPageContent}>
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
    </div>
  );
};

export default GrimorioPage;