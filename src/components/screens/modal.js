import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SimpleCard from './card';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import translate from '../../I18N/I8';
const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '100%',
    height: '85%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '5px',
    top: '35px'
  }
});

const locale = {
  profileFood: {
    en: 'Food',
    ar: 'غذاء'
  },
  modalFAQ: {
    en: 'FAQs',
    ar: 'الأسئلة الشائعه'
  }
};

class SimpleModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          style={{
            position: 'relative',
            alignSelf: 'flex-end',
            bottom: '10px',
            right: '0px'
          }}
          onClick={this.handleOpen}>
          <IoMdHelpCircleOutline className="bell" />
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}>
          <div className={classes.paper}>
            <Typography
              variant="title"
              id="modal-title"
              styel={{ right: '0', display: 'flex', justifyContent: 'space-between', backgroundColor: 'blue' }}>
              <p className="floatLeft">{translate(locale, 'modalFAQ')}</p>
              <p className="floatRight">الاسئلة الشائعة</p>
            </Typography>
            <div className="qustionsarea">
              <SimpleCard />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
