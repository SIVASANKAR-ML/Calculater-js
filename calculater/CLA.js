document.addEventListener('DOMContentLoaded', () => {
    let screen = document.getElementById('calculator-screen'); // Get the calculator screen
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    function inputnum(num) {
        currentInput += num; // Append the clicked number
        screen.value = currentInput; // Update the screen
    }

    function chooseOperator(op) {
        if (currentInput === '') return; // Prevent empty input
        if (previousInput !== '') {
            calculate(); // Calculate if there's a previous input
        }
        operator = op; // Set the operator
        previousInput = currentInput; // Store the current input
        currentInput = ''; // Clear the current input for the next number
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(curr)) return; // Ensure valid numbers

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

        currentInput = result.toString(); // Set result as current input
        operator = ''; // Clear operator
        previousInput = ''; // Clear previous input
        screen.value = currentInput; // Display result
    }

    function clearScreen() {
        currentInput = '';
        previousInput = '';
        operator = '';
        screen.value = ''; // Clear the screen
    }

    // Add event listeners to buttons
    const keys = document.querySelectorAll('.calculator-keys button');
    keys.forEach(key => {
        key.addEventListener('click', (event) => {
            const keyContent = event.target.textContent;
            if (keyContent === 'C') {
                clearScreen(); // Clear screen
            } else if (['+', '-', '*', '/'].includes(keyContent)) {
                chooseOperator(keyContent); // Choose operator
            } else if (keyContent === '=') {
                calculate(); // Calculate result
            } else {
                inputnum(keyContent); // Input number
            }
        });
    });
});
