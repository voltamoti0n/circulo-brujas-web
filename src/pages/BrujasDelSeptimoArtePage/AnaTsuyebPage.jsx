import React from 'react';
import styles from './AnaTsuyebPage.module.css';
import SocialFooter from '../../components/SocialFooter/SocialFooter';

const AnaTsuyebPage = () => {
  return (
    <div className={styles.pageContainer}>
      
      {/* Bloque 1: Cabecera */}
      <section className={`${styles.block} ${styles.headerBlock}`}>
        <h1 className={styles.title}>Ana Ts'uyeb</h1>
      </section>

      {/* Bloque 2: Introducción (con texto negro) */}
      <section className={`${styles.block} ${styles.introBlock}`}>
        <div className={styles.textWrapper}>
          <p className={`${styles.paragraph} ${styles.textBlack}`}>
            Ana Ts'uyeb no es solo cineasta. Es comunicadora, traductora, mujer tsotsil y una voz luminosa del cine indígena contemporáneo. Nació en Naranjatic Alto, una comunidad del municipio de Chenalhó, Chiapas, y creció entre relatos de lucha social, rebeldía y resistencia colectiva. Desde joven se preguntó qué sería del futuro de los pueblos originarios y encontró en el cine una forma de responder.
            <br /><br />
            En 2024, su primer largometraje documental, "Li cham (Morí)", fue seleccionado en el Festival Internacional de Cine de Morelia, donde ganó el Premio Ojo a Mejor Largometraje Documental Mexicano. El filme, que le tomó cinco años realizar, es una obra íntima, poderosa y profundamente arraigada a su tierra, a su gente, y a su historia.
          </p>
        </div>
      </section>

      {/* Bloque 3: Historia de "Li cham" (con texto blanco) */}
      <section className={`${styles.block} ${styles.storyBlock}`}>
        <div className={styles.textWrapper}>
            <p className={styles.paragraph}>
                <strong className={styles.boldText}>Li cham (Morí): cuando el cine se hace con el corazón.</strong>
                Li cham retrata la vida de tres mujeres tsotsiles: Margarita, Juana y Faustina -su madre, su tía y su cuñada—, quienes enfrentan pérdidas, desigualdades y silencios impuestos por los usos y costumbres de su comunidad. La película no habla solo de dolor: habla también de renacimiento, de cómo estas mujeres, tras perder bebés, enfrentar matrimonios forzados o violencia estructural, encuentran nuevas formas de existir, resistir y florecer.
                <br /><br />
                Rodado en lengua tsotsil, con subtítulos en español, inglés y francés, el documental se estructura en tres etapas de vida (niñez, adolescencia y presente) y se sincroniza con los ciclos de la tierra: siembra, lluvia, cosecha. La narrativa se construye a través de la voz en off, en un diálogo pausado, íntimo, donde las protagonistas narran su historia como un susurro que, sin levantar la voz, sacude.
            </p>
        </div>
      </section>
      
      {/* Bloque 4: Filosofía y Mirada (con texto blanco) */}
      <section className={`${styles.block} ${styles.philosophyBlock}`}>
          <div className={styles.textWrapper}>
              <p className={styles.paragraph}>
                  La mirada de Ana Ts'uyeb está atravesada por el zapatismo. Creció bajo su influencia, dentro de una comunidad autónoma, y reconoce en ese movimiento la semilla que le dio fuerza a muchas mujeres para romper con los mandatos tradicionales. En Li cham, el zapatismo no es solo contexto, es raíz: fue el punto de inflexión que permitió a estas mujeres comenzar a soñar con una vida distinta, con acceso a educación, salud, tierra y autonomía.
                  <br /><br />
                  La película es también una forma de cuestionar lo normalizado: la violencia machista, la desigualdad, el silencio. Ana crea desde su cosmovisión tsotsil, sin copiar formatos, sin fingir neutralidad, sin miedo a lo que duele. El cine, dice, le permitió tener su propia postura. Su forma de filmar es comunitaria, sanadora, llena de afecto.
              </p>
          </div>
      </section>

      {/* Bloque 5: Impacto (con texto negro) */}
      <section className={`${styles.block} ${styles.impactBlock}`}>
        <div className={styles.textWrapper}>
          <p className={`${styles.paragraph} ${styles.textBlack}`}>
              Ana no solo cuenta historias: crea espacios para que otros las cuenten. Durante el rodaje, generó confianza con sus protagonistas y transformó las entrevistas en momentos de desahogo y memoria viva. Su cine no observa desde fuera; pertenece a lo que retrata. Li cham no solo da voz a mujeres invisibilizadas, sino que dignifica sus luchas y los convierte en espejo para otras.
              <br /><br />
              Presentar la película en Morelia fue un sueño cumplido. Para su madre, fue la primera vez fuera de su comunidad, la primera vez en un avión, la primera vez aplaudida como una actriz. "¿Por qué la gente lloraba?", preguntó al final de la función. Porque su historia -como la de tantas otras mujeres- conmueve, duele, y también inspira.
              <br /><br />
              Ana Ts'uyeb está construyendo un cine donde la tierra, la comunidad y la resistencia no son temas, sino forma de vida. Con Li cham, ha plantado una semilla: una historia que transforma el duelo en dignidad, el silencio en palabra, y la memoria en futuro.
          </p>
        </div>
      </section>
      
      {/* Bloque 6: Footer con los botones de redes sociales dentro */}
      <section className={styles.footerBlock}>
        <SocialFooter />
      </section>

    </div>
  );
};

export default AnaTsuyebPage;