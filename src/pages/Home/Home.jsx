// src/pages/Home/Home.jsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Card from '../../components/Card/Card.jsx';
import ArrowButton from '../../components/ArrowButton/ArrowButton.jsx';
import useSound from '../../hooks/useSound.js';
import { gsap } from 'gsap';
import styles from './Home.module.css';

const Home = () => {
  const carouselRef = useRef(null);
  const cardsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const playMedievalButtonClick = useSound('/assets/sounds/medieval_button.mp3');
  const playCardShuffle = useSound('/assets/sounds/card_shuffle.mp3');

  const cardsData = [
    { id: 1, title: 'BRUJAS DEL SÉPTIMO ARTE', imageUrl: '/assets/images/cards/card-brujas.jpg' },
    { id: 2, title: 'OJO DE LOCA', imageUrl: '/assets/images/cards/card-ojo.jpg' },
    { id: 3, title: 'GRIMORIO DE HISTORIAS', imageUrl: '/assets/images/cards/card-grimerio.png' },
    { id: 4, title: 'CRÓNICAS SOBRE AMATE', imageUrl: '/assets/images/cards/card-cronicas.jpg' },
    { id: 5, title: 'HECHIZOS PARA CONOCER', imageUrl: '/assets/images/cards/card-hechizos.jpg' },
  ];

  const numCards = cardsData.length;
  // Ajustes para el carrusel (Punto 2 y 3)
  const radius = 190; // Reducido drásticamente para un círculo más apretado
  const angleSpread = 38; // Ángulo entre cartas, ajustado para el nuevo radio

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, cardsData.length);
  }, [cardsData.length]);

  const animateCarousel = useCallback(() => {
    if (!cardsRef.current.length || !carouselRef.current) return;

    const centerCardScale = 1.1; 
    const sideCardBaseScale = 0.55; // Escala base para las cartas más lejanas, más pequeñas

    cardsRef.current.forEach((cardElement, i) => {
      if (!cardElement) return;

      const relativeAngleDegrees = (i - currentIndex) * angleSpread;
      const angleRadians = relativeAngleDegrees * (Math.PI / 180);
      const x = radius * Math.sin(angleRadians);
      // Ajuste para que zPos sea más negativo para las cartas laterales, aumentando la profundidad visual
      const zPos = radius * (Math.cos(angleRadians) -1) - (Math.abs(Math.sin(angleRadians)) * radius * 0.4) ; 
      const depthFactor = (1 - Math.cos(angleRadians)) / 2; 

      let scale, opacity, filterBrightness, filterBlur, zIndexVal;

      if (i === currentIndex) {
        scale = centerCardScale;
        opacity = 1;
        filterBrightness = 1;
        filterBlur = 0;
        zIndexVal = numCards + 2; // La carta central siempre encima de todo
      } else {
        // Escala: Interpolar más agresivamente
        const scaleDepthFactor = Math.pow(depthFactor, 0.4); // Exponente menor para cambio de escala más rápido
        scale = centerCardScale - scaleDepthFactor * (centerCardScale - sideCardBaseScale);
        scale = Math.max(sideCardBaseScale * 0.6, scale); 

        opacity = 1 - Math.pow(depthFactor, 0.5) * 0.7; // Opacidad disminuye más rápido
        opacity = Math.max(0.15, opacity); 

        filterBrightness = 1 - depthFactor * 0.5; 
        filterBrightness = Math.max(0.3, filterBrightness);

        filterBlur = depthFactor * 7; // Aumentar blur para más profundidad
        
        // Ajuste de zIndex para que las cartas más cercanas (menor ángulo absoluto) estén por encima
        // de las más lejanas (mayor ángulo absoluto)
        const absRelativeAngle = Math.abs(relativeAngleDegrees);
        zIndexVal = numCards - Math.floor(absRelativeAngle / angleSpread); // Da prioridad a las más cercanas al centro
      }
      
      gsap.to(cardElement, {
        x: x,
        z: zPos,
        rotationY: relativeAngleDegrees, 
        scale: scale,
        opacity: opacity,
        filter: `brightness(${filterBrightness}) blur(${filterBlur}px)`,
        zIndex: zIndexVal,
        duration: 0.75,
        ease: 'circ.out', 
      });
    });

    gsap.to(carouselRef.current, {
      rotationY: currentIndex * -angleSpread,
      duration: 0.75,
      ease: 'circ.out',
    });

  }, [currentIndex, numCards, angleSpread, radius]);

  useEffect(() => {
    cardsRef.current.forEach(card => {
      if (card) {
        gsap.set(card, { xPercent: -50, yPercent: -50, transformStyle: "preserve-3d" });
      }
    });
    animateCarousel();
  }, [animateCarousel]);

  const handlePrev = () => {
    playMedievalButtonClick();
    playCardShuffle();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numCards) % numCards);
  };

  const handleNext = () => {
    playMedievalButtonClick();
    playCardShuffle();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numCards);
  };

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img src="/assets/images/backgrounds/logo-inicial.png" alt="CB Logo" className={styles.cbLogo} />
        </div>
        <nav>
          <ul>
            <li><a href="#">CALDERO DE CONOCIMIENTO</a></li>
            <li><a href="#">ÚNETE A UNA CASA</a></li>
            <li><a href="#">EXPLORA EL LIBRERO MÁGICO</a></li>
            <li><button>Regístrate</button></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
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
                className={styles.cardContainer}
              >
                <Card title={card.title} imageUrl={card.imageUrl} />
              </div>
            ))}
          </div>
          <div className={styles.navigation}>
            <ArrowButton direction="left" onClick={handlePrev} />
            <ArrowButton direction="right" onClick={handleNext} />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        © 2025 Círculo de Brujas. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Home;