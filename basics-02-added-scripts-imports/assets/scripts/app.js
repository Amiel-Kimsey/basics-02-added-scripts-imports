const defualtResult = 0;
let currentResult = defualtResult;
let logEntries = [];


//Gets inpuyt from input field
function getUserNumberInput() {
    return parseInt(userInput.value)
}

//Generate and write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescrpition = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescrpition); //from vendor file
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

function calculateResult(calculationType){
     if(
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
     ) {
        return;
     }
    
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*'
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
};
    


function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}


function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

