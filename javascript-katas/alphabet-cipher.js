const shiftToEnd = (letter) => { letter.push(letter.shift()); }

const cipher = () => {
	let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	alphabet.forEach(() => {
  	console.log(alphabet);
    shiftToEnd(alphabet);
  });
}

cipher();