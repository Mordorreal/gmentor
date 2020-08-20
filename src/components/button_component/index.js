import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SpinnerComponent from '../spinner_component';

import './button_component.scss';

class ButtonComponent extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.node, PropTypes.string])
      ),
    ]),
    className: PropTypes.string,
    isBlue: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isGreen: PropTypes.bool,
    isLarge: PropTypes.bool,
    isLoading: PropTypes.bool,
    isOrange: PropTypes.bool,
    isRed: PropTypes.bool,
    isSmall: PropTypes.bool,
    isWhite: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
  };

  handleOnClick = () => {
    const { isLoading, isDisabled, onClick } = this.props;

    !isDisabled && !isLoading && onClick();
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === 'Space') {
      this.handleOnClick();
    }
  };

  render() {
    const {
      children,
      className,
      isBlue,
      isDisabled,
      isGreen,
      isLarge,
      isLoading,
      isOrange,
      isRed,
      isSmall,
      isWhite,
    } = this.props;

    const classesButton = classNames({
      button: true,
      'button_is-green': !isDisabled && isGreen,
      'button_is-red': !isDisabled && isRed,
      'button_is-blue': !isDisabled && isBlue,
      'button_is-primary': !isDisabled && isOrange,
      'button_is-white': !isDisabled && isWhite,
      'button_is-disabled': isDisabled,
      'button_is-loading': isLoading,
      'button_is-normal': !isLarge && !isSmall,
      'button_is-small': isSmall,
      [`${className}`]: className,
    });

    return (
      <button
        className={classesButton}
        disabled={isDisabled}
        onClick={this.handleOnClick}
        onKeyDown={this.handleKeyDown}
        type="button"
      >
        {isLoading && <SpinnerComponent isBlack={isWhite} />}
        {!isLoading && children}
      </button>
    );
  }
}

export default ButtonComponent;
