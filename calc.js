document.addEventListener('DOMContentLoaded', init)

var input = '';
var equation = '';
var displayAnswer = false;

function init() {  
  addListeners();
  updateDisplay();
}

function addListeners () {
  var numBtns = document.getElementsByClassName('btnNum');
  var opBtns = document.getElementsByClassName('btnOp');
  document.getElementById('btnAC').addEventListener('click', clearAll);
  document.getElementById('btnCE').addEventListener('click', clearEntry);
  document.getElementById('btnEq').addEventListener('click', equals);  
  for (var i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', addNumber);
  }    
  for (var i = 0; i < opBtns.length; i++) {
    opBtns[i].addEventListener('click', addOperand);
  }
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
