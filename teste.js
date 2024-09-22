
// QUESTÃO 1
function isFibonacci(num) {
  const fibonacciSequence = (limit) => {
    let sequence = [0, 1];
    let nextValue = sequence[0] + sequence[1];

    while (nextValue <= limit) {
      sequence.push(nextValue);
      nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    }
    
    return sequence;
  };
  
  const sequence = fibonacciSequence(num);
  
  if (sequence.includes(num)) {
    return `${num} pertence à sequência de Fibonacci.`;
  } else {
    return `${num} não pertence à sequência de Fibonacci.`;
  }
}
  
const number = 20;
console.log(isFibonacci(number));  



// QUESTÃO 2
function countA(string) {
  const regex = /a/gi
  const matches = string.match(regex);

  const count = matches ? matches.length : 0;

  if (count > 0) {
    const isPlural = count > 1;
    console.log(`A letra 'a' aparece ${count} ${isPlural ? 'vezes' : "vez"} na string.`);
  } else {
    console.log("A letra 'a' não aparece na string.");
  }
}

const string = "A rua é clara";
countA(string);


// QUESTÃO 3
function question3() {
  var indice = 12;
  var soma = 0;
  var k = 1;

  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }

  return soma
}

console.log(question3())



// QUESTÃO 4
/*
4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, _9_
b) 2, 4, 8, 16, 32, 64, _128_
c) 0, 1, 4, 9, 16, 25, 36, _49_
d) 4, 16, 36, 64, _100_
e) 1, 1, 2, 3, 5, 8, _13_
f) 2, 10, 12, 16, 17, 18, 19, _20_
*/



// QUESTÃO 5
/*
5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? 
R: Ligando 2 interruptores, após um tempo desliga 1 e verifica em 2 salas tendo as opções: lâmpada desligada fria, lâmpada ligada e lâmpada desligada quente.
*/