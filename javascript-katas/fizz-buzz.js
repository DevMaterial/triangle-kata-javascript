const FizzBuzz = (max) => {
  let output = [];

  for (var i = 1; i <= max; i++) {
    switch (0) {
      case i % 3 && i % 5:
        output.push('FizzBuzz');
        break;
      case i % 3:
        output.push('Fizz');
        break;
      case i % 5:
        output.push('Buzz');
        break;
      default:
        output.push(i);
    }
  }
  return output;
}

console.log(
  FizzBuzz(100)
);
