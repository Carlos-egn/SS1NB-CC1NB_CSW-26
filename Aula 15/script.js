var issoEumaString = "Isso é uma string";
let issoEumNumero = 42;
const issoEumBooleano = true;
let issoTambemEumaString = "42";


if (issoEumNumero === issoTambemEumaString) {
    console.log("As strings são iguais");
} else {
    console.log("As strings são diferentes");
}

console.log(issoEumNumero + issoTambemEumaString)

console.log(issoEumNumero + issoEumNumero);

var issoEumaGlobal = "Eu sou uma variável Global";

{
    let issoEumaLocal = "Eu sou uma variável Local";
    console.log(issoEumaGlobal);
    console.log(issoEumaLocal);
}

console.log(issoEumaGlobal);
//console.log(issoEumaLocal); //Isso causará um erro, pois issoEumalocal não está definifo fora do bloco.

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;

console.log(sum.toPrecision(2));

for (let i = 0; i < 5; i++) {
    console.log(i)
    console.log(i * 2);
    console.log(i * 2 + 1);
}

//imprimindo impares com while
let j = 0;
while (j < 5) {
    console.log(j * 2 + 1);
    j++;
}

console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));
console.log(Math.random());
console.log(Math.cos(90));

//gerando os numeros primos entre 1 e 100
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
    }
    return true;
}

for (let i =1; i <= 100; i++) {
    isPrime(i) ? console.log(i) : null
}