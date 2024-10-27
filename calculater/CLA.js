document.addEventListener('DOMContentLoaded', () => {
    let screen = document.getElementById('calculator-screen'); 
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    function inputnum(num) {
        currentInput += num; 
        screen.value = currentInput; 
    }

    function chooseOperator(op) {
        if (currentInput === '') return; 
        if (previousInput !== '') {
            calculate(); 
        }
        operator = op; 
        previousInput = currentInput; 
        currentInput = ''; 
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(curr)) return; 

        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
            default:
                return;
        }

        currentInput = result.toString(); 
        operator = ''; 
        previousInput = ''; 
        screen.value = currentInput; 

    function clearScreen() {
        currentInput = '';
        previousInput = '';
        operator = '';
        screen.value = ''; 
    }

 
    const keys = document.querySelectorAll('.calculator-keys button');
    keys.forEach(key => {
        key.addEventListener('click', (event) => {
            const keyContent = event.target.textContent;
            if (keyContent === 'C') {
                clearScreen(); 
            } else if (['+', '-', '*', '/'].includes(keyContent)) {
                chooseOperator(keyContent); 
            } else if (keyContent === '=') {
                calculate(); 
            } else {
                inputnum(keyContent); 
            }
        });
    });
});
