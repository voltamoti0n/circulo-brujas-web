// src/App.jsx
import React, { useState, useEffect, useRef } from 'react'; // Importar useRef
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import BrujasDelSeptimoArtePage from './pages/BrujasDelSeptimoArtePage/BrujasDelSeptimoArtePage.jsx';
import OjoDeLocaPage from './pages/OjoDeLocaPage/OjoDeLocaPage.jsx';
import GrimorioPage from './pages/GrimorioPage/GrimorioPage.jsx';
import CronicasAmatePage from './pages/CronicasAmatePage/CronicasAmatePage.jsx';
import HechizosParaConocerPage from './pages/HechizosParaConocerPage/HechizosParaConocerPage.jsx';
import Preloader from './components/Preloader/Preloader.jsx';
import CalderoConocimientoPage from './pages/CalderoConocimientoPage/CalderoConocimientoPage.jsx';
import UneteCasaPage from './pages/UneteCasaPage/UneteCasaPage.jsx';
import ExploraLibreroPage from './pages/ExploraLibreroPage/ExploraLibreroPage.jsx';

import useSound from './hooks/useSound'; // Importar tu hook useSound
import './App.css';

const pageVariants = {
  initial: { opacity: 0, x: "60vw", scale: 0.97 },
  in: { opacity: 1, x: 0, scale: 1 },
  out: { opacity: 0, x: "-60vw", scale: 1.03 }
};

const pageTransition = { type: "tween", ease: "anticipate", duration: 0.65 };

const AnimatedPage = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}
  >
    {children}
  </motion.div>
);

const PlaceholderPage = ({ title }) => ( /* Este componente ya no se usa si todas las rutas tienen su página */
  <AnimatedPage>
    <div style={{ padding: '100px 20px', textAlign: 'center', color: 'white', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>{title || 'Página en Construcción'}</h1>
      <p>Esta sección estará disponible próximamente.</p>
    </div>
  </AnimatedPage>
);


function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  // Punto 2: Sonido para transición de página
  // Asegúrate de tener un sonido adecuado en esta ruta (o la que elijas)
  const playPageTransitionSound = useSound('/assets/sounds/transicion.wav'); // CAMBIA ESTA RUTA Y NOMBRE DE ARCHIVO
  const firstLoadRef = useRef(true); // Para evitar sonido en la carga inicial

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  // Efecto para el sonido de transición de página
  useEffect(() => {
    if (firstLoadRef.current) {
      firstLoadRef.current = false; // Marcar que la primera carga ya pasó
      return;
    }
    // Solo reproducir si no es la primera carga
    if (playPageTransitionSound && !isLoading) {
        playPageTransitionSound();
    }
  }, [location.pathname, playPageTransitionSound, isLoading]); // Se ejecuta cuando cambia la ruta y no estamos cargando

  if (isLoading) {
    return <Preloader videoSrc="/assets/images/backgrounds/varita-magica.mp4" />;
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="brujas-del-septimo-arte" element={<AnimatedPage><BrujasDelSeptimoArtePage /></AnimatedPage>} />
          <Route path="ojo-de-loca" element={<AnimatedPage><OjoDeLocaPage /></AnimatedPage>} />
          <Route path="grimorio-de-historias" element={<AnimatedPage><GrimorioPage /></AnimatedPage>} />
          <Route path="cronicas-sobre-amate" element={<AnimatedPage><CronicasAmatePage /></AnimatedPage>} />
          <Route path="hechizos-para-conocer" element={<AnimatedPage><HechizosParaConocerPage /></AnimatedPage>} />
          
          <Route path="caldero-conocimiento" element={<AnimatedPage><CalderoConocimientoPage /></AnimatedPage>} />
          <Route path="unete-casa" element={<AnimatedPage><UneteCasaPage /></AnimatedPage>} />
          <Route path="explora-librero" element={<AnimatedPage><ExploraLibreroPage /></AnimatedPage>} />
          
          {/* Si tienes una página 404 específica, también envuélvela */}
          <Route path="*" element={<AnimatedPage><PlaceholderPage title="404 - Página No Encontrada" /></AnimatedPage>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;