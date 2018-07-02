const isValidEmail = (email) => /^[^@\s]+@[^@\s]+$/i.exec(email);

const validateEmail = ({ email }) => {
  const notValidEmail = "Пожалуйста, введите валидный email.";
  const emailEmpty = "Пожалуйста, введите email.";

  const errors = {};

  if (!isValidEmail(email)) {
    errors.email = [notValidEmail];
  }

  if (email === '') {
    errors.email = [emailEmpty];
  }

  return errors;
};

export { validateEmail };
