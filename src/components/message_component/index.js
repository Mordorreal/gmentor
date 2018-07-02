import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import InfoIcon from '../../common/icons/info';
import TickInCircleIcon from '../../common/icons/tick_in_circle';
import CrossInCircleIcon from '../../common/icons/cross_in_circle';

import './message_component.scss';


const MessageComponent = ({ message }) => {
  const messageClasses = classnames({
    'message-component': true,
    'message-component_error': message.type === 'error',
    'message-component_success': message.type === 'success',
  });

  let icon = InfoIcon;

  switch (message.type) {
    case 'mandatory':
      icon = InfoIcon;
      break;
    case 'error':
      icon = CrossInCircleIcon;
      break;
    case 'success':
      icon = TickInCircleIcon;
      break;
    default:
      icon = InfoIcon;
  }

  return (
    <div className={messageClasses}>{icon()}&nbsp;&nbsp;{message.text}</div>
  );
};

MessageComponent.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.oneOf(['success', 'error', 'mandatory']),
  }),
};

export default MessageComponent;
