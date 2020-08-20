import React from 'react';
import PropTypes from 'prop-types';
import RoundSpinnerImageBlack from '../../common/images/round_spinner_black.svg';
import RoundSpinnerImageWhite from '../../common/images/round_spinner_white.svg';

import './spinner_component.scss';

const SpinnerComponent = ({ isBlack }) => {
  return (
    <div className="spinner-component">
      {isBlack ? (
        <img src={RoundSpinnerImageBlack} alt="round_spinner" />
      ) : (
        <img src={RoundSpinnerImageWhite} alt="round_spinner" />
      )}
    </div>
  );
};

SpinnerComponent.propTypes = {
  isBlack: PropTypes.bool,
};

export default SpinnerComponent;
