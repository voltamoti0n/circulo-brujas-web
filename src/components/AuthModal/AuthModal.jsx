import React, { useState } from 'react';
import styles from './AuthModal.module.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registro:', { name, email });
    setSubmissionMessage(`¡Gracias por registrarte, ${name}! Hemos enviado un correo a ${email}.`);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setSubmissionMessage('');
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButtonIcon} onClick={handleClose}>×</button>
        
        {!isSubmitted ? (
          <>
            <div className={styles.logoHeaderArea}>
              <img src="/assets/images/backgrounds/logo.png" alt="Círculo de Brujas" className={styles.mainLogo} />
              <p className={styles.tagline}>Narrativas rebeldes, cine que transforma</p>
            </div>
            <form className={styles.authForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="modal-name" className={styles.formLabel}>Nombre:</label>
                <input 
                  type="text" 
                  id="modal-name" 
                  name="name"
                  className={styles.formInput}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="modal-email" className={styles.formLabel}>e-mail:</label>
                <input 
                  type="email" 
                  id="modal-email" 
                  name="email"
                  className={styles.formInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  placeholder="tu_correo@ejemplo.com"
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Ingresar
              </button>
            </form>
          </>
        ) : (
          <div className={styles.confirmationMessage}>
            <img src="/assets/images/backgrounds/logo.png" alt="Círculo de Brujas" className={styles.mainLogoConfirm} />
            <p>{submissionMessage}</p>
          </div>
        )}
         <div className={styles.socialLinksFooter}>
            {/* SECCIÓN MODIFICADA CON ENLACES */}
            <a href="https://www.instagram.com/circulodebrujas_/" target="_blank" rel="noopener noreferrer">Ig @circulodebrujas</a>
            <a href="https://www.tiktok.com/@circulodbrujas?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">TikTok @circulodebrujas</a>
            <a href="https://www.youtube.com/channel/UCmKu9W_AxmXDShXXv36wgDg" target="_blank" rel="noopener noreferrer">Youtube Círculo D Brujas</a>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;