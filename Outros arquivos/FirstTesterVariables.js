//String
let nome = 'Ariel Pellegrino';
console.log(nome);

//Inteiro
let idade = 28;
console.log(idade);

//Decimal
let altura = 1.75;
console.log(altura);

//Bolean
let timePalmeiras = true;
console.log(timePalmeiras); 

let timeSantos = false;
console.log(timeSantos);


//Dados UNDEFINED

//NaN = Not a Number: O JS não consegue interpretar o calculo
let a = "a";
let dois = 2;
console.log( a * dois);

//Null> O valor não foi definido
let numeroDados = null;
console.log(numeroDados);

//Undefinid = O javascript informa que não existe valor atribuída a ela

let estouEmCasa;
console.log(estouEmCasa);


// Objeto Literal 

/*
let objetvoLiteral {
propriedade: valor;
}
*/

let meuCarro = {
    marca: 'Mercedes',
    modelo: 'mercedes gla 200',
    ano: 2027,
    cor: 'preto',
};

//arrays
// Nos arrays a contagem dos indices começam do 0

let meusLivros = [
    'Livro1',
    'Livro2',
    'Livro3',
    'Livro4',
    'Livro5',
]

console.log(meuCarro);

//Criando um objeto
let ariel = {
    nome: "Ariel",
    idade: 27.5,
    Solteiro: false,

}

let arredondando = Math.round(ariel.idade);

console.log(ariel);
console.log(arredondando);

console.log(meusLivros[2]);

/////////////////
// Varivaveis //
///////////////
/*
let idade = 10;
console.log(idade);
let altura = 180
console.log (altura);
*/
//Nunca comece uma variavel com um numero ou insira espaço na variavel
//Nunca comece uma variavel com camelCase ex: NomeCompleto, só pode nomeCompleto


/////////////////
// CONSTANTES //
/////////////////
/* Quando voce usa o tipo "let", voce consegue trocar o valor da variavel diversas vezes
quando voce utilizar o "const" voce não pode mudar os valores
let muda os valor
const não muda os valores
*/
/*
let valorIngressoAdulto = 20;
valorIngressoAdulto = 30;

console.log(valorIngressoAdulto);
*/

/////////////////
// TIPOS PRIMITIVOS //
/////////////////

/* Há 2 tipos -  Os de referencia e os valores
Valores: 


let nome = 'Ariel'; //Tipo String literal
let idade = 27; //Tipo number literal
let estaAprovado = true; //Boolean   true / false
let sobrenome = undefined // underfined, sem deinifição
let corSelecionado = null // Redefinir um valor, voce usa para que seha inserido um valor a ser selecionado



console.log(nome);
console.log(idade);
console.log(estaAprovado);
console.log(sobrenome);
console.log(corSelecionado);
*/


///////////////////////////////////////////////
// TIPO DE OBJETIVOS - REFERENCIAS - ARRAYS //
/////////////////////////////////////////////
/*

let nome = 'Ariel'; //Tipo String literal
let idade = 27; //Tipo number literal
let estaAprovado = true; //Boolean   true / false
let sobrenome = undefined // underfined, sem deinifição
let corSelecionado = null // Redefinir um valor, voce usa para que seha inserido um valor a ser selecionado

//Criando um objeto
let pessoa = {
    nome: 'Ariel',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'Pellegrino',
    time: 'Palmeiras',
    namorada: 'danyelle'
};

console.log(pessoa);

*/


///////////////
//  ARRAYS ///
/////////////
/*
//  um conjusto de informações que podem ser acessadas como indices

// Voce consegue inteserir qualquer tipo de dados, string, numer, boolean...
//Lembrando que o array tbm é um objetvo
let familia = [26,46,50,17,'Ariel',true];

// Para acessar o dado da array, voce insere o numero da coluna, lembrando que começa por 0, ex: (0,1,2,3..)
console.log(familia[5]);
//lenght define o tamanho do objeto
console.log(familia.length);
*/


////////////////
//  FUNÇÕES ///
//////////////
//para nomear uma função voce começa colocando um verbo e depois um substantivo
//exemplo: resetacor, alterartamanho
//Para declarar: function resetaCor(){};

//Declara o valor da variacel
//let corSite = "Azul";

//declara a função resetaCor
//function resetaCor() {
//  corSite = "";
//};

//chama a variavel para saber se esta puxando "azul"
//console.log(corSite);

//chamando a função
//resetaCor();
//console.log(corSite);


/////////////////////////////
////// PARAMETROS //////////
///////////////////////////

/*
let corSite = "Azul";

//declara a função resetaCor
function resetaCor(cor,tonalidade) {
    corSite = cor  + tonalidade;
};
console.log(corSite);
resetaCor("Vermelho");
console.log(corSite);
resetaCor("Verde");
console.log(corSite);
resetaCor("Verde"," claro");
console.log(corSite);
*/

///////////////////////////////////
////// TIPOS DE FUNÇÕES //////////
/////////////////////////////////
//Há 2 tipos de funções no javascript
// a Primeira realiza uma tarefa e não devolve nada
// a segunda realiza uma tarefa e devolve um valor


//Realiza e não devolve
/*
function dizerNome() {
    console.log('Ariel Pellegrino');
}

dizerNome();

function multiplicar(valor) {
    return valor* 2;
}

let resultado = multiplicar(5);
console.log(resultado);
*/

///////////////////////////////////
////// OPERADORES ////////////////
/////////////////////////////////

/* 
Operadores aritimeticos (matematicos)
Operadores de atribuição
Operadores de comparação
Operadores de logicos
Operadores Bitwise
*/

// OPERADORES ARITIMETICOS (MATEMATICOS)
/*
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario / salario); 
console.log(salario * salario);
console.log(5 ** 2); //exponencial
*/
// ++ incremento
// -- decremento
/*
let idade = 18;
console.log(idade++);
console.log(idade);
console.log(--idade);
console.log(idade);
*/

//OPERADORES DE ATRIBUIÇÃO

/*
let valorTeclado = 100;
//valorTeclado = valorTeclado + valorTeclado
valorTeclado += valorTeclado
console.log(valorTeclado);
*/

//OPERADORES DE IGUALDADE
//ha 2 tipos
// igualdade restrito ( 1 === 1);
// igualdade solto (1 == 1);
/*
console.log(1 == 2); // com 2 "==" voce faz uma comparação não assertiva
console.log (1 === 1); // com 3 "===" voce faz uma comparação assertiva e exclusiva
*/


//OPERADORE TERNARIO
// Quando voce quer fazer comparações 
// É como se fosse um IF ELSE
/*
let pontos = 99;
let tipo = pontos >= 100 ? 'premium' : 'comum';
console.log(tipo);
*/
//OPERADORES LOGICOS
// São para tomar decisões baseadas em condições mutliplas
// São 3 sendo: end, or, not

// 1 - e (&&) - Retorna TRUE se os dois operadndos forem true
//console.log(true && false);
/*
let maiorIdade = true;
let carteira = true;
let aplicar = maiorIdade && carteira;

console.log(aplicar);
*/
//2 - ou (||) - Retorna true se um dos operadores forem true
/*let maiorIdade = true;
let carteira = true;
let aplicar = maiorIdade || carteira;

console.log(aplicar);
*/

//3 - operador NOT (!)
/*
let maiorIdade = false;
let carteira = false;
let aplicar = maiorIdade || carteira;
console.log('pode aplicar', aplicar);
let candidatoRecusado = !aplicar;
console.log('candidato recusado', candidatoRecusado);
*/

///////////////////////////////////
////// COMPARAÇÕES NÃO BOLEANOS //
/////////////////////////////////

//falsy = underfined, null, 0, false, '', NaN (not a number), calculados matematicos que resultam em valaores não compativeis, valores invalidos
//Truth = Não é nenhum acima

//////////////////////////////
////// IF ELSE SWITCH CASE //
////////////////////////////

//Se a hora estiver entre as 6h até as 12h - bom dia
//Se estiver entre as 12h até as 18h - boa tarde
//Se não for nenhum dos casos, boa noite - boa noite

//sintaxe 
/*
if (condicao){
    //codido a ser executado
}

else if (outraCondicao){
    //codigo a ser executado
}

else{
    //codigo a ser executado
}
*/
/*
let hora = 12;

if  (hora > 6 && hora < 12){
    console.log("bom dia!");
}

else if (hora >= 12 && hora < 18){
    console.log("Boa tarde!");
}

else {
    console.log("boa noite!");
}
*/

//////////////////////////////
////// SWITCH E CASE ////////
////////////////////////////
/*
let permissao;
permissao = 'diretor';

switch (permissao) {
    case 'comum':
        console.log('usuário comum');
        break;

    case 'gerente':
        console.log('usuário gerente');
        break;

    case 'diretor':
        console.log('usuário diretor');
        break;

    default:
        console.log('usuário não reconhecido');
}
*/

//////////////////////////////
////// LAÇO / LOOP FOR //////
////////////////////////////

// Há 5 loops em JS, sendo eles:
// 1 - for
// 2 - While
// 3 - do..while
// 4 - For..IN
// 5 - for..of

for (let i = 0; i < 5; i++){
    console.log('Ariel Pellegrino', i)
}




////////////// LOOP /////////////////
/*
início​: determina em qual número o contador deve iniciar. Não se esqueça de
criar uma variável para guardar esse valor!

condição de parada​: determina em qual número o contador deve parar.
Devemos criar uma condicional. Exemplo: contador < 10

incrementador: para cada vez que o loop é executado, nós alteramos o número do contador, adicionando +1. Por padrão utilizamos o operador ++.


for (inicio; condição de parada; incrementador)


--------------------------------------------
Inserir uma variavel no meio do texto, para isso voce 
*/

























