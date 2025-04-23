const defualtResult = 0;
let currentResult = defualtResult;
let logEntries = [];


//Gets inpuyt from input field
function getUserNumberInput() {
    return parseInt(userInput.value)
}

//Generate and write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescripition = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescripition); //from vendor file
}

function writeToLog(
    operationIdentifier,
    pervResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        pervResult: pervResult,
        number: operationNumber,
        newresult: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
};

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
};
    


function subtract() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}


function divide() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

