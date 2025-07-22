// src/pages/BrujasDelSeptimoArtePage/AstridRonderoPage.jsx
import React from 'react';
import styles from './AstridRonderoPage.module.css';

const AstridRonderoPage = () => {
  return (
    <div className={styles.pageContainer}>
      
      <section className={`${styles.block} ${styles.headerBlock}`}>
        <h1 className={styles.title}>Astrid Rondero</h1>
      </section>

      <section className={`${styles.block} ${styles.introBlock}`}>
        <div className={styles.textWrapper}>
          <p className={`${styles.paragraph} ${styles.textBlack}`}>
            Astrid Rondero es egresada del CUEC (hoy ENAC) de la UNAM. Desde sus inicios, mostró un fuerte compromiso social y una búsqueda por narrativas complejas. Su tesis En aguas quietas fue nominada al Ariel y seleccionada en más de 35 festivales internacionales. Recibió becas de Berlinale Talents, Tribeca, FONCA y IMCINE que le permitieron desarrollar una visión crítica y profunda sobre México. Un dato curioso: su pasión por narrar historias femeninas comenzó tras trabajar en Tijuana, ciudad que le inspiró profundamente por sus contrastes culturales y sociales.
          </p>
        </div>
      </section>

      <section className={`${styles.block} ${styles.storyBlock}`}>
        <div className={styles.textWrapper}>
            <p className={styles.paragraph}>
                Su ópera prima Los dias más oscuros de nosotras fue un éxito inesperado: ganó siete premios internacionales y obtuvo nominaciones al Ariel. La película explora la historia de una mujer enfrentando su pasado y la violencia cotidiana en Tijuana, desde una mirada femenina, íntima y crítica. Como productora y coguionista de Sin señas particulares, logró uno de sus mayores reconocimientos internacionales: el Premio del Público y Mejor Guion en Sundance. Su cine ha transitado por festivales como San Sebastián, Gotham Awards y Sundance, siempre mostrando historias que conectan desde lo humano, más allá de lo espectacular.
            </p>
        </div>
      </section>
      
      <section className={`${styles.block} ${styles.philosophyBlock}`}>
          <div className={styles.textWrapper}>
              <p className={`${styles.paragraph} ${styles.textBlack}`}>
                  Astrid no busca contar historias heroicas, sino humanas. Para Los días más oscuros de nosotras, reunió a un equipo femenino que exploró sus propias experiencias en espacios masculinizados. Ella misma dice que la película refleja cómo se sentía siendo mujer en la industria del cine mexicano. En Sujo, su más reciente película, abordó la vida de un huérfano del narco, cuestionando si el destino está determinado por el entorno. Inspirada en el periodismo de Javier Valdez, Astrid quiso humanizar a quienes viven atrapados por la violencia. Un dato clave de su proceso creativo es que participó activamente en la edición de sus películas, donde dice que realmente descubre el corazón de cada historia.
              </p>
          </div>
      </section>

      <section className={`${styles.block} ${styles.impactBlock}`}>
        <div className={styles.textWrapper}>
          <p className={styles.paragraph}>
              Más allá de los premios, Rondero es reconocida por abrir espacios a nuevas voces femeninas en el cine mexicano. Ha sido becaria de Jóvenes Creadores y miembro del Sistema Nacional de Creadores de Arte.
              <br /><br />
              Su trabajo ha influido en la visibilidad de temáticas como la violencia de género, la orfandad provocada por el narco y la lucha por la autonomía femenina en ambientes hostiles. Astrid define su cine como un acto kamikaze, porque siempre esta dispuesto a arriesgarse por contar lo que otros prefieren callar. Su motivación es clara: hacer cine para comprendernos mejor como sociedad y cuestionar los destinos impuestos.
          </p>
        </div>
      </section>
      
      <section className={`${styles.block} ${styles.footerBlock}`} />

    </div>
  );
};

export default AstridRonderoPage;