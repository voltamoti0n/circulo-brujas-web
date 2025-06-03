// src/components/ArrowButton/ArrowButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArrowButton.module.css';

const ArrowButton = ({ direction, onClick }) => {
  return (
    <button
      className={`${styles.arrowButton} ${direction === 'left' ? styles.left : styles.right}`}
      onClick={onClick}
      aria-label={direction === 'left' ? 'Previous Card' : 'Next Card'}
    />
  );
};

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArrowButton;