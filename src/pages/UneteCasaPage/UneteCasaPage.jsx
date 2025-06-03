import React, { useState, useRef } from 'react';
import styles from './UneteCasaPage.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';

// Datos para las preguntas del quiz (placeholders)
const quizQuestionsData = [
  { id: 'q1', text: 'La literatura forma parte esencial de tu vida' },
  { id: 'q2', text: 'La literatura forma parte esencial de tu vida' },
  { id: 'q3', text: 'La literatura forma parte esencial de tu vida' },
  { id: 'q4', text: 'La literatura forma parte esencial de tu vida' },
];

const UneteCasaPage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.015);

  // Estado para las respuestas del quiz
  // Guardará un objeto donde la clave es el id de la pregunta y el valor es la opción seleccionada
  const [answers, setAnswers] = useState({});

  const handleOptionChange = (questionId, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: parseInt(value) // Guardar como número
    }));
  };

  // Aquí podrías añadir lógica para calcular el puntaje y determinar la casa
  // Por ahora, solo manejamos la selección.

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      {/* Logo y Tagline Centrales */}
      <div className={styles.logoHeaderArea}>
        <img src="/assets/images/backgrounds/logo.png" alt="Círculo de Brujas" className={styles.mainLogo} />
        <p className={styles.tagline}>Narrativas rebeldes, cine que transforma</p>
      </div>

      <div className={styles.quizLayout}>
        {/* Columna Izquierda: Puntaje */}
        <div className={styles.scoreColumn}>
          <h2 className={styles.scoreTitle}>Puntaje</h2>
          <ul className={styles.scoreList}>
            <li>10 - 15 pts <strong>Alquimistas</strong></li>
            <li>16 - 20 <strong>Guardianas</strong></li>
            <li>21 - 25 <strong>Curanderas</strong></li>
            <li>26 - 30 <strong>Lectoras</strong></li>
          </ul>
          {/* Aquí podría ir un botón de "Ver mi casa" o similar */}
        </div>

        {/* Columna Derecha: Preguntas del Quiz */}
        <div className={styles.questionsColumn}>
          {quizQuestionsData.map((question) => (
            <div key={question.id} className={styles.questionItem}>
              <p className={styles.questionText}>{question.text}</p>
              <div className={styles.optionsContainer}>
                {[1, 2, 3, 4, 5].map((optionValue) => (
                  <label key={optionValue} className={styles.optionLabel}>
                    <input
                      type="radio"
                      name={question.id} // Importante para que solo se seleccione una opción por pregunta
                      value={optionValue}
                      checked={answers[question.id] === optionValue}
                      onChange={() => handleOptionChange(question.id, optionValue)}
                      className={styles.radioInput}
                    />
                    <span className={styles.radioCustom}></span>
                    {optionValue}
                  </label>
                ))}
              </div>
            </div>
          ))}
           {/* <button className={styles.submitButton}>Calcular mi Casa</button> */}
        </div>
      </div>
    </div>
  );
};

export default UneteCasaPage;