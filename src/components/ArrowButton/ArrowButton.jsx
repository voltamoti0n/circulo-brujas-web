import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ArrowButton.module.css'; // Puedes crear este archivo CSS Module

const ArrowButton = ({ direction, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {direction === 'left' ? <ChevronLeft size={32} strokeWidth={3} /> : <ChevronRight size={32} strokeWidth={3} />}
    </button>
  );
};

export default ArrowButton;