import React from 'react';
import NumberFormat from 'react-number-format';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';


function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};



function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
  console.log(props);
  console.log(inputRef)
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propType = {
  inputRef: PropTypes.func.isRequired,
}

export {
  TextMaskCustom,
  NumberFormatCustom,
}