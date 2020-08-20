import React from 'react';
import PropTypes from 'prop-types';

import './list_item_component.scss';

const ListItemComponent = ({ text }) => {
  return (
    <div className="list-item-component">
      <div className="list-item-component__circle" />
      <div className="list-item-component__text">{text}</div>
    </div>
  );
};

ListItemComponent.propTypes = {
  text: PropTypes.string,
};

export default ListItemComponent;
