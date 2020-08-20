import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import TestimonialsItem from './testimonials_item';

import './testimonials_component.scss';

export default class TestimonialsComponent extends Component {
  static propTypes = {
    testimonials: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        photoUrl: PropTypes.string,
        position: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  };

  render() {
    const { testimonials } = this.props;

    return (
      <div className="testimonials-component">
        <div className="testimonials-component__items">
          {map(testimonials, (item, index) => (
            <TestimonialsItem key={index} {...item} />
          ))}
        </div>
      </div>
    );
  }
}
