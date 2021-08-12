

let idade = 17;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes)  && comprouBilhete; 

console.log(`Pode viajar ${podeViajar}`);

/*
let msgMaiorIdade = ""
if (idade >= 18 ){
    msgMaiorIdade = "É maior de idade"
}
else {
    msgMaiorIdade ="É menor de idade"
}
*/

let msgMaiorIdade = (idade >= 18) ? "é maior de idade" : "é menor de idade"
console.log(msgMaiorIdade);











if (!comprouBilhete){
    console.log(`Não Comprou o bilhete`)
}
else {
            
        console.log(msgMaiorIdade);
    }
    
