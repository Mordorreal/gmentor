import React from 'react';
import PropTypes from 'prop-types';

import './testimonials_item.scss';

const TestimonialsItemComponent = ({ photoUrl, name, position, text }) => {
  return (
    <div className="testimonials-item">
      <div className="testimonials-item__photo">
        <img src={photoUrl} alt={name} />
      </div>
      <div className="testimonials-item__name">{name}</div>
      <div className="testimonials-item__position">{position}</div>
      <div className="testimonials-item__text">{text}</div>
    </div>
  );
};

TestimonialsItemComponent.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  position: PropTypes.string,
  text: PropTypes.string,
};

export default TestimonialsItemComponent;
