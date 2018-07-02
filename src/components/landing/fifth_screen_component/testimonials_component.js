import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import TestimonialsItem from './testimonials_item';
import TestimonialsButtonComponent from './testimonials_button_component';

import './testimonials_component.scss';

const MOBILE_RESOLUTION = 320;


export default class TestimonialsComponent extends Component {
  static propTypes = {
    testimonials: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      photoUrl: PropTypes.string,
      position: PropTypes.string,
      text: PropTypes.string
    }))
  }

  constructor(props) {
    super(props);

    this.state = {
      currentPosition: 0,
      sliderMode: this.isMobile()
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkResolution);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkResolution);
  }

  checkResolution = () => this.setState({ sliderMode: this.isMobile() })

  isMobile = () => window.innerWidth <= MOBILE_RESOLUTION;

  handleButtonClick = (number) => () => this.setState({ currentPosition: parseInt(number, 10) });

  render() {
    const { testimonials } = this.props;
    const { sliderMode, currentPosition } = this.state;

    return (
      <div className="testimonials-component">
        <div className="testimonials-component__items">
          {!sliderMode && map(testimonials, (item, index) => <TestimonialsItem key={index} {...item} />) }
          {sliderMode && <TestimonialsItem {...testimonials[currentPosition]} /> }
        </div>
        {sliderMode &&
          <div className="testimonials-component__buttons">
            {map(testimonials, (_, index) => {
              return (
                <TestimonialsButtonComponent
                  active={currentPosition === index}
                  key={index}
                  position={index}
                  onClick={this.handleButtonClick}
                />);
            })}
          </div>
        }
      </div>
    );
  }
}
