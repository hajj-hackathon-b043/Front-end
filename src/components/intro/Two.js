import React from 'react';
import { Link } from 'react-router-dom';

const Two = props => {
    if (props.currentStep !== 2) {
        return null;
    }
    return (
    <div className="wizard-welcome">

        <p>2</p>
    </div>
    );
}

export default Two;