import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FaVolumeUp } from 'react-icons/fa';
import translate from '../../I18N/I8';

const styles = {
  card: {
    minWidth: 275,
    margin: 20
  },
  bullet: {
    display: 'inline-block',
    transform: 'scale(0.8)',
    margin: '5px'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  main: {
    marginBottom: 16
  }
};

const locale = {
  modalFAQ: {
    en: 'FAQs',
    ar: 'الأسئلة الشائعه'
  },
  FAQsone: {
    en: 'are you lost ?',
    ar: 'هل انت ضائع ؟'
  },
  FAQstwo: {
    en: 'are you fine ?',
    ar: 'هل انت بخير ؟'
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            هل انت بخير ؟
          </Typography>
          <hr />
          <Typography component="p">{translate(locale, 'FAQstwo')}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <FaVolumeUp className="sound" />
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            هل انت ضائع؟
          </Typography>
          <hr />
          <Typography component="p">{translate(locale, 'FAQsone')}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <FaVolumeUp className="sound" />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
