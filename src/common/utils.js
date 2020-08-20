const isValidEmail = (email) =>
  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,32}/i.exec(email);

const validateEmail = ({ email, intl }) => {
  const notValidEmail = intl.formatMessage({ id: 'please_email_valid' });
  const emailEmpty = intl.formatMessage({ id: 'please_email' });

  const errors = {};

  if (!isValidEmail(email)) {
    errors.email = notValidEmail;
  }

  if (email === '') {
    errors.email = emailEmpty;
  }

  return errors;
};

export { validateEmail };
