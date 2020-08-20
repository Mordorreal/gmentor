import React from 'react';
import PropTypes from 'prop-types';

import './text_block_component.scss';

const TextBlockComponent = ({ title, subtitle, img }) => {
  return (
    <div className="text-block-component">
      <div className="text-block-component__image">{img}</div>
      <div className="text-block-component__text-container">
        <div className="text-block-component__title">{title}</div>
        <div className="text-block-component__subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

TextBlockComponent.propTypes = {
  img: PropTypes.node,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default TextBlockComponent;
