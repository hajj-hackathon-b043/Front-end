import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import queryString from 'query-string';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Welcome from '../components/intro/Welcome';
import Step1 from '../components/intro/One';
import Step2 from '../components/intro/Two';
import Step3 from '../components/intro/Three';
import Step4 from '../components/intro/Four';

class IntroWizard extends Component {
  state = {
    welcome: true,
    currentStep: 1,
    totalSteps: 4
  };
  getQueryParams = () => {
    // let { search } = this.props.location;
    // search = queryString.parse(search);
  };
  updateCurrentStep = val => {
    let { currentStep, totalSteps } = this.state;
    let expectedStep = currentStep + val;
    if (expectedStep < 1 || expectedStep <= totalSteps) {
      currentStep = expectedStep;
    }
    this.setState({ currentStep });
  };
  fadeOutWelcomeScr = () => {
    setTimeout(() => {
      this.setState({
        welcome: false
      });
    }, 1500);
  };
  componentDidMount() {
    this.getQueryParams();
    this.fadeOutWelcomeScr();
  }
  render() {
    const { currentStep, totalSteps, welcome } = this.state;
    const { classes } = this.props;

    return (
      <div className="wizard">
        {welcome && <Welcome />}
        {!welcome && (
          <React.Fragment>
            <Step1 currentStep={currentStep} />
            <Step2 currentStep={currentStep} />
            <Step3 currentStep={currentStep} />
            <Step4 currentStep={currentStep} />

            <div className={currentStep > 1 ? 'intro-bottom-nav space-between' : 'intro-bottom-nav'}>
              {currentStep !== 1 ? (
                <Button variant="contained" color="primary" onClick={() => this.updateCurrentStep(-1)}>
                  Prev
                </Button>
              ) : null}
              {currentStep < totalSteps ? (
                <Button
                  variant="contained"
                  color="primary"
                  className={currentStep === 1 ? 'flex-end' : ''}
                  onClick={() => this.updateCurrentStep(1)}>
                  Next
                </Button>
              ) : null}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    background: 'rgba(0, 0, 0, 0.4)'
  }
});

export default withStyles(styles)(IntroWizard);
