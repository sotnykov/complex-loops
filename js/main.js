let halfStepText = '';

for (let halfStepNum = 20; halfStepNum <= 30; halfStepNum += 0.5) {
  halfStepText += `${halfStepNum}, `;
}

halfStepText = halfStepText.slice(0, -2);

document.getElementById('first-demo').innerHTML = halfStepText;

let currencyText = '';
let dollar = 27;

for (let currencyNum = 10; currencyNum <= 100; currencyNum += 10) {
  const uah = currencyNum * dollar;
  currencyText += `${uah}, `;
}

currencyText = currencyText.slice(0, -2);

document.getElementById('second-demo').innerHTML = currencyText;

let squareText = '';
const numberN = 100;

for (let squareNum = 1; squareNum <= 100; squareNum++) {
  const square = squareNum * squareNum;
  if (square >= numberN) {
    break;
  } else {
    squareText += `N number is ${numberN}. Square of ${squareNum} is ${square}. <br> `;
  }
}
squareText = squareText.slice(0, -2);

document.getElementById('third-demo').innerHTML = squareText;


let primeNumText = '';
let primeNum;

document.getElementById('button-demo').onclick = function() {
  primeNumText = '';
  primeNum = parseInt(document.getElementById('input-demo').value)

  if (isNaN(primeNum)) {
    document.getElementById('primeNumText').innerHTML = 'Please, write a number!';
    return;
  }

  let isPrime = true;


  if (primeNum < 2) {
    isPrime = false; 
  } else {
    for (someNum = 2; someNum <= Math.sqrt(primeNum); someNum++) {
      if (primeNum % someNum === 0) {
        isPrime = false;
        break;
      }
    }
  }

  primeNumText = `${primeNum} is a prime number: ${isPrime}.`;

  document.getElementById('fourth-demo').innerHTML = primeNumText;
}


let expoThreeText = '';
let expoThreeNum;

document.getElementById('expo-button-demo').onclick = function () {
  expoThreeText = '';
  expoThreeNum = parseInt(document.getElementById('expo-input-demo').value)

  if (isNaN(expoThreeNum)) {
    document.getElementById('expoThreeText').innerHTML = 'Please, write a number!';
    return;
  }

  let isExpoThree = true;

  if (expoThreeNum < 1) {
    isExpoThree = false; 
  } else {
    while (expoThreeNum % 3 === 0) {
      expoThreeNum /= 3;
    }
    isExpoThree = expoThreeNum === 1;
  }

  expoThreeText = `Can you get ${expoThreeNum} raising it to the third degree: ${isExpoThree}.`;

  document.getElementById('fifth-demo').innerHTML = expoThreeText;
}