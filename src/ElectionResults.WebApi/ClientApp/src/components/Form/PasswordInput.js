import React from 'react';
import PropTypes from 'prop-types';
import Input from "./Input";

const PasswordInput = props => {
  return (
    <Input
      type={ 'password' }
      { ...props }
    />
  );
};

PasswordInput.defaultProps = {
  required: false,
  label: 'Password',
};


PasswordInput.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default PasswordInput;
