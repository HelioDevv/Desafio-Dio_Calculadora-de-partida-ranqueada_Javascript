let saldoVitoria = calcularRank(98, 8);

let nomeHeroi = "Monkey D. Luffy";

function calcularRank(win, lose){
    return win - lose;
}

function classificarNivel(saldo){
    if(saldo <= 0) return "zero";
    if(saldo === 10) return "Ferro";
    if(saldo >= 11 && saldo <= 20) return "Bronze";
    if(saldo >= 21 && saldo <= 50) return "Prata";
    if(saldo >= 51 && saldo <= 80) return "Ouro";
    if(saldo >= 81 && saldo <= 90) return "Diamante";
    if(saldo >= 91 && saldo <= 100) return "Lendário";
    if(saldo >= 101) return "Imortal";
}

let nivel = classificarNivel(saldoVitoria);

if(nivel === "zero"){
    console.log("");
    console.log(`Você ainda não tem classificação, ${nomeHeroi}`);
}else{
    console.log("");
    console.log(`Parabéns ${nomeHeroi}! Você chegou ao nível de: ${nivel}!!`);
    console.log("");
    console.log(`Seu saldo de vitórias é de: ${saldoVitoria}`)
}