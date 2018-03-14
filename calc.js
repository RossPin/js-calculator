document.addEventListener('DOMContentLoaded', init)

var input = "";
var entries = [];
var result;

function init() {
  addListener('btnAC', clearAll());
  addListener('btnCE', clearLast());
  for (var i = 0; i <= 9; i++) {
    addListener('btn'+i, addNumber(i));
  }
  addListener('btnDec', addNumber('.'));
  addListener('btnAdd', addOperand('+'));
  addListener('btnSub', addOperand('-'));
  addListener('btnMlt', addOperand('*'));
  addListener('btnDiv', addOperand('/'));
  addListener('btnEq', equals());
  updateDisplay();
}

function addListener (btn, func) {
  document.getElementById(btn).addEventListener('click', func);
}

function addNumber(num) {

}

function addOperand(op) {

}

function equals() {

}

function calculate () {

}

function updateDisplay () {

}

function clearAll() {

}

function clearLast() {

}
