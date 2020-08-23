import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../common/icons/counter';

import './testimonials_count.scss';

const TestimonialsCountComponent = ({ onClick, active }) => {
  return (
    <div
      className="testimonials-count"
      onClick={onClick}
      role="button"
      tabIndex="0"
      onKeyDown={onClick}
    >
      <Icon active={active} />
    </div>
  );
};

TestimonialsCountComponent.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default TestimonialsCountComponent;
