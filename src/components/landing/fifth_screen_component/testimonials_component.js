import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import TestimonialsItem from './testimonials_item';
import TestimonialsCount from './testimonials_count';

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

  state = {
    index: 0,
  };

  componentDidMount(_) {
    setInterval(() => this.nextIndex(), 4000);
  }

  nextIndex = () => {
    let nextI = this.state.index + 1;
    if (nextI >= this.props.testimonials.length) {
      nextI = 0;
    }

    this.setState({ index: nextI });
  };

  testimonials = map(this.props.testimonials, (item, index) => (
    <TestimonialsItem key={index} {...item} />
  ));

  counters = () =>
    map(this.props.testimonials, (_, index) => (
      <TestimonialsCount
        key={index}
        active={this.state.index === index}
        onClick={() => this.setState({ index: index })}
      />
    ));

  render() {
    const { index } = this.state;

    return (
      <div className="testimonials-component">
        <div className="testimonials-component__items">
          {this.testimonials[index]}
        </div>
        <div className="testimonials-component__counters">
          {this.counters()}
        </div>
      </div>
    );
  }
}
