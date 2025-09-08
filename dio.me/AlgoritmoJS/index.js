let nomeHeroi, nivelHeroi;

nomeHeroi = "Gojira";
nivelHeroi = 88700;

if (nivelHeroi < 1000) {
    console.log ("O heroi de nome " + nomeHeroi + " esta no nivel " + nivelHeroi + " e é um heroi nível Ferro.");
} else if (nivelHeroi < 2000) { 
    console.log ("O heroi de nome " + nomeHeroi + " esta no nivel " + nivelHeroi + " e é um heroi nível Bronze.");
} else if (nivelHeroi < 5000) {
    console.log ("O heroi de nome " + nomeHeroi + " esta no nivel " + nivelHeroi + " e é um heroi nível Prata.");
} else if (nivelHeroi < 7000) {
    console.log ("O heroi de nome " + nomeHeroi + " esta no nivel " + nivelHeroi + " e é um heroi nível Ouro.");
} else if (nivelHeroi < 8000) {
    console.log ("O heroi de nome " + nomeHeroi + " esta no nivel " + nivelHeroi + " e é um heroi nível Platina.");
} else if (nivelHeroi < 9000) {
    console.log ("O heroi de nome " + nomeHeroi + " esta no nivel " + nivelHeroi + " e é um heroi nível Ascendente.");
} else if (nivelHeroi <= 10000) {
    console.log ("O heroi de nome " + nomeHeroi + " esta no nivel " + nivelHeroi + " e é um heroi nível Imortal.");
} else {
    console.log ("O heroi de nome " + nomeHeroi + " esta no nivel " + nivelHeroi + " e é um heroi nível Radiante."); 
}