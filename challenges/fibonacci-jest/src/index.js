'use strict'

const generateFibonacciSequencie = (num) => {
  if (num < 2) return num;

  return generateFibonacciSequencie(num - 1) + generateFibonacciSequencie(num - 2);
};

const fibonacci = () => {
  const sequencie = [0, 1];

  let index = 2;
  while (sequencie[sequencie.length - 1] < 350) {
    sequencie.push(generateFibonacciSequencie(index));
    index++;
  }

  return sequencie;
};

const isFibonacci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonacci
}