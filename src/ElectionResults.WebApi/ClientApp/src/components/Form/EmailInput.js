import React from 'react';
import PropTypes from 'prop-types';
import Input from "./Input";

const EmailInput = props => {
  const rules = {
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'The email is incorrect format'
    }
  };

  return (
    <Input
      rules={ rules }
      { ...props }
    />
  );
};

EmailInput.defaultProps = {
  required: false,
  label: 'Email',
};


EmailInput.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default EmailInput;
