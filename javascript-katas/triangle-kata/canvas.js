let drawTriangle = (s) => {
  let canvas = document.getElementById('canvas');
  let sides = [Number(s[0]), Number(s[1]), Number(s[2])];
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width  = 100;
    canvas.height = 100;

    let sWidth = canvas.width;
    let sHeight = canvas.height;
    let path = new Path2D();

    path.moveTo((sWidth/2) + sides[0], sHeight / 2);
    path.lineTo((sWidth/2), (sHeight/2) - sides[1]);
    path.lineTo((sWidth/2) - sides[2], sHeight / 2);
    ctx.fill(path);
  }
}

module.exports = { drawTriangle }