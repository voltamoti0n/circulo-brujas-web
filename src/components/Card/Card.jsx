import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import cardStyles from './Card.module.css';

const Card = ({ title, imageUrl, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div 
      className={cardStyles.card} 
      onClick={handleClick} 
      role="button" 
      tabIndex={0} 
      onKeyPress={(e) => e.key === 'Enter' && handleClick()}
    >
      {/* Ya no hay imageWrapper, la imagen y el overlay son hijos directos de .card */}
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
  path: PropTypes.string,
};

export default Card;