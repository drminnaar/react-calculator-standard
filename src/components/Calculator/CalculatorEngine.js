const math = require('mathjs');

let currentValue = '';
let register = [];
let history = [];
let result = '';

class CalculatorEngine {
    
    constructor(){
        history = [],
        register = [];
        currentValue = '';
        result = '';
    }

    inputDigit(digit) {
        if (isNaN(digit)) {
            throw Error('Only numeric input is allowed');
        }

        if (result !== '') {
            result = '';
            currentValue = '';            
        }

        currentValue += digit;
    }

    inputDecimal() {
        if (result !== '') {
            result = '';
            currentValue = '';         
        }

        if (currentValue.indexOf('.') >= 0) {
            return;
        }

        if (currentValue === '') {
            currentValue += '0.';
        } else {
            currentValue += '.';
        }
    }

    clear() {
        currentValue = '';
        register = [];
        result = '';
    }

    clearAll() {
        currentValue = '';
        register = [];
        result = '';
        history = [];
    }

    clearHistory() {
        history = [];
    }

    delete() {
        if (currentValue === '') {
            return;
        }

        currentValue = currentValue.substring(0, currentValue.length - 1);
    }

    add() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('+');

        currentValue = '';
    }

    subtract() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('-');

        currentValue = '';
    }

    multiply() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('*');

        currentValue = '';
    }

    divide() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('/');
        
        currentValue = '';
    }

    equals() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);

        const expression = register.join(' ');

        result = math.eval(expression);
        currentValue = result.toString();
        history.splice(0, 0, { expression, result });
        register = [];
    }

    loadHistory(index) {
        currentValue = history[index].result.toString();
    }

    toggleSign() {
        currentValue = (parseFloat(currentValue) * (-1)).toString();
    }

    getValue() {
        return currentValue;
    }

    getExpression() {
        return register.join(' ');
    }

    getHistory() {        
        return history;
    }

    getResult() {
        return result;
    }
}

export default CalculatorEngine;