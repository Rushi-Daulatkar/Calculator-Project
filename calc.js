let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '' && !isNaN(currentInput[currentInput.length - 1])) {
        currentInput += operator;
        updateDisplay();
    }
}

function appendFunction(func) {
    currentInput += func;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function clearResult() {
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        if (result === undefined || isNaN(result) || !isFinite(result)) {
            throw 'Invalid input';
        }
        document.getElementById('result').value = result;
        currentInput = result.toString();
    } catch (error) {
        alert('Error: ' + error);
    }
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}
