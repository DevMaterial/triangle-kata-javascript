const { classifyTriangle } = require('./classifyTriangle');

const triangleForm = document.forms.triangleForm;
const resultField = document.getElementById('result');

const submitHandler = (e) => {
  e.preventDefault();
  const ranges = Array.from(triangleForm.querySelectorAll('input[type=range]'));
  let sides = [];

  ranges.forEach((range) => { sides.push(range.value) });
  resultField.innerHTML = classifyTriangle(sides);
}

document.querySelectorAll('input[type=range]').forEach((input, i) => {
  input.addEventListener('mousemove', () => {
    updateTextInput(input.value, i);
  })
})

let updateTextInput = (v, i) => {
    document.querySelectorAll('p')[i].innerHTML = v;
}

triangleForm.addEventListener('submit', submitHandler);
