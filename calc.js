document.addEventListener('DOMContentLoaded', init)

var input = '';
var equation = '';

function init() {  
  addListener('btnAC', clearAll);
  addListener('btnCE', clearEntry);
  for (var i = 0; i <= 9; i++) {
    addListener('btn'+i, addNumber);
  }
  addListener('btnDec', addNumber);
  addListener('btnAdd', addOperand);
  addListener('btnSub', addOperand);
  addListener('btnMlt', addOperand);
  addListener('btnDiv', addOperand);
  addListener('btnEq', equals);
  updateDisplay();
}

function addListener (btn, func) {
  document.getElementById(btn).addEventListener('click', func);
}

function addNumber(evt) {  
  input += evt.target.innerHTML;
  updateDisplay();  
}

function addOperand(evt) {
  var op = evt.target.innerHTML;
  if (op === 'x') op = '*';
  if (op === '-' && input === '') input = '-';
  else {  
    equation += (Number(input) || 0) + ' ' + op + ' ';
    input = "";
  }
  updateDisplay();  
}

function equals() {  
  equation += Number(input) || 0
  input = eval(equation);  
  updateDisplay();
  equation = '';
}


function updateDisplay () {
  document.getElementById('equationDisplay').innerHTML = equation.replace(/\*/g, 'x');
    document.getElementById('mainDisplay').innerHTML = input;
}

function clearAll() {
  input = '';
  equation = '';  
  updateDisplay();
}

function clearEntry() {
  input = '';
  updateDisplay();
}
