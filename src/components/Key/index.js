import React from 'react';
import PropTypes from 'prop-types';
import './Key.css';

function Key({ keyAction, keyType, keyValue }) {
    return (
        <div 
            className={`key-container ${keyType}`} 
            onClick={() => keyAction(keyValue)}
        >
            <p className="key-content">
                {keyValue}
            </p>
        </div>
    );
}

Key.propsType = {
    keyAction: PropTypes.func.isRequired,
    keyType: PropTypes.string.isRequired,
    keyValue: PropTypes.string.isRequired,
};

export default Key;
