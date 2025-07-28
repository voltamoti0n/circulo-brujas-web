// src/pages/BrujasDelSeptimoArtePage/LilaAvilesPage.jsx
import React from 'react';
import styles from './LilaAvilesPage.module.css';
import SocialFooter from '../../components/SocialFooter/SocialFooter';

const LilaAvilesPage = () => {
  return (
    <div className={styles.pageContainer}>
      
      {/* Bloque 1: Cabecera */}
      <section className={`${styles.block} ${styles.headerBlock}`}>
        <h1 className={styles.title}>Lila Avilés</h1>
      </section>

      {/* Bloque 2: Introducción */}
      <section className={`${styles.block} ${styles.introBlock}`}>
        <div className={styles.textWrapper}>
          <p className={`${styles.paragraph} ${styles.textBlack}`}>
            Lila Avilés nació en 1982 en la Ciudad de México. Su historia con el arte comenzó temprano, influenciada por fotografías familiares y los relatos de su tía "Cuquita" sobre los embarcos de sus abuelos marineros. Desde pequeña le gustaba contar historias, ya fuera actuando o dirigiendo sus propios mundos. Aunque sus primeros pasos fueron como actriz en televisión y cine (participó en producciones como "El Pantera", Drenaje profundo y películas como "Ella es Ramona" y "Alicia en el país de María"), su verdadera pasión estaba del otro lado de la cámara.
            <br /><br />
            Estudió artes escénicas en Casazul y posteriormente se especializó en dirección y guion. Durante seis años colaboró con La Máquina de Teatro y fue ahí donde comenzó a construir su mirada artística: íntima, sensible, profundamente humana.
          </p>
        </div>
      </section>

      {/* Bloque 3: "La camarista" */}
      <section className={`${styles.block} ${styles.storyBlock}`}>
        <div className={styles.textWrapper}>
            <p className={styles.paragraph}>
                En 2018, Lila debutó con La camarista, una película que narra la vida de Eve, una trabajadora de limpieza en un hotel de lujo. Con apenas 17 días de rodaje, el filme sorprendió al mundo por su honestidad y sutileza. Fue seleccionada por México para representar al país en los Oscar y recibió más de 30 premios internacionales, incluyendo el Ariel a Mejor Ópera Prima. La cinta nació de una obra de teatro escrita por la propia Avilés, lo cual demuestra cómo su origen teatral permea su narrativa cinematográfica.
                <br /><br />
                Más allá de los galardones, lo que convirtió a La camarista en una obra tan poderosa fue su mirada: Lila no juzga ni dramatiza en exceso, sino que observa. Y en esa observación encuentra poesía, dignidad, rutina y deseo.
            </p>
        </div>
      </section>
      
      {/* Bloque 4: "Tótem" con estilo especial */}
      <section className={`${styles.block} ${styles.philosophyBlock}`}>
          <div className={`${styles.textWrapper} ${styles.totemBlock}`}>
              <p className={`${styles.paragraph} ${styles.textBlack}`}>
                  <strong className={styles.boldTextBlack}>"Tótem": la vida a través de los ojos de una niña.</strong>
                  Su segunda película, "Tótem", es una evolución emocional y estilística. Aunque es muy diferente en su estructura a La camarista, comparte el mismo latido: mirar desde dentro. La historia gira en torno a Sol, una niña de siete años que vive un día crucial en casa de su abuela mientras se organiza una fiesta para su padre enfermo. La cinta fue seleccionada para representar a México en los Premios Oscar 2024, y ha ganado premios en Berlín, Beijing, Perú y más de 50 festivales internacionales.
                  <br /><br />
                  Lo más profundo de "Tótem" no está en la anécdota, sino en la sensibilidad con que Lila retrata a una familia mexicana común, donde conviven lo racional, lo mágico, lo cotidiano y lo caótico. Es una película coral, filmada en una sola locación, donde cada personaje tiene su lugar, su tono, su verdad.
                  <br /><br />
                  La inspiración de "Tótem" fue personal: la muerte del padre de su hija cuando ella tenía siete años. Avilés confesó que esta pérdida la marcó profundamente y le dio el impulso para escribir una película que, aunque íntima, toca temas universales como la infancia, el duelo, la familia y el tiempo.
              </p>
          </div>
      </section>

      {/* Bloque 5: Estilo y Filosofía */}
      <section className={`${styles.block} ${styles.impactBlock}`}>
        <div className={styles.textWrapper}>
          <p className={`${styles.paragraph} ${styles.textBlack}`}>
              Para Lila Avilés, hacer cine es un acto de amor, juego y responsabilidad. Así lo ha expresado en distintas entrevistas, donde reconoce que la maternidad cambió por completo su forma de mirar el mundo. Criar a su hija le otorgó herramientas emocionales profundas que hoy se reflejan en cada escena, en cada diálogo, en cada encuadre. "Uno no es el centro del mundo", ha dicho. "Al cuidar, te haces más humilde". Esa humildad se convierte en una clave de su cine: no parte de la grandilocuencia, sino de la sensibilidad.
              <br /><br />
              Su proceso de creación es orgánico. No le interesan los métodos rígidos ni los ensayos eternos. Filma con una energía que ella misma describe como "rápida y furiosa", confiando en la intuición y buscando siempre capturar el "sentido de verdad", esa honestidad irrepetible que nace del momento y que no se puede forzar. Para Avilés, el cine debe sentirse vivo y eso se nota en la forma en que construye escenas: llenas de interrupciones, silencios, caos cotidiano, y personajes que hablan como lo hacemos en la vida real.
              <br /><br />
              Lila no busca deslumbrar, busca conectar. Tiene claro que su cine es mínimo, íntimo. delicado, pero no por eso menos poderoso. "Si me voy, esto es lo que le dejo a mi hija", dijo sobre Tótem, reafirmando que sus películas son también legado, memoria, y una forma de permanecer. No necesita hacer la historia más espectacular ni original: necesita que tenga alma.
              <br /><br />
              Forma parte de una generación de cineastas mexicanos que está abriendo camino con historias que no necesitan gritar para dejar huella. Su mirada habita lo invisible, lo emocional, lo que otros prefieren no mostrar. Pero ella lo observa todo, lo escucha con atención y lo transforma en arte.
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

export default LilaAvilesPage;