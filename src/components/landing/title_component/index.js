import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './title_component.scss';

const TitleComponent = ({ title, subtitle }) => {
  const subtitleClasses = classnames({
    'title-component__subtitle': true,
  });

  return (
    <div className="title-component">
      <div className="title-component__title">{title}</div>
      <div className={subtitleClasses}>{subtitle}</div>
    </div>
  );
};

TitleComponent.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default TitleComponent;
