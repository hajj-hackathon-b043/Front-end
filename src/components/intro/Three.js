import React from 'react';
import { Link } from 'react-router-dom';

const Three = props => {
    if (props.currentStep !== 3) {
        return null;
    }
    return (
    <div className="wizard-welcome">

        <p>3</p>
    </div>
    );
}

export default Three;