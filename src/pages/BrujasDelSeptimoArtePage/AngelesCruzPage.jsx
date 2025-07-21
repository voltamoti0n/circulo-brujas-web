// src/pages/BrujasDelSeptimoArtePage/AngelesCruzPage.jsx
import React from 'react';
import styles from './AngelesCruzPage.module.css';

const AngelesCruzPage = () => {
  return (
    <div className={styles.pageContainer}>
      
      {/* Bloque 1: Cabecera */}
      <section className={`${styles.block} ${styles.headerBlock}`}>
        <h1 className={styles.title}>Ángeles Cruz</h1>
      </section>

      {/* Bloque 2: Introducción */}
      <section className={`${styles.block} ${styles.introBlock}`}>
        <div className={styles.textWrapper}>
          <p className={styles.paragraph}>
            Ángeles Cruz es una destacada cineasta, actriz y guionista mexicana, originaria de la comunidad indígena de Villa Guadalupe Victoria, en Oaxaca. Es reconocida por su compromiso con la representación de los pueblos originarios y la diversidad en el cine, así como por su mirada sensible y comunitaria hacia temas como el duelo, la sexualidad, la marginación y la identidad.
          </p>
        </div>
      </section>

      {/* Bloque 3: Inicios y Carrera como Actriz */}
      <section className={`${styles.block} ${styles.storyBlock}`}>
        <div className={styles.textWrapper}>
            <p className={styles.paragraph}>
                En un inicio, Ángeles Cruz soñaba con ser ingeniera agrónoma, pero su camino cambió al descubrir el arte escénico. Estudió en el Centro de Educación Artística Miguel Cabrera en Oaxaca y luego se formó como actriz en la Escuela de Arte Teatral del Instituto Nacional de Bellas Artes (INBA).
                <br /><br />
                Debutó en el cine en 1994 con la película "La hija del puma", una coproducción sueco-danesa sobre las masacres indígenas en Guatemala, por la que fue nominada a Mejor Actriz por la Academia Sueca. Desde entonces, ha actuado en numerosas películas y series como La otra conquista, El violín, Tamara y la Catarina, Capadocia, El Chapo, entre otras.
            </p>
        </div>
      </section>
      
      {/* Bloque 4: Trayectoria como Directora */}
      <section className={`${styles.block} ${styles.philosophyBlock}`}>
          <div className={styles.textWrapper}>
              <p className={styles.paragraph}>
                  En 2012 inició su trayectoria como directora y guionista con el cortometraje "La tiricia o cómo curar la tristeza", obra con la que ganó el Premio Ariel y la Diosa de Plata. Esta película, como muchas otras en su filmografía, reflexiona sobre el dolor emocional y los abusos en comunidades vulnerables.
                  <br /><br />
                  Le siguieron los cortometrajes La carta (2013) y Arcángel (2018), este último galardonado en festivales internacionales como La Habana, Toulouse, San José, Egipto y Canadá. En 2021 estrenó su primer largometraje, "Nudo mixteco", una obra profundamente humana que narra, desde tres miradas femeninas el retorno a un pueblo oaxaqueño y el enfrentamiento con prejuicios relacionados con la sexualidad en comunidades indígenas. La película recibió múltiples premios en México, Chile, Canadá, EEUU, y España.
                  <br /><br />
                  En 2023, presentó su segundo largometraje, "Valentina o la serenidad", una obra autobiográfica sobre el duelo infantil, basada en rituales mixtecos. Fue producido con la participación activa de su comunidad natal, reafirmando su estilo de cine colectivo y comprometido.
              </p>
          </div>
      </section>

      {/* Bloque 5: Activismo e Impacto */}
      <section className={`${styles.block} ${styles.impactBlock}`}>
        <div className={styles.textWrapper}>
          <p className={`${styles.paragraph}`}>
              Además de su labor artística, Ángeles Cruz ha alzado la voz en defensa de los derechos humanos. En 2023 denunció públicamente el asesinato de su hermano, Román Cruz Murillo, tras una emboscada en Oaxaca, y exigió justicia y la renuncia del gobernador del estado por su omisión ante la violencia.
              <br /><br />
              Su cine es, como ella misma lo define, un "acto de resistencia". Para Cruz, hacer cine es sembrar una semilla que alimente la reflexión, el espíritu y la crítica social.
          </p>
        </div>
      </section>
      
      {/* Bloque 6: Footer */}
      <section className={styles.footerBlock} />

    </div>
  );
};

export default AngelesCruzPage;