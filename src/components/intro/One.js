import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const One = props => {
  const classes = props;

  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div>
      <p>Let's get started with your participant number</p>
      <div>
        <TextField id="name" label="Participant ID" className={classes.textField} margin="normal" />
      </div>
      <p>OR</p>
      <div>
        <Button variant="contained">QR Scan</Button>
      </div>
    </div>
  );
};

const styles = theme => ({
  textField: {
    color: 'red'
  }
});

export default withStyles(styles)(One);
