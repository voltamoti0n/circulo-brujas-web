import React, { useState, useRef } from 'react';
import styles from './UneteCasaPage.module.css';
import useParallaxBackground from '../../hooks/useParallaxBackground';

// Preguntas definitivas del quiz
const quizQuestionsData = [
  { id: 'q1', text: '¿Qué tanto te inspira escribir o dirigir una película?' },
  { id: 'q2', text: '¿Qué tan importante es para ti la construcción de un personaje?' },
  { id: 'q3', text: '¿Qué tan creativo te consideras?' },
  { id: 'q4', text: '¿Qué tan emocionada te gustaría que saliera la gente después de ver tu película?' },
  { id: 'q5', text: '¿La realidad es prioridad en las historias que cuentas?' },
  { id: 'q6', text: '¿Qué tan natural se te hace contar historias simbólicas o fantásticas?' },
  { id: 'q7', text: '¿Qué tan importante es para ti que tu cine mezcle forma, mensaje y emoción?' },
];

// Componente para el modal de resultados
const ResultModal = ({ result, onClose }) => {
  if (!result) return null;

  const houseData = {
    Alquimistas: {
      image: '/assets/images/icons/piedra.png',
      description: 'Creativas, oníricas, imaginativas, simbólicas.'
    },
    Guardianas: {
      image: '/assets/images/icons/copa.png',
      description: 'Denuncian, protegen la memoria, resisten.'
    },
    Curanderas: {
      image: '/assets/images/icons/recipiente.png',
      description: 'Íntimas, emocionales, sensibles, sanadoras.'
    },
    Lectoras: {
      image: '/assets/images/icons/libro.png',
      description: 'Narrativas potentes, lenguaje visual cuidado, técnicas.'
    }
  };

  const data = houseData[result.casa];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.modalTitle}>¡Perteneces a la casa de las <br/><span>{result.casa}!</span></h2>
        <img src={data.image} alt={`Icono de ${result.casa}`} className={styles.modalImage} />
        <p className={styles.modalDescription}>{data.description}</p>
        <p className={styles.modalScore}>Tu puntaje fue de: {result.score}</p>
      </div>
    </div>
  );
};


const UneteCasaPage = () => {
  const pageRef = useRef(null);
  useParallaxBackground(pageRef, 0.015);

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleOptionChange = (questionId, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: parseInt(value)
    }));
  };

  const calculateHouse = () => {
    if (Object.keys(answers).length < quizQuestionsData.length) {
      alert('Por favor, responde todas las preguntas para descubrir tu casa.');
      return;
    }

    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    
    let houseName = '';
    // Puntuación corregida según el nuevo total de preguntas (max 35)
    if (totalScore >= 7 && totalScore <= 13) {
      houseName = 'Alquimistas';
    } else if (totalScore >= 14 && totalScore <= 20) {
      houseName = 'Guardianas';
    } else if (totalScore >= 21 && totalScore <= 27) {
      houseName = 'Curanderas';
    } else if (totalScore >= 28 && totalScore <= 35) {
      houseName = 'Lectoras';
    } else {
      // Fallback por si la puntuación es muy baja
      houseName = 'Alquimistas';
    }

    setResult({ casa: houseName, score: totalScore });
  };
  
  const closeModal = () => setResult(null);

  return (
    <>
      <div ref={pageRef} className={styles.pageContainer}>
        <div className={styles.logoHeaderArea}>
          <img src="/assets/images/backgrounds/logo.png" alt="Círculo de Brujas" className={styles.mainLogo} />
          <p className={styles.tagline}>Narrativas rebeldes, cine que transforma</p>
        </div>

        <div className={styles.quizLayout}>
          <div className={styles.scoreColumn}>
            <h2 className={styles.scoreTitle}>Puntaje</h2>
            <ul className={styles.scoreList}>
              <li>7 - 13 pts <strong>Alquimistas</strong></li>
              <li>14 - 20 pts <strong>Guardianas</strong></li>
              <li>21 - 27 pts <strong>Curanderas</strong></li>
              <li>28 - 35 pts <strong>Lectoras</strong></li>
            </ul>
          </div>

          <div className={styles.questionsColumn}>
            {quizQuestionsData.map((question) => (
              <div key={question.id} className={styles.questionItem}>
                <p className={styles.questionText}>{question.text}</p>
                <div className={styles.optionsContainer}>
                  {[1, 2, 3, 4, 5].map((optionValue) => (
                    <label key={optionValue} className={styles.optionLabel}>
                      <input
                        type="radio"
                        name={question.id}
                        value={optionValue}
                        checked={answers[question.id] === optionValue}
                        onChange={() => handleOptionChange(question.id, optionValue)}
                        className={styles.radioInput}
                      />
                      <span className={styles.radioCustom}></span>
                      <span className={styles.optionValueText}>{optionValue}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button className={styles.submitButton} onClick={calculateHouse}>
              Resultado
            </button>
          </div>
        </div>
      </div>
      <ResultModal result={result} onClose={closeModal} />
    </>
  );
};

export default UneteCasaPage;