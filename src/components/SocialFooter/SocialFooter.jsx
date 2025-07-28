// src/components/SocialFooter/SocialFooter.jsx
import React from 'react';
import styles from './SocialFooter.module.css';

const SocialFooter = () => {
  return (
    <>
      <a 
        href="https://www.instagram.com/circulodebrujas_/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${styles.socialLink} ${styles.instagramLink}`}
      >
        Ig @circulodebrujas
      </a>
      <a 
        href="https://www.tiktok.com/@circulodbrujas?is_from_webapp=1&sender_device=pc" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${styles.socialLink} ${styles.tiktokLink}`}
      >
        TikTok @circulodebrujas
      </a>
      <a 
        href="https://youtube.com/channel/UCmKu9W_AxmXDShXXv36wgDg" 
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