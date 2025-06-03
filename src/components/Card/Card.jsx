// src/components/Card/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import cardStyles from './Card.module.css'; // Importa los módulos CSS

const Card = ({ title, imageUrl }) => {
  return (
    <div className={cardStyles.card}>
      <img src={imageUrl} alt={title} className={cardStyles.cardImage} />
      <div className={cardStyles.titleOverlay}>
        <h3 className={cardStyles.cardTitle}>{title}</h3>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;