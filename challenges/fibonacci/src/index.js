'use strict'

const generateSequencie = (num) => {
    if (num < 2) return num;
    return generateSequencie(num - 1) + generateSequencie(num - 2);
}

const fibonacci = () => {

    // const fibonacciSeq = [];
    // for (let i = 0; i < 1000; i++) {
    //     const val = generateSequencie(i);
    //     fib.push(val);

    // Condição imprescindível
    //     if (val >= 350) break;
    // }

    const fibonacciSeq = [generateSequencie(0), generateSequencie(1)];

    // O valor da última posição deve ser até passar de 350, ou seja, menor que 350
    while (fibonacciSeq[fibonacciSeq.length - 1] < 350) {
        const arrLength = fibonacciSeq.length;
        const val = fibonacciSeq[arrLength - 1] + fibonacciSeq[arrLength - 2];
        fibonacciSeq.push(val);
    }

    return fibonacciSeq;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
