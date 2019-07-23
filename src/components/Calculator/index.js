import React from 'react';
import Display from '../Display';
import Keypad from '../Keypad';
import './Calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: "0",
            numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'ce'],
            operators: ['/', 'x', '-', '+'],
            selectedOperator: "",
            sortedValue: "",
        };
    }

    callOperator = () => {
        console.log("call operator");
        let { displayValue, selectedOperator, storedValue } = this.state;
        const updateStoredValue = displayValue;
        displayValue = parseInt(displayValue, 10);
        storedValue = parseInt(storedValue, 10);

        switch (selectedOperator) {
            case "+": {
                displayValue = storedValue + displayValue;
                break;
            }
            case "-": {
                displayValue = storedValue - displayValue;
                break;
            }
            case "x": {
                displayValue = storedValue * displayValue;
                break;
            }
            case "/": {
                displayValue = storedValue / displayValue;
                break;
            }
            default: {
                displayValue = 0;
            }
        }
        displayValue = displayValue.toString();
        selectedOperator = "";
        if (displayValue === "NaN" || displayValue === "Infinity") displayValue = "0";

        this.setState({
            displayValue: displayValue,
            selectedOperator: selectedOperator,
            storedValue: updateStoredValue
        });
    };

    setOperator = value => {
        console.log("set operator");
        let { displayValue, selectedOperator, storedValue } = this.state;
        if (selectedOperator === "") {
            storedValue = displayValue;
            displayValue = "0";
            selectedOperator = value;
        } else {
            selectedOperator = value;
        }

        this.setState({
            displayValue: displayValue,
            selectedOperator: selectedOperator,
            storedValue: storedValue
        });
    };

    updateDisplay = value => {
        console.log("update display", value);
        let { displayValue } = this.state;
        if (value === "." && displayValue.includes(".")) value = "";

        if (value === "ce") {
            displayValue = displayValue.substring(0, displayValue.length - 1);
            if (displayValue.length === 0) displayValue = "0";
        } else {
            displayValue === "0" ? displayValue = value : displayValue += value;
        }

        this.setState({ displayValue: displayValue });
    };

    render() {
        const { displayValue, numbers, operators } = this.state;
        return (
            <div className="calculator-container">
                <Display displayValue={displayValue} />
                <Keypad
                    callOperator={this.callOperator}
                    numbers={numbers}
                    operators={operators}
                    setOperator={this.setOperator}
                    updateDisplay={this.updateDisplay}
                />
            </div>
        );
    }
}

export default Calculator;
