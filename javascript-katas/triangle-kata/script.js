const { classifyTriangle } = require('./classifyTriangle');
const { drawTriangle } = require('./canvas');

const triangleForm = document.forms.triangleForm;
const resultField = document.getElementById('result');

const submitHandler = (e) => {
  e.preventDefault();
  const ranges = Array.from(triangleForm.querySelectorAll('input[type=range]'));
  let sides = [];

  ranges.forEach((range) => { sides.push(range.value) });
  resultField.innerHTML = classifyTriangle(sides);

  drawTriangle(sides);
}

let updateTextInput = (v, i) => {
  document.querySelectorAll('p')[i].innerHTML = v;
}

document.querySelectorAll('input[type=range]').forEach((input, i) => {
  updateTextInput(input.value, i);
  input.addEventListener('mousemove', () => {
    updateTextInput(input.value, i);
  });
});

triangleForm.addEventListener('submit', submitHandler);
