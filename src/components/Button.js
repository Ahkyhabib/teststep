import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'flex',
    flexDisplay: 'row'
  },
  
});

function ContainedButtons(props) {
  

  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
      Continue
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Back
      </Button>
      {/* <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label> */}
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);