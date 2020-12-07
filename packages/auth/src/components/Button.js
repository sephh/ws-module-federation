import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Button as MaterialButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -5,
    marginLeft: -12,
  },
}));

const Button = ({ children, loading, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <MaterialButton
          {...props}
      >
        {children}
      </MaterialButton>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

export default Button;
