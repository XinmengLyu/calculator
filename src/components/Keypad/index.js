import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key';
import './Keypad.css';

function Keypad({ callOperator, numbers, operators, setOperator, updateDisplay }) {
    const numberKeys = numbers.map((n, i) =>
        <Key
            key={i}
            keyAction={updateDisplay}
            keyType="number-key"
            keyValue={n}
        />);
    const operatorsKeys = operators.map((o, i) =>
        <Key
            key={i}
            keyAction={setOperator}
            keyType="operator-key"
            keyValue={o}
        />);
    return (
        <div className="keypad-container">
            <div className="numbers-container">
                {numberKeys}
            </div>
            <div className="operators-container">
                {operatorsKeys}
            </div>
            <div className="submit-container">
                <Key
                    keyAction={callOperator}
                    keyType="submit-key"
                    keyValue="="
                />
            </div>

        </div>
    );
}

Keypad.propTypes = {
    callOperator: PropTypes.func.isRequired,
    numbers: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired,
    setOperator: PropTypes.func.isRequired,
    updateDisplay: PropTypes.func.isRequired,
};

export default Keypad;
