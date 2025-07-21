// src/pages/BrujasDelSeptimoArtePage/MichelleGarzaPage.jsx
import React from 'react';
import styles from './MichelleGarzaPage.module.css';

const MichelleGarzaPage = () => {
  return (
    <div className={styles.pageContainer}>
      
      <section className={`${styles.block} ${styles.headerBlock}`}>
        <h1 className={styles.title}>Michelle Garza Cervera</h1>
      </section>

      <section className={`${styles.block} ${styles.introBlock}`}>
        <div className={styles.textWrapper}>
          <p className={`${styles.paragraph} ${styles.textBlack}`}>
            Michelle Garza Cervera es una directora y guionista mexicana egresada del Centro de Capacitación Cinematográfica (CCC). Su formación continuó con una maestría en Dirección en Goldsmiths, Londres, gracias a una beca Chevening. Aunque de niña quería ser dentista, el cine de terror la atrapó desde joven.
            <br /><br />
            Su familia, dedicada al diseño gráfico e industrial, la influenció con mundos visuales cargados de fantasía. Además, Michelle fue parte de la escena punk en México, donde encontró una forma de expresión que más tarde trasladó al cine.
          </p>
        </div>
      </section>

      <section className={`${styles.block} ${styles.storyBlock}`}>
        <div className={styles.textWrapper}>
            <p className={styles.paragraph}>
                Desde 2009 realizó cortometrajes seleccionados en más de 100 festivales internacionales. Su ópera prima Huesera (2022) fue su gran salto: ganó el premio a Mejor Dirección Narrativa y el Nora Ephron Award en Tribeca, además de triunfar en Sitges, Lima y Toronto. En Huesera, Michelle aborda los miedos ocultos de la maternidad desde el terror psicológico. Actualmente trabaja en la adaptación del libro Ornamento y en el remake hollywoodense de La mano que mece la cuna, producido por 20th Century Studios.
            </p>
        </div>
      </section>
      
      <section className={`${styles.block} ${styles.philosophyBlock}`}>
          <div className={styles.textWrapper}>
              <p className={styles.paragraph}>
                  Michelle dice que su arte son sus propios miedos y pesadillas. Su cine nace del deseo de romper con estereotipos, especialmente sobre las mujeres en el terror, donde históricamente han sido víctimas o personajes moralistas. En Huesera, explora el miedo a la maternidad no deseada y la presión social por formar una familia perfecta. Su proceso creativo está lleno de referencias literarias como Frankenstein y películas como El bebé de Rosemary, pero siempre desde una perspectiva feminista y crítica. Además, integra su experiencia en el punk: hacer cine sin miedo a romper las reglas.
              </p>
          </div>
      </section>

      <section className={`${styles.block} ${styles.impactBlock}`}>
        <div className={styles.textWrapper}>
          <p className={`${styles.paragraph} ${styles.textBlack}`}>
              Michelle no busca solo asustar, quiere que el terror sirva para incomodar y cuestionar lo que parece normal. Para ella, el género fantástico permite revelar opresiones invisibles, como la familia nuclear, la presión social sobre las mujeres y los miedos internos que no siempre se nombran. Huesera es el reflejo de esas preguntas incómodas. A futuro, quiere explorar la ciencia ficción y adaptar obras literarias feministas y de horror. Como ella misma dice: "Mi cine es una mentira que muestra las verdades más profundas que a veces no nos atrevemos a decir en voz alta".
          </p>
        </div>
      </section>
      
      <section className={`${styles.block} ${styles.footerBlock}`} />

    </div>
  );
};

export default MichelleGarzaPage;