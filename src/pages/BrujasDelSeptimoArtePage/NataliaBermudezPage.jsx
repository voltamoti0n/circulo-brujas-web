// src/pages/BrujasDelSeptimoArtePage/NataliaBermudezPage.jsx
import React from 'react';
import styles from './NataliaBermudezPage.module.css';

const NataliaBermudezPage = () => {
  return (
    <div className={styles.pageContainer}>
      
      {/* Bloque 1: Cabecera */}
      <section className={`${styles.block} ${styles.headerBlock}`}>
        <h1 className={styles.title}>Natalia Bermúdez</h1>
      </section>

      {/* Bloque 2: Introducción */}
      <section className={`${styles.block} ${styles.introBlock}`}>
        <div className={styles.textWrapper}>
          <p className={styles.paragraph}>
            Natalia Bermúdez Fierro nació en Tijuana, Baja California. Aunque su sueño inicial era ser actriz y amaba el teatro, su vida cambió cuando, por casualidad, tomó un taller de cine en la preparatoria. Fue ahí donde descubrió el lenguaje cinematográfico, que desde entonces no ha dejado de explorar. Se formó como fotógrafa en la Escuela Activa de Fotografía y después estudió dirección en el Centro de Capacitación Cinematográfica, donde se tituló Cum Laude. Un dato curioso es que originalmente se especializó en fotografía, pero a mitad del camino decidió cambiarse a dirección, aunque siempre ha mantenido ambas disciplinas presentes en su trabajo.
          </p>
        </div>
      </section>

      {/* Bloque 3: Trayectoria */}
      <section className={`${styles.block} ${styles.storyBlock}`}>
        <div className={styles.textWrapper}>
            <p className={styles.paragraph}>
                Natalia ha dirigido y escrito cortos como Golden Malibu, Entre las 8 y las 9, Calendario de reconstrucción y Apnea, con los que ha participado en festivales internacionales como el FICM, GIFF, Palm Springs, entre otros. También ha trabajado en televisión en proyectos como Stories of a Generation (Netflix), Marea Alta (Vix) y Erótica (Pantaya).
                <br /><br />
                Un aspecto clave de su carrera es su capacidad para transitar entre géneros y formatos: dirige, escribe y es directora de fotografía, sin encasillarse en un solo estilo. Ella misma dice que dirigir implica siempre explorar y asumir riesgos creativos, dirección, aunque siempre ha mantenido ambas disciplinas presentes en su trabajo.
            </p>
        </div>
      </section>
      
      {/* Bloque 4: "Norte" y la mirada personal */}
      <section className={`${styles.block} ${styles.philosophyBlock}`}>
          <div className={styles.textWrapper}>
              <p className={styles.paragraph}>
                  Su documental Norte es probablemente su obra más personal. Retrata la lucha de su hermano Rodrigo contra las adicciones y cómo este problema afecta a toda la familia. Lo curioso es que Norte no partió de una idea emotiva, sino que comenzó como un ejercicio casi objetivo, pero al filmar su propia vida, todo cambió. Natalia reconoce que encender la cámara cuando sentía dolor o enojo fue un proceso difícil pero sanador. Ella misma dice que no había un guion, que la historia la fue guiando su hermano y los momentos familiares. Su motivación principal fue mostrar las adicciones desde el amor, lejos del juicio moral.
              </p>
          </div>
      </section>

      {/* Bloque 5: "Apnea" y la visión de personajes */}
      <section className={`${styles.block} ${styles.impactBlock}`}>
        <div className={styles.textWrapper}>
          <p className={`${styles.paragraph}`}>
              Con Apnea, Natalia quiso romper con la visión simplista de los personajes femeninos en el cine. La protagonista, Renata, es una joven que atraviesa una relación tóxica con una mujer mayor, pero lo interesante es que Renata tiene agencia y también comete errores. Para Natalia, los personajes femeninos deben tener defectos y contradicciones, porque ahí radica su humanidad. Ganar dos premios Ariel por Norte y Apnea la impulsó a seguir navegando entre géneros, ya que no quiere ser etiquetada como directora de documental o de ficción.
              <br /><br />
              Ella misma lo resume así: "dirigir tiene que ver con explorar, con mantener la incertidumbre viva".
          </p>
        </div>
      </section>
      
      {/* Bloque 6: Footer */}
      <section className={styles.footerBlock} />

    </div>
  );
};

export default NataliaBermudezPage;