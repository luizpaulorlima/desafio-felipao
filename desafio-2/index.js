main();

function main() {
    let saldoVitorias = calcularSaldoDeVitorias(110, 2);
    lugarDoRank(saldoVitorias);
}

function calcularSaldoDeVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

function lugarDoRank(saldoVitorias) {
    let nivelDoHeroi;

    if (saldoVitorias <= 10) {
        nivelDoHeroi = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivelDoHeroi = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivelDoHeroi = "Prata";
    } else if (saldoVitorias <= 80) {
        nivelDoHeroi = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivelDoHeroi = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivelDoHeroi = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivelDoHeroi = "Imortal";
    }

    console.log("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nível de " + nivelDoHeroi);
}
