//operadores aritmeticos 

let n1 = 10;
let n2 = 5;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2); //resto de uma divisão
console.log(2 ** 3); //potenciação


//Operadores de atribuição
let n3 = 25;
//n3 = n3 + 15;
n3 += 15;
n3 *= 2;

console.log(n3);

//INCREMENTO DE DECREMENTO

let i = 0;
++i ;

console.log(i);

//Operadores de comparação
/*
Igualdade de valor == 
igualdade de valor e tipo ===
<, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes
*/

console.log(n1, n2, n3);
let n5 = "10";
console.log(n1 != 10);
console.log(n1 !== "10");

/*

&& = and
|| = OR
! = NOT

Para uma pessoa viajar para o exterior:
- Precisa ser maior de 19 anos
ou 
- Acompanhado com os pais
E
ter comprado o bilhete
*/

let idade = 18;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = idade >= 18 || (paisPresentes  && comprouBilhete); 

console.log(`Pode viajar ${podeViajar}`);