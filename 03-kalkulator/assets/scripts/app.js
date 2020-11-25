let currentResult = 0;

const rezultat = 0;

let logEntries = [];


function getUserNumberInput() {
  return  parseInt(userInput.value);
}

function writeToLog(operacija, prjasnjiRezultat, dodaniBroj, rezultat){
  const logUlaz= {
    operacija: operacija,
    prjasnjiRezultat: prjasnjiRezultat,
    uneseniBroj: dodaniBroj,
    rezultat: rezultat
  };
  logEntries.push(logUlaz);
  console.log(logEntries)
}

function ispisiRezultat(mathOperator, pocetnaVrijednost, enteredNumber) {
  calcDescription = `${pocetnaVrijednost} ${mathOperator} ${enteredNumber}`;
  outputResult(currentResult,calcDescription);
}

function calculateResult(calculationType) {
  const enteredNumber= getUserNumberInput()
  if (enteredNumber == 0 ) {
    return;
  }
  const pocetnaVrijednost = currentResult
  let mathOperator;

  if (calculationType === 'DODAJ') {
    currentResult += enteredNumber;
    mathOperator = '+'
  } else if (calculationType === 'ODUZMI') {
    currentResult -= enteredNumber;
    mathOperator = '-'
  } else if (calculationType === 'MNOZI') {
    currentResult *= enteredNumber;
    mathOperator = '*'
  } else if (calculationType === 'DIJELI') {
    currentResult /= enteredNumber;
    mathOperator = '/'
  }

  ispisiRezultat (mathOperator, pocetnaVrijednost, enteredNumber);
  writeToLog(calculationType, pocetnaVrijednost, enteredNumber, currentResult)
}

function addNumber () { calculateResult('DODAJ');}

function oduzmi () { calculateResult('ODUZMI');}

function umnozak() { calculateResult('MNOZI');}

function podjeli (){ calculateResult('DIJELI');}


addBtn.addEventListener('click', addNumber);
subtractBtn.addEventListener('click', oduzmi);
multiplyBtn.addEventListener('click', umnozak);
divideBtn.addEventListener('click', podjeli);

