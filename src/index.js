let nomeHeroi = "Luiz"
let experienciaHeroi = 10001

let nivelDoHeroi;

if (experienciaHeroi <= 1000){
    nivelDoHeroi = "Ferro";
} else if(experienciaHeroi <= 2000){
    nivelDoHeroi = "Bronze"
} else if(experienciaHeroi <= 5000){
    nivelDoHeroi = "Prata"
} else if(experienciaHeroi <= 7000){
    nivelDoHeroi = "Ouro"
} else if(experienciaHeroi <= 8000){
    nivelDoHeroi = "Platina"
} else if(experienciaHeroi <= 9000){
    nivelDoHeroi = "Ascedente"
} else if(experienciaHeroi <= 10000){
    nivelDoHeroi = "Imortal"
} else if (experienciaHeroi >= 10001){
    nivelDoHeroi = "Radiante"
} 

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelDoHeroi)