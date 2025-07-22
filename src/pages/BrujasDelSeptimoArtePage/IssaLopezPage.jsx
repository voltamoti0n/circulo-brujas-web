// src/pages/BrujasDelSeptimoArtePage/IssaLopezPage.jsx
import React from 'react';
import styles from './IssaLopezPage.module.css';

const IssaLopezPage = () => {
  return (
    <div className={styles.pageContainer}>
      
      {/* Bloque 1: Cabecera */}
      <section className={`${styles.block} ${styles.headerBlock}`}>
        <h1 className={styles.title}>Issa López</h1>
      </section>

      {/* Bloque 2: Introducción */}
      <section className={`${styles.block} ${styles.introBlock}`}>
        <div className={styles.textWrapper}>
          <p className={`${styles.paragraph} ${styles.textBlack}`}>
            Issa López nació en Ciudad de México, en un hogar atravesado por la pérdida y la imaginación. Su madre murió cuando ella tenía ocho años, y fue criada por su padre, un hombre que le heredó el amor por la literatura, los cómics y el cine de terror. Desde pequeña, Issa entendió que contar historias podía ser una forma de sobrevivir.
            <br /><br />
            Estudió en la Facultad de Filosofía y Letras de la UNAM y más tarde en el Centro de Capacitación Cinematográfica (CCC), donde encontró su vocación como guionista y directora. Su mirada, marcada por el dolor personal y la sensibilidad hacia las infancias, se transformaría con los años en una de las voces más singulares del cine mexicano contemporáneo.
          </p>
        </div>
      </section>

      {/* Bloque 3: Trayectoria y "Vuelven" */}
      <section className={`${styles.block} ${styles.storyBlock}`}>
        <div className={styles.textWrapper}>
            <p className={styles.paragraph}>
                Durante varios años, Issa escribió y dirigió películas dentro del cine comercial, como Ladies Night (2003) o Efectos Secundarios (2006). Aunque estas cintas le dieron visibilidad en la industria, no reflejaban completamente su voz ni su estilo narrativo.
                <br /><br />
                Todo cambió con Vuelven (Tigers Are Not Afraid, 2017), un largometraje que mezcla el realismo social con el terror fantástico, abordando la violencia del narcotráfico a través de la mirada de niños huérfanos. Sin el apoyo de grandes productoras, Issa financió la cinta de forma independiente y logró estrenarla en festivales como Screamfest LA, Sitges y Toronto International Film Festival, donde fue ovacionada.
                <br /><br />
                Vuelven ganó múltiples premios, incluyendo Mejor Película, Mejor Dirección, Mejor Guion y Mejor Actuación Infantil. En México, recibió el Premio Ariel a Mejor Guion Original en 2018. La cinta fue elogiada por Stephen King y Guillermo del Toro, consolidando a Issa como una cineasta imprescindible dentro y fuera del país.
            </p>
        </div>
      </section>
      
      {/* Bloque 4: Salto Internacional y "True Detective" */}
      <section className={`${styles.block} ${styles.philosophyBlock}`}>
          <div className={styles.textWrapper}>
              <p className={styles.paragraph}>
                  El éxito de Vuelven le abrió las puertas al panorama internacional. En 2024, Issa López hizo historia al convertirse en la primera mujer en escribir y dirigir una temporada completa de True Detective, la serie de HBO conocida por su tono oscuro y existencialista. Night Country, protagonizada por Jodie Foster, fue recibida con entusiasmo por algunos sectores y con críticas por otros, pero demostró que Issa podía moverse con soltura en narrativas complejas, mezclando crimen, política, espiritualidad y horror.
                  <br /><br />
                  Actualmente desarrolla nuevos proyectos con estudios como Blumhouse, Searchlight Pictures y New Regency, incluyendo un western sobrenatural. Además, ha sido reconocida por Variety como una de las 10 Latinxs to Watch, y en 2020 fue homenajeada por el Festival Internacional de Cine de Guanajuato por su trayectoria.
              </p>
          </div>
      </section>

      {/* Bloque 5: Proceso Creativo y Filosofía */}
      <section className={`${styles.block} ${styles.impactBlock}`}>
        <div className={styles.textWrapper}>
          <p className={`${styles.paragraph} ${styles.textBlack}`}>
              Issa López ha dicho en múltiples entrevistas que su proceso creativo parte de la disciplina. Escribe todos los días, y muchas veces una historia nace de una sola imagen que no puede sacarse de la cabeza. A partir de ahí, construye emociones, personajes y tramas que conectan lo personal con lo colectivo.
              <br /><br />
              Su cine no usa el horror como simple entretenimiento: lo convierte en herramienta para hablar del duelo, la pérdida, la infancia rota y la búsqueda de justicia. Le interesa provocar más que complacer, y encontrar belleza incluso en lo más oscuro.
              <br /><br />
              Su mirada íntima, sensible y a veces brutal, ha abierto caminos en géneros tradicionalmente masculinos como el terror, el thriller y el western.
              <br /><br />
              Su obra no busca ser cómoda, sino necesaria. Nos recuerda que el miedo también puede ser poético, que los fantasmas tienen algo que decir, y que hay historias que merecen contarse, aunque duelan.
          </p>
        </div>
      </section>
      
      {/* Bloque 6: Footer */}
      <section className={styles.footerBlock} />

    </div>
  );
};

export default IssaLopezPage;