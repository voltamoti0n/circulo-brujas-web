// src/pages/GrimorioPage/AlquimistasPage.jsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import styles from './AlquimistasPage.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';
import ArrowButton from '../../components/ArrowButton/ArrowButton';

const alquimistasImages = [
  { id: 1, src: '/assets/images/alquimistas/alquimista_1.jpg', alt: 'Imagen Alquimista 1' },
  { id: 2, src: '/assets/images/alquimistas/alquimista_2.jpg', alt: 'Imagen Alquimista 2' },
  { id: 3, src: '/assets/images/alquimistas/alquimista_3.jpg', alt: 'Imagen Alquimista 3' },
  { id: 4, src: '/assets/images/alquimistas/alquimista_4.jpg', alt: 'Imagen Alquimista 4' },
  { id: 5, src: '/assets/images/alquimistas/alquimista_5.jpg', alt: 'Imagen Alquimista 5' },
  { id: 6, src: '/assets/images/alquimistas/alquimista_6.jpg', alt: 'Imagen Alquimista 6' },
  { id: 7, src: '/assets/images/alquimistas/alquimista_7.jpg', alt: 'Imagen Alquimista 7' },
];

const AlquimistasPage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.015);

  const imagesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const numImages = alquimistasImages.length;

  // --- Parámetros del Carrusel CORREGIDOS para estar más juntos ---
  const CENTRAL_SCALE = 1.0;
  const SIDE_SCALE_FACTOR = 0.88;
  const X_OFFSET_BASE = 230;      // Reducido para juntar las imágenes
  const Z_OFFSET_BASE = -110;
  const ROTATION_Y_BASE = 32;
  const X_OFFSET_INCREMENT = 160; // Reducido para las más lejanas
  const Z_OFFSET_INCREMENT = -100;
  const ROTATION_Y_INCREMENT = 22;
  const Z_CENTRAL_OFFSET = 50;
  const BRIGHTNESS_FACTOR = 0.2;

  useEffect(() => {
    imagesRef.current = imagesRef.current.slice(0, numImages);
  }, [numImages]);

  const animateCarousel = useCallback(() => {
    if (!imagesRef.current.length) return;

    imagesRef.current.forEach((imgElement, i) => {
      if (!imgElement) return;
      let order = i - currentIndex;
      if (order < -Math.floor(numImages / 2)) order += numImages;
      else if (order > Math.floor(numImages / 2)) order -= numImages;
      
      const absOrder = Math.abs(order);
      const sign = Math.sign(order);

      let targetX = 0, targetZ = 0, targetScale = CENTRAL_SCALE, targetRotationY = 0;
      let targetOpacity = 1, targetBrightness = 1;
      let targetZIndex = (numImages * 2) - absOrder;

      if (order !== 0) { 
        targetScale = CENTRAL_SCALE * Math.pow(SIDE_SCALE_FACTOR, absOrder);
        if (absOrder === 1) {
          targetX = sign * X_OFFSET_BASE; targetZ = Z_OFFSET_BASE; targetRotationY = sign * ROTATION_Y_BASE;
        } else if (absOrder === 2) {
          targetX = sign * (X_OFFSET_BASE + X_OFFSET_INCREMENT); targetZ = Z_OFFSET_BASE + Z_OFFSET_INCREMENT; 
          targetRotationY = sign * (ROTATION_Y_BASE + ROTATION_Y_INCREMENT);
        } else { 
            targetScale = 0; targetX = sign * (X_OFFSET_BASE + X_OFFSET_INCREMENT + 100); 
            targetOpacity = 0;
        }
        targetBrightness = 1 - (absOrder * BRIGHTNESS_FACTOR);
      } else {
        targetZ = Z_CENTRAL_OFFSET;
        targetZIndex = (numImages * 2) + 1;
      }
      
      targetScale = Math.max(targetScale, 0);
      targetBrightness = Math.max(targetBrightness, 0.2);

      gsap.to(imgElement, {
        x: targetX, z: targetZ, scale: targetScale, rotationY: targetRotationY, opacity: targetOpacity,
        filter: `brightness(${targetBrightness})`,
        zIndex: targetZIndex,
        duration: 0.6, ease: 'power3.out',
      });
    });
  }, [currentIndex, numImages]);

  useEffect(() => {
    imagesRef.current.forEach(img => {
      if (img) gsap.set(img, { xPercent: -50, yPercent: -50, transformStyle: "preserve-3d" });
    });
    animateCarousel();
  }, [animateCarousel]);

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + numImages) % numImages);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % numImages);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div ref={pageRef} className={styles.pageContainer}>
        <div className={styles.textBlock}>
          <h1>Alquimistas.</h1>
          <p>
            <strong>Transforman la realidad en mundos nuevos. Sus historias nacen del imaginario y lo simbólico.</strong> Cineastas que destacan por su creatividad y la construcción de universos originales, híbridos o fantásticos.
          </p>
        </div>

        <div className={styles.carouselSection}>
          <div className={styles.carouselWrapper}>
            <div className={styles.carousel}>
              {alquimistasImages.map((image, index) => (
                <div
                  key={image.id}
                  ref={(el) => (imagesRef.current[index] = el)}
                  className={`${styles.imageContainer} ${index === currentIndex ? styles.activeImage : ''}`}
                  onClick={() => index === currentIndex && openModal(image.src)}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.navigation}>
              <ArrowButton direction="left" onClick={handlePrev} />
              <ArrowButton direction="right" onClick={handleNext} />
          </div>
        </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Vista ampliada" className={styles.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AlquimistasPage;