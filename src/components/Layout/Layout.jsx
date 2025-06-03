import React, { useState } from 'react'; // Importar useState
import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.css';
import AuthModal from '../AuthModal/AuthModal'; // Importar el modal

const Layout = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false); // Estado para el modal

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <div className={styles.layoutContainer}>
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
            {/* Botón Regístrate ahora abre el modal */}
            <li><button onClick={openAuthModal}>Regístrate</button></li> 
          </ul>
        </nav>
      </header>
      <main className={styles.pageContent}>
        <Outlet /> 
      </main>
      
      {/* Renderizar el modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default Layout;