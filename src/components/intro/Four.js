import React from 'react';
import { Link } from 'react-router-dom';

const Four = props => {
    if (props.currentStep !== 4) {
        return null;
    }
    return (
    <div className="wizard-welcome">

        <p>4</p>
    </div>
    );
}

export default Four;