document.addEventListener('DOMContentLoaded', init)

var input = '';
var equation = '';
var displayAnswer = false;

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
  if (displayAnswer) {
    displayAnswer = false;
    input = '';
  } 
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
  displayAnswer = false;
  updateDisplay();  
}

function equals() {  
  equation += Number(input) || 0
  input = eval(equation);
  displayAnswer = true; 
  updateDisplay();
  equation = '';  
}


function updateDisplay () {
  document.getElementById('equationDisplay').innerHTML = equation.replace(/\*/g, 'x');
  if (displayAnswer) document.getElementById('mainDisplay').innerHTML = '= ' + input;
  else document.getElementById('mainDisplay').innerHTML = input;
}

function clearAll() {
  displayAnswer = false;
  input = '';
  equation = '';  
  updateDisplay();
}

function clearEntry() {
  displayAnswer = false;
  input = '';
  updateDisplay();
}
