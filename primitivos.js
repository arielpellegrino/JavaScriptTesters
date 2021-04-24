let minhaVar = 'Minha "String" com aspas simples';
let minhaVar2 = "MInha String com aspas duplas"
let minhaVar3 = `minha template literal`;


let idade = 28;
let msg = `Com as templates literal eu consigo inserir a varivel dentro da msg ${idade}`;
let msgB = "Eu possuo " + idade + "---";

console.log(msg);

console.log("Hello " + "World" );


//Descobrir o tipo da Varivael
console.log(typeof msg, typeof idade, typeof minhaVar, " -- ", 20 );

const n1 = 10;
const n2 = 1.1;
console.log(`O tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`O tipo de n1 é ${typeof n2} e seu valor é ${n2}`);
