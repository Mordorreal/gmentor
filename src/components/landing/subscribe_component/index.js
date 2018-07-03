import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import addToMailchimp from 'gatsby-plugin-mailchimp';
import { validateEmail } from '../../../common/utils';

import InputComponent from '../../input_component';
import ButtonComponent from '../../button_component';
import DoodleComponent from '../../doodle_component';

import TitleComponent from '../title_component';

import './subscribe_component.scss';


export default class SubscribeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSuccessMessage: false,
      errors: {},
      loading: false,
    };
  }

  clearErrors = () => this.setState({ errors: {} });
  setErrors = (errors) => this.setState({ errors });

  input = {};

  handleSubscribe = async () => {
    const email = this.input.value;
    const errors = validateEmail({ email });

    this.clearErrors();

    if (!isEmpty(errors)) {
      this.setErrors(errors);
      return;
    }
    this.setState({ loading: true });

    const res = await addToMailchimp(email, {});
    if (res.result && res.result === 'error') {
      this.setErrors({ email: res.msg, loading: false });
    } else {
      this.setState({ showSuccessMessage: true, loading: false });
    }
  }

  render() {
    const { errors, showSuccessMessage, loading } = this.state;
    const inputRef = (input) => this.input = input;
    const errorMessage = {
      text: errors.email,
      type: 'error',
    };

    return (
      <div className="subscribe-component">
        <DoodleComponent type="background" />
        <div className="subscribe-component__title">
          <TitleComponent title="Запишитесь как можно быстрее на предварительное интервью" />
        </div>
        <div className="subscribe-component__wrapper">
          <div className="subscribe-component__input">
            <InputComponent
              message={errors.email && errorMessage}
              placeholder="email адрес"
              inputRef={inputRef}
              onSend={this.handleSubscribe}
            />
          </div>
          <div className="subscribe-component__button">
            <ButtonComponent
              isLoading={loading}
              isGreen
              onClick={this.handleSubscribe}
            >{"Я хочу учиться!"}
            </ButtonComponent>
          </div>
        </div>
        <div className="subscribe-component__message">
          {showSuccessMessage && "Спасибо! Мы свяжемся с вами как можно быстрее" }
        </div>
      </div>
    );
  }
}
