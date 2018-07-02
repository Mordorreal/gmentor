import React from 'react';
import PropTypes from 'prop-types';

import './label_component.scss';

const LabelComponent = ({ text, children }) => {
  if (!text) {
    return children;
  }

  return (
    <label className="label-component">
      {text}
      {children}
    </label>
  );
};

LabelComponent.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};

export default LabelComponent;
