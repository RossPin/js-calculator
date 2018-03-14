document.addEventListener('DOMContentLoaded', init)

var input = "";
var entries = [];
var result;

function init() {  
  addListener('btnAC', clearAll);
  addListener('btnCE', clearLast);
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
  entries.push(input);
  entries.push(op);
  input = "";
  updateDisplay();  
}

function equals() {
  console.log('equals');
}

function calculate () {

}

function updateDisplay () {
  document.getElementsByClassName('display')[0].innerHTML = input;
}

function clearAll() {
  console.log('AC');
}

function clearLast() {
  console.log('CE');
}
