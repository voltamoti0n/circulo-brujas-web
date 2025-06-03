import { useEffect } from 'react';
import { gsap } from 'gsap';

const useParallaxBackground = (targetRef, intensity = 0.05, smoothing = 0.1) => {
  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const rect = target.getBoundingClientRect(); // Obtener dimensiones y posición del elemento
      
      // Calcular el movimiento relativo al centro del elemento o de la ventana
      // Usaremos el centro de la ventana para un efecto más global
      targetX = (clientX / window.innerWidth - 0.5) * 2 * intensity * 100; // *100 para convertir a un valor más grande para bg position
      targetY = (clientY / window.innerHeight - 0.5) * 2 * intensity * 100;
    };

    const updateBackgroundPosition = () => {
      // Interpolar suavemente hacia la posición objetivo
      currentX += (targetX - currentX) * smoothing;
      currentY += (targetY - currentY) * smoothing;

      // Aplicar la posición del fondo
      // GSAP puede ser un overkill aquí, pero lo usamos para consistencia
      // o podríamos usar target.style.backgroundPosition directamente
      gsap.to(target, {
        backgroundPositionX: `${50 + currentX}%`, // Centrado + offset
        backgroundPositionY: `${50 + currentY}%`, // Centrado + offset
        duration: 0, // Actualización instantánea en cada frame de animación
        ease: 'none'
      });
      
      requestAnimationFrame(updateBackgroundPosition);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    const animationFrameId = requestAnimationFrame(updateBackgroundPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetRef, intensity, smoothing]);
};

export default useParallaxBackground;