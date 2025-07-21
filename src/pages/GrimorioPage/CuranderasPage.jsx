// src/pages/GrimorioPage/CuranderasPage.jsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import styles from './CuranderasPage.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';
import ArrowButton from '../../components/ArrowButton/ArrowButton';

// Datos de las imágenes para el carrusel de Curanderas
const curanderasImages = [
  { id: 1, src: '/assets/images/curanderas/curanderas_1.jpg', alt: 'Imagen Curandera 1' },
  { id: 2, src: '/assets/images/curanderas/curanderas_2.jpg', alt: 'Imagen Curandera 2' },
  { id: 3, src: '/assets/images/curanderas/curanderas_3.jpg', alt: 'Imagen Curandera 3' },
  { id: 4, src: '/assets/images/curanderas/curanderas_4.jpg', alt: 'Imagen Curandera 4' },
  { id: 5, src: '/assets/images/curanderas/curanderas_5.jpg', alt: 'Imagen Curandera 5' },
];

const CuranderasPage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.015);

  const imagesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const numImages = curanderasImages.length;

  const CENTRAL_SCALE = 1.0;
  const SIDE_SCALE_FACTOR = 0.88;
  const X_OFFSET_BASE = 230;
  const Z_OFFSET_BASE = -110;
  const ROTATION_Y_BASE = 32;
  const X_OFFSET_INCREMENT = 160;
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
          <h1>Curanderas.</h1>
          <p>
            <strong>Sus películas nos enfrentan con el dolor y luego nos ofrecen consuelo. Sanan desde la intimidad.</strong> Creadoras que exploran emociones profundas, duelo, amor, vínculos humanos y la búsqueda se sentido.
          </p>
        </div>

        <div className={styles.carouselSection}>
          <div className={styles.carouselWrapper}>
            <div className={styles.carousel}>
              {curanderasImages.map((image, index) => (
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

export default CuranderasPage;