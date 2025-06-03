// src/pages/Home/Home.jsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Card from '../../components/Card/Card.jsx';
import ArrowButton from '../../components/ArrowButton/ArrowButton.jsx';
import useSound from '../../hooks/useSound.js';
import { gsap } from 'gsap';
import styles from './Home.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';

const Home = () => {
  const carouselRef = useRef(null);
  const cardsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const homeContainerRef = useRef(null); 

  useParallaxBackground(homeContainerRef, 0.03); 

  const playButtonClickSound = useSound('/assets/sounds/boton.wav');
  const playCardShuffleSound = useSound('/assets/sounds/cartas2.ogg');

  const cardsData = [
    { id: 1, title: 'BRUJAS DEL SÉPTIMO ARTE', imageUrl: '/assets/images/cards/card-brujas.jpg', path: '/brujas-del-septimo-arte' },
    { id: 2, title: 'OJO DE LOCA', imageUrl: '/assets/images/cards/card-ojo.jpg', path: '/ojo-de-loca' },
    { id: 3, title: 'GRIMORIO DE HISTORIAS', imageUrl: '/assets/images/cards/card-grimerio.png', path: '/grimorio-de-historias' },
    { id: 4, title: 'CRÓNICAS SOBRE AMATE', imageUrl: '/assets/images/cards/card-cronicas.jpg', path: '/cronicas-sobre-amate' },
    { id: 5, title: 'HECHIZOS PARA CONOCER', imageUrl: '/assets/images/cards/card-hechizos.jpg', path: '/hechizos-para-conocer' },
  ];

  const numCards = cardsData.length;

  // Escala para la carta central, ahora que la proporción es correcta, podemos probar un poco de escala.
  const CENTRAL_CARD_SCALE = 1.05; // Un 5% de escala
  const SIDE_CARD_SCALE_FACTOR = 0.90; // Cartas laterales un 90% de la escala de la capa anterior 
  
  const X_OFFSET_BASE = 200;          
  const Z_OFFSET_BASE = -120; // Menos profundo para que no se alejen tanto   
  const ROTATION_Y_BASE = 25;     
  const X_OFFSET_INCREMENT = 170; 
  const Z_OFFSET_INCREMENT = -110; 
  const ROTATION_Y_INCREMENT = 15;
  const Z_CENTRAL_OFFSET = 40; 
  const BRIGHTNESS_FACTOR = 0.10; 

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, cardsData.length);
  }, [cardsData.length]);

  const animateCarousel = useCallback(() => {
    if (!cardsRef.current.length) return;

    cardsRef.current.forEach((cardElement, i) => {
      if (!cardElement) return;

      let order = i - currentIndex;
      if (order < -Math.floor(numCards / 2)) order += numCards;
      else if (order > Math.floor(numCards / 2)) order -= numCards;
      
      const absOrder = Math.abs(order);
      const sign = Math.sign(order);

      let targetX = 0, targetZ = 0, targetScale = CENTRAL_CARD_SCALE, targetRotationY = 0;
      let targetOpacity = 1, targetBlur = 0, targetBrightness = 1;
      let targetZIndex = (numCards * 2) - absOrder; 

      if (cardElement) {
        if (order === 0) cardElement.classList.add(styles.activeCardContainer);
        else cardElement.classList.remove(styles.activeCardContainer);
      }

      if (order !== 0) { 
        targetScale = CENTRAL_CARD_SCALE * Math.pow(SIDE_CARD_SCALE_FACTOR, absOrder);
        if (absOrder === 1) {
          targetX = sign * X_OFFSET_BASE; targetZ = Z_OFFSET_BASE; targetRotationY = sign * ROTATION_Y_BASE;
        } else if (absOrder === 2) {
          targetX = sign * (X_OFFSET_BASE + X_OFFSET_INCREMENT); targetZ = Z_OFFSET_BASE + Z_OFFSET_INCREMENT; 
          targetRotationY = sign * (ROTATION_Y_BASE + ROTATION_Y_INCREMENT);
        } else { 
          targetScale = 0.3; targetX = sign * (X_OFFSET_BASE + X_OFFSET_INCREMENT + 100); 
          targetZ = Z_OFFSET_BASE + Z_OFFSET_INCREMENT - 100;     
          targetRotationY = sign * (ROTATION_Y_BASE + ROTATION_Y_INCREMENT + 10);
          targetOpacity = 0.3; targetBrightness = 0.2; targetBlur = 0;
          targetZIndex = numCards - absOrder; 
        }
        targetBrightness = 1 - (absOrder * BRIGHTNESS_FACTOR);
      } else { 
        targetZ = Z_CENTRAL_OFFSET; 
        targetZIndex = (numCards * 2) + 1; 
      }
      
      targetScale = Math.max(targetScale, 0.3); 
      targetBrightness = Math.max(targetBrightness, 0.3);

      gsap.to(cardElement, { 
        x: targetX, z: targetZ, scale: targetScale, rotationY: targetRotationY, opacity: targetOpacity,
        filter: `brightness(${targetBrightness})`, 
        zIndex: targetZIndex, 
        duration: 0.7, ease: 'expo.out', 
      });
    });
  }, [currentIndex, numCards, CENTRAL_CARD_SCALE, SIDE_CARD_SCALE_FACTOR, X_OFFSET_BASE, Z_OFFSET_BASE, ROTATION_Y_BASE, X_OFFSET_INCREMENT, Z_OFFSET_INCREMENT, ROTATION_Y_INCREMENT, Z_CENTRAL_OFFSET, BRIGHTNESS_FACTOR]);

  useEffect(() => {
    cardsRef.current.forEach(card => {
      if (card) gsap.set(card, { xPercent: -50, yPercent: -50, transformStyle: "preserve-3d" });
    });
    animateCarousel();
  }, [animateCarousel]);

  const handlePrev = () => { playButtonClickSound(); playCardShuffleSound(); setCurrentIndex((prev) => (prev - 1 + numCards) % numCards); };
  const handleNext = () => { playButtonClickSound(); playCardShuffleSound(); setCurrentIndex((prev) => (prev + 1) % numCards); };

  return (
    <div ref={homeContainerRef} className={styles.homeContainer}>
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <img src="/assets/images/backgrounds/logo.png" alt="Círculo de Brujas Logo" className={styles.circuloBrujasLogo} />
          <p className={styles.mainText}>Narrativas rebeldes, cine que transforma</p>
        </div>
        <div className={styles.carouselWrapper}>
          <div ref={carouselRef} className={styles.carousel}> 
            {cardsData.map((card, index) => (
              <div 
                key={card.id} 
                ref={(el) => (cardsRef.current[index] = el)} 
                className={styles.cardContainer} // La dimensión de este contenedor se ajusta en CSS
              >
                <Card title={card.title} imageUrl={card.imageUrl} path={card.path} />
              </div>
            ))}
          </div>
          <div className={styles.navigation}>
            <ArrowButton direction="left" onClick={handlePrev} />
            <ArrowButton direction="right" onClick={handleNext} />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        © 2025 Círculo de Brujas. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Home;