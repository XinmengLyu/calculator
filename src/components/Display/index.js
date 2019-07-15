import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

function Display({ displayValue }) {
    return (
        <div className="display-container">
            <p className="display-content">
                {displayValue}
            </p>
        </div>
    );
}

Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;
