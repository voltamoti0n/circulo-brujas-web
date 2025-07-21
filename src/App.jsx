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

// Importaciones de Brujas del Séptimo Arte
import AnaTsuyebPage from './pages/BrujasDelSeptimoArtePage/AnaTsuyebPage.jsx';
import LilaAvilesPage from './pages/BrujasDelSeptimoArtePage/LilaAvilesPage.jsx';
import MichelleGarzaPage from './pages/BrujasDelSeptimoArtePage/MichelleGarzaPage.jsx';
import AstridRonderoPage from './pages/BrujasDelSeptimoArtePage/AstridRonderoPage.jsx';
import AngelesCruzPage from './pages/BrujasDelSeptimoArtePage/AngelesCruzPage.jsx';
import NataliaBermudezPage from './pages/BrujasDelSeptimoArtePage/NataliaBermudezPage.jsx';
import IssaLopezPage from './pages/BrujasDelSeptimoArtePage/IssaLopezPage.jsx';

// Importaciones de Grimorio de Historias
import AlquimistasPage from './pages/GrimorioPage/AlquimistasPage.jsx';
import GuardianasPage from './pages/GrimorioPage/GuardianasPage.jsx';
import CuranderasPage from './pages/GrimorioPage/CuranderasPage.jsx';
import LectorasPage from './pages/GrimorioPage/LectorasPage.jsx';

// Importaciones de Crónicas sobre Amate
import DiezDatosPage from './pages/CronicasAmatePage/DiezDatosPage.jsx';
import SinOportunidadesPage from './pages/CronicasAmatePage/SinOportunidadesPage.jsx';
import ModaSimbologiaPage from './pages/CronicasAmatePage/ModaSimbologiaPage.jsx';
import LenteRosaPage from './pages/CronicasAmatePage/LenteRosaPage.jsx';
import DisenoVestuarioPage from './pages/CronicasAmatePage/DisenoVestuarioPage.jsx';

// Importaciones de Hechizos para Conocer
import ColorHistoriasPage from './pages/HechizosParaConocerPage/ColorHistoriasPage.jsx';
import MundoAudiovisualPage from './pages/HechizosParaConocerPage/MundoAudiovisualPage.jsx';
import NarrarHistoriasPage from './pages/HechizosParaConocerPage/NarrarHistoriasPage.jsx';
import CapturaInstantePage from './pages/HechizosParaConocerPage/CapturaInstantePage.jsx';
import EsquemaRembrandtPage from './pages/HechizosParaConocerPage/EsquemaRembrandtPage.jsx';
import MatchCutPage from './pages/HechizosParaConocerPage/MatchCutPage.jsx';


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
  
  const playAppReadySound = useSound('/assets/sounds/page_transition_sound.wav');
  const initialLoadDone = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && !initialLoadDone.current) {
      if (playAppReadySound) {
        playAppReadySound();
      }
      initialLoadDone.current = true;
    }
  }, [isLoading, playAppReadySound]);

  if (isLoading) {
    return <Preloader videoSrc="/assets/images/backgrounds/varita-magica.mp4" />;
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<AnimatedPage><Home /></AnimatedPage>} />
          
          <Route path="brujas-del-septimo-arte" element={<AnimatedPage><BrujasDelSeptimoArtePage /></AnimatedPage>} />
          <Route path="brujas-del-septimo-arte/ana-tsuyeb" element={<AnimatedPage><AnaTsuyebPage /></AnimatedPage>} />
          <Route path="brujas-del-septimo-arte/lila-aviles" element={<AnimatedPage><LilaAvilesPage /></AnimatedPage>} />
          <Route path="brujas-del-septimo-arte/michelle-garza-cervera" element={<AnimatedPage><MichelleGarzaPage /></AnimatedPage>} />
          <Route path="brujas-del-septimo-arte/astrid-rondero" element={<AnimatedPage><AstridRonderoPage /></AnimatedPage>} />
          <Route path="brujas-del-septimo-arte/angeles-cruz" element={<AnimatedPage><AngelesCruzPage /></AnimatedPage>} />
          <Route path="brujas-del-septimo-arte/natalia-bermudez" element={<AnimatedPage><NataliaBermudezPage /></AnimatedPage>} />
          <Route path="brujas-del-septimo-arte/issa-lopez" element={<AnimatedPage><IssaLopezPage /></AnimatedPage>} />
          
          <Route path="ojo-de-loca" element={<AnimatedPage><OjoDeLocaPage /></AnimatedPage>} />

          <Route path="grimorio-de-historias" element={<AnimatedPage><GrimorioPage /></AnimatedPage>} />
          <Route path="grimorio-de-historias/alquimistas" element={<AnimatedPage><AlquimistasPage /></AnimatedPage>} />
          <Route path="grimorio-de-historias/guardianas" element={<AnimatedPage><GuardianasPage /></AnimatedPage>} />
          <Route path="grimorio-de-historias/curanderas" element={<AnimatedPage><CuranderasPage /></AnimatedPage>} />
          <Route path="grimorio-de-historias/lectoras" element={<AnimatedPage><LectorasPage /></AnimatedPage>} />
          
          <Route path="cronicas-sobre-amate" element={<AnimatedPage><CronicasAmatePage /></AnimatedPage>} />
          <Route path="cronicas-sobre-amate/diez-datos-personajes" element={<AnimatedPage><DiezDatosPage /></AnimatedPage>} />
          <Route path="cronicas-sobre-amate/sin-oportunidades" element={<AnimatedPage><SinOportunidadesPage /></AnimatedPage>} />
          <Route path="cronicas-sobre-amate/moda-simbologia" element={<AnimatedPage><ModaSimbologiaPage /></AnimatedPage>} />
          <Route path="cronicas-sobre-amate/lente-rosa" element={<AnimatedPage><LenteRosaPage /></AnimatedPage>} />
          <Route path="cronicas-sobre-amate/diseno-vestuario" element={<AnimatedPage><DisenoVestuarioPage /></AnimatedPage>} />

          <Route path="hechizos-para-conocer" element={<AnimatedPage><HechizosParaConocerPage /></AnimatedPage>} />
          <Route path="hechizos-para-conocer/color-historias" element={<AnimatedPage><ColorHistoriasPage /></AnimatedPage>} />
          <Route path="hechizos-para-conocer/mundo-audiovisual" element={<AnimatedPage><MundoAudiovisualPage /></AnimatedPage>} />
          <Route path="hechizos-para-conocer/narrar-historias" element={<AnimatedPage><NarrarHistoriasPage /></AnimatedPage>} />
          <Route path="hechizos-para-conocer/captura-instante" element={<AnimatedPage><CapturaInstantePage /></AnimatedPage>} />
          <Route path="hechizos-para-conocer/esquema-rembrandt" element={<AnimatedPage><EsquemaRembrandtPage /></AnimatedPage>} />
          <Route path="hechizos-para-conocer/match-cut" element={<AnimatedPage><MatchCutPage /></AnimatedPage>} />
          
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