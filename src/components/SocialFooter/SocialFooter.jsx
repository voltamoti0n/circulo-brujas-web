// src/components/SocialFooter/SocialFooter.jsx
import React from 'react';
import styles from './SocialFooter.module.css';

const SocialFooter = () => {
  return (
    <>
      <a 
        href="https://www.instagram.com/circulodebrujas" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${styles.socialLink} ${styles.instagramLink}`}
      >
        Ig @circulodebrujas
      </a>
      <a 
        href="https://www.tiktok.com/@circulodebrujas" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${styles.socialLink} ${styles.tiktokLink}`}
      >
        TikTok @circulodebrujas
      </a>
      <a 
        href="https://www.youtube.com/@CirculoDBrujas" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${styles.socialLink} ${styles.youtubeLink}`}
      >
        Youtube Círculo D Brujas
      </a>
    </>
  );
};

export default SocialFooter;