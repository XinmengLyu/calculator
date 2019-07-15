import React from 'react';
import Display from '../Display';
import './Calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: "0",
            numbers: [],
            operators: [],
            selectedOperator: "",
            sortedValue: "",
        };
    }

    callOperator = () => {
        console.log("call operator");
    };

    setOperator = () => {
        console.log("set operator");
    };

    updateDisplay = () => {
        console.log("update display");
    };

    render() {
        const { displayValue } = this.state;
        return (
            <div className="calculator-container">
                <Display displayValue={displayValue} />
            </div>
        );
    }
}

export default Calculator;
