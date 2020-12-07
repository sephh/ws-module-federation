import React, { useCallback } from 'react';
import { TextField } from '@material-ui/core';

let timeout;

const DelayedField = ({ inputDelay, onChange, ...props }) => {
  const onChangeDebounce = useCallback((evt) => {
    timeout && clearTimeout(timeout);
    const target = evt.target;
    timeout = setTimeout(() => onChange({ target }), inputDelay);
  }, []);

  return <TextField {...props} fullWidth onChange={onChangeDebounce} />;
};

DelayedField.defaultProps = {
  inputDelay: 200,
  onChange: () => {},
};

export default DelayedField;
