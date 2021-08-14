//Condicional Switch - Comparação de valores especificos

let diaSemana = "3";

if (diaSemana === 0) {
    console.log("hoje é domingo");
} else if (diaSemana === 1) {
    console.log("hoje é segunda");
} else if (diaSemana === 2) {
    console.log("hoje é terceira feira");
} else if (diaSemana === 3) {
    console.log("hoje é quarta feira");
} else if (diaSemana === 4) {
    console.log("hoje é quinta feira");
} else if (diaSemana === 5) {
    console.log("hoje é sexta feira");
} else if (diaSemana === 6){
    console.log("hoje é sabado");
} else {
    console.log("hoje é  -- ");
}

let dia  = "";
            switch (diaSemana) {
                        case 0:
                                    dia = "Domingo"
                                    break;
                        case 1:
                                    dia = "Segunda"
                                    break;
                        case 2:
                                    dia = "Terça"
                                    break;
                        case 3:
                                     dia = "quarta"
                                     break;
                        case 4:
                                     dia = "Quinta"
                                     break;
                        case 5:
                                     dia = "Sexta"
                                     break;
                        case 6:
                                     dia = "Domingo"
                                     break;

                        default:
                             dia = " -- ";
}
console.log(`hoje é ${dia}`);