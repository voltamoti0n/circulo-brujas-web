import React, { useRef } from 'react';
import styles from './ExploraLibreroPage.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';

const ExploraLibreroPage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.015);

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      <div className={styles.textContainer}>
        <h1>¡Hola, queridas brujas!</h1>
        <p>
          Bienvenidos al <strong>Círculo de Brujas</strong>, está es una página con iniciativa en la difusión del cine mexicano hecho por mujeres. El objetivo es brindar información acerca de cineastas mexicanas emergentes.
        </p>
        <p>
          Está página, es támbien un proyecto escolar realizado por la alumna <strong>Adriana Fabiola Ibarra Morales</strong> de la licenciatura en <strong>Diseño de la Comunicación Gráfica</strong> de la <strong>Universidad Autónoma Metropolita</strong>, como parte de la materia de <strong>Integral III</strong>. Esté proyecto será calificado y evaluado, y ayudara en la finalización del plan de estudios de la licenciatura.
        </p>
      </div>
    </div>
  );
};

export default ExploraLibreroPage;