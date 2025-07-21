import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HechizosParaConocerPage.module.css'; 
import useParallaxBackground from '../../hooks/useParallaxBackground';

const HechizosParaConocerPage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.02);
  const navigate = useNavigate();

  const potionsData = [
    { id: 'potion1', imgSrc: '/assets/images/icons/pocion1.png', styleClass: 'potionPos1', route: '/hechizos-para-conocer/color-historias' },
    { id: 'potion2', imgSrc: '/assets/images/icons/pocion2.png', styleClass: 'potionPos2', route: '/hechizos-para-conocer/mundo-audiovisual' },
    { id: 'potion3', imgSrc: '/assets/images/icons/pocion3.png', styleClass: 'potionPos3', route: '/hechizos-para-conocer/narrar-historias' },
    { id: 'potion4', imgSrc: '/assets/images/icons/pocion4.png', styleClass: 'potionPos4', route: '/hechizos-para-conocer/captura-instante' },
    { id: 'potion5', imgSrc: '/assets/images/icons/pocion5.png', styleClass: 'potionPos5', route: '/hechizos-para-conocer/esquema-rembrandt' },
    { id: 'potion6', imgSrc: '/assets/images/icons/pocion6.png', styleClass: 'potionPos6', route: '/hechizos-para-conocer/match-cut' },
  ];

  const handlePotionClick = (route) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.shelfArea}>
          {potionsData.map(potion => (
            <img 
              key={potion.id} 
              src={potion.imgSrc} 
              alt={`Poción ${potion.id}`} 
              className={`${styles.potionImage} ${styles[potion.styleClass]}`}
              onClick={() => handlePotionClick(potion.route)}
              role="button"
            />
          ))}
        </div>
      </div>
       <div className={styles.textBelowLogoArea}>
        </div>
    </div>
  );
};

export default HechizosParaConocerPage;