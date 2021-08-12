// Tipos primitivos = Strings, number (Int e floats(decimais)). bolean 

let minhaVar = "minha string com aspas duplas";
let minhavar2 = 'minha "string" com aspas simples ';

console.log(minhavar2);

//Concatenar strings

let idade = 28;
//let msg = "Eu possuo " + idade +  " anos"
let msg = `Eu possuo ${idade} anos`;

console.log(msg);
console.log("hello " + "world");
console.log(typeof msg, typeof idade, typeof minhaVar);

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n1 é ${typeof n2} e seu valor é ${n2}`);
console.log(`o tipo de n1 é ${typeof minhaVar} e seu valor é ${minhaVar}`);

// TIpos boleanos

const isValid = true;
console.log(`isValid: ${isValid}`);

const isValidF = false;
console.log(`isValidF: ${isValidF}`);

//**** undefined, null, symbol

//undefined = Variavel criada mas não atribuida
let varTeste
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(varTeste);

// null = Criar uma variavel e não atribuir valor a ela
let varNull
console.log(varNull);
console.log(typeof varNull);
varNull = null;
console.log(varNull);


