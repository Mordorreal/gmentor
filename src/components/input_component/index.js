import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

import LabelComponent from '../label_component';
import MessageComponent from '../message_component';

import './input_component.scss';


export default class InputComponent extends Component {
  static propTypes = {
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.func,
    inputRef: PropTypes.func,
    isDisabled: PropTypes.bool,
    isHaveRightIcon: PropTypes.bool,
    isMandatory: PropTypes.bool,
    label: PropTypes.string,
    message: PropTypes.shape({
      text: PropTypes.string,
      type: PropTypes.oneOf(['success', 'error']),
    }),
    onBlur: PropTypes.func,
    onIconClick: PropTypes.func,
    onSend: PropTypes.func,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    inputRef: (fn) => fn,
    message: {},
    onIconClick: (fn) => fn,
  }

  constructor(props) {
    super(props);

    const { message, isMandatory } = props;

    this.state = {
      focused: false,
      message: isMandatory ? this.mandatoryMessage : message,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { isMandatory, message } = nextProps;

    isMandatory ? this.showMandatory() : this.clearMessage();

    if (!isEmpty(message)) {
      this.showMessage(message);
    }
  }

  input = {};

  handleInputClick = () => this.input.focus();

  mandatoryMessage = { type: 'mandatory', text: 'This is required field' };

  showMessage = (message) => this.setState({ message });
  showMandatory = () => this.showMessage(this.mandatoryMessage);
  clearMessage = () => this.showMessage({});

  handleKeyDown = (event) => {
    const { onSend } = this.props;

    if (onSend !== void 0 && event.key === 'Enter') {
      onSend(this.input.value);
      this.removeFocus();
    }
  }

  handleBlur = () => {
    const { onBlur } = this.props;

    this.removeFocus();

    if (onBlur !== void 0) {
      onBlur(this.input.value);
    }
  }

  handleInputFocus = () => this.setState({ focused: true });
  removeFocus = () => this.setState({ focused: false });

  handleInputChange = () => {
    this.props.isMandatory ? this.showMandatory() : this.clearMessage();
  }

  render() {
    const {
      icon,
      inputRef,
      isDisabled,
      isHaveRightIcon,
      label,
      onIconClick,
      ...inputProps
    } = this.props;
    const { message, focused } = this.state;

    const wrapperClasses = classnames({
      'input-component__wrapper': true,
      'input-component__wrapper_is-disabled': isDisabled,
      'input-component__wrapper_is-focused': focused,
      'input-component__wrapper_error': message.type === 'error',
      'input-component__wrapper_success': message.type === 'success',
    });

    const inputClasses = classnames({
      'input-component__input': true,
      'input-component__input_is-disabled': isDisabled,
      'input-component__input_with-left-icon': icon,
      'input-component__input_with-right-icon': isHaveRightIcon,
    });

    const saveRef = (input) => {
      this.input = input;
      inputRef(input);
    };

    //clear unused props from input props
    Reflect.deleteProperty(inputProps, 'isMandatory');
    Reflect.deleteProperty(inputProps, 'onSend');
    Reflect.deleteProperty(inputProps, 'message');

    return (
      <div className="input-component">
        <LabelComponent text={label}>
          <div className={wrapperClasses}>
            {icon && !isHaveRightIcon && <span className="input-component__icon" onClick={onIconClick}>
              {icon()}
            </span>}
            <input
              {...inputProps}
              className={inputClasses}
              disabled={isDisabled}
              onBlur={this.handleBlur}
              onKeyDown={this.handleKeyDown}
              onFocus={this.handleInputFocus}
              onChange={this.handleInputChange}
              ref={saveRef}
            />
            {icon && isHaveRightIcon && <span className="input-component__icon input-component__icon_right" onClick={onIconClick}>
              {icon()}
            </span>}
          </div>
        </LabelComponent>
        {!isEmpty(message) && <MessageComponent message={message} />}
      </div>
    );
  }
}
