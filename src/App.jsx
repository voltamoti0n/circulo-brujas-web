// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
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

import useSound from './hooks/useSound';
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

// PlaceholderPage como estaba antes, envuelto en AnimatedPage si se usa
const PlaceholderPage = ({ title }) => (
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
  
  // Sonido para transición DESPUÉS de la carga inicial
  const playAppReadySound = useSound('/assets/sounds/page_transition_sound.wav'); // Renombrado para claridad
  const initialLoadDone = useRef(false); // Para rastrear si la carga inicial ya ocurrió

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  // Efecto para el sonido DESPUÉS de la carga inicial
  useEffect(() => {
    // Si isLoading acaba de cambiar de true a false Y es la primera vez que esto sucede
    if (!isLoading && !initialLoadDone.current) {
      if (playAppReadySound) {
        playAppReadySound();
      }
      initialLoadDone.current = true; // Marcar que el sonido de carga inicial ya se reprodujo
    }
    // Ya no necesitamos el efecto que dependía de location.pathname para el sonido
  }, [isLoading, playAppReadySound]); // Depende de isLoading y la función de sonido

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
          
          <Route path="*" element={<AnimatedPage><PlaceholderPage title="404 - Página No Encontrada" /></AnimatedPage>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;