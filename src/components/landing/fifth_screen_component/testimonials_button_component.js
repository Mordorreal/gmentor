import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './testimonials_button_component.scss';

const TestimonialsButtonComponent = ({ active, position, onClick }) => {
  const buttonClasses = classnames({
    'testimonials-button-component': true,
    'testimonials-button-component_active': active,
  });

  return <div className={buttonClasses} onClick={onClick(position)} />;
};

TestimonialsButtonComponent.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  position: PropTypes.number,
};

export default TestimonialsButtonComponent;
