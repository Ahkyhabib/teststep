import React from 'react'
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
      <Button className="next" variant="contained" color="primary" className={classes.button}>
      Continue
      </Button>
      {/* <Button className="prev" variant="contained" color="primary" className={classes.button}>
        Back
      </Button> */}
      
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
