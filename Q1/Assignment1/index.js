import inquirer from 'inquirer';
// Define an enum for operations
var Operation;
(function (Operation) {
    Operation["Add"] = "Add";
    Operation["Subtract"] = "Subtract";
    Operation["Multiply"] = "Multiply";
    Operation["Divide"] = "Divide";
})(Operation || (Operation = {}));
// Function to handle user input
async function getUserInput() {
    const userInput = await inquirer.prompt([
        { message: 'Enter first number: ', type: 'number', name: 'firstNumber' },
        { message: 'Enter second number: ', type: 'number', name: 'secondNumber' },
        {
            message: 'Select desired operation',
            type: 'list',
            name: 'operationType',
            choices: Object.values(Operation), // Generate choices dynamically from Operation enum
        },
    ]);
    return userInput;
}
// Function to perform calculations based on user input
function performCalculation(firstNumber, secondNumber, operationType) {
    switch (operationType) {
        case Operation.Add:
            return firstNumber + secondNumber;
        case Operation.Subtract:
            return firstNumber - secondNumber;
        case Operation.Multiply:
            return firstNumber * secondNumber;
        case Operation.Divide:
            return firstNumber / secondNumber;
        default:
            return 0;
    }
}
// Main function
async function main() {
    const { firstNumber, secondNumber, operationType } = await getUserInput();
    const result = performCalculation(firstNumber, secondNumber, operationType);
    console.log('Your result is: ', result);
}
// Call the main function to start the program
main();
