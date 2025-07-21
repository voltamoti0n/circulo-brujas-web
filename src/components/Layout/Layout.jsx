import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom'; // Importar useLocation
import styles from './Layout.module.css';
import AuthModal from '../AuthModal/AuthModal';

const Layout = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation(); // Hook para obtener la ubicación actual

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  // Verificamos si la ruta actual es de una de las secciones con fondo blanco
  const needsHeaderBackground = 
    location.pathname.startsWith('/cronicas-sobre-amate/') || 
    location.pathname.startsWith('/hechizos-para-conocer/');

  return (
    <div className={styles.layoutContainer}>
      {/* Renderizamos el fondo del header aquí, fuera del Outlet y su animación */}
      {needsHeaderBackground && <div className={styles.headerBackground}></div>}

      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Link to="/">
            <img src="/assets/images/backgrounds/logo-inicial.png" alt="CB Logo" className={styles.cbLogo} />
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/caldero-conocimiento">CALDERO DE CONOCIMIENTO</Link></li>
            <li><Link to="/unete-casa">ÚNETE A UNA CASA</Link></li>
            <li><Link to="/explora-librero">EXPLORA EL LIBRERO MÁGICO</Link></li>
            <li><button onClick={openAuthModal}>Regístrate</button></li> 
          </ul>
        </nav>
      </header>
      <main className={styles.pageContent}>
        <Outlet /> 
      </main>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default Layout;