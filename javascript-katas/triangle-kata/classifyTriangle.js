var validateTriangle = (sides) => {
  if (sides.length < 3) {
      throw new Error('You have less than 3 sides');
  } else if (sides.length > 3) {
      throw new Error('You have more than 3 sides');
  }
}

var classifyTriangle = (sides) => {
  validateTriangle(sides);
  if (sides[0] === sides[1] && sides[1] === sides[2]) {
      return 'Equilateral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2]) {
      return 'Isoceles';
  }
  return 'Scalene';
}

module.exports = { classifyTriangle, validateTriangle }