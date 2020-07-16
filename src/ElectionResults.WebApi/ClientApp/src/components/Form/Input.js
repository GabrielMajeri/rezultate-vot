import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label, Input as TextInput } from "reactstrap";
import styles from './Input.module.css';

const Input = props => {
  const {
    label,
    placeholder,
    type,
    name,
    required,
    rules,
    register,
    errors
  } = props;

  let innerRules = {};

  if (required) {
    innerRules.required = 'This field is required';
  }

  innerRules = {
    ...innerRules,
    ...rules,
  }

  const invalid = !!errors[name];

  return (
    <FormGroup>
      {
        label && <Label for={ name } className={ styles.label }>
          {
            label
          }
        </Label>
      }

      <TextInput
        invalid={ invalid }
        type={ type }
        name={ name }
        placeholder={ placeholder ?? '' }
        innerRef={ register(innerRules) }
      />
      {
        errors[name] && <FormFeedback>{ errors[name].message }</FormFeedback>
      }
    </FormGroup>
  );
};

Input.defaultProps = {
  required: false
};


Input.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Input;
