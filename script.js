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
triangleForm.addEventListener('submit', submitHandler);
