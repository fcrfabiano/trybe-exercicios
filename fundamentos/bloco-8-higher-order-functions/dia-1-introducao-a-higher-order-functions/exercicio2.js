const checarNumero = (numeroApostado, numero) => numero === numeroApostado;

const gerarNumero = (numeroApostado, checarNumero) => {
    const numeroGerado = Math.floor(Math.random() * 5) + 1;
    return checarNumero(numeroApostado, numeroGerado) ? "Parabéns você ganhou" : "Tente novamente";
};

console.log(gerarNumero(1, checarNumero));