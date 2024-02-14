let display = document.getElementById('display');
function startup() {
  display.value = "            (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠";
  setTimeout(function() {
    display.value = '';
  }, 2000);
}
startup();

function appendNumber(num) {
  display.value += num;
}

function appendOperator(operator) {
  display.value += operator;
}

function clearDisplay() {
  display.value = ' ';
}

function del() {
    let currentValue = display.value;
  display.value = currentValue.slice(0, -1);
  }
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
