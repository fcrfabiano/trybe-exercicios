function retangulo(base, altura) {
    let matriz = [];

    for (let a = 0; a < altura; a += 1) {
        for (let b = 0; b < base; b += 1) {
            matriz.push("*");
        }
        matriz.push("\n");
    }

    const matrizRetorno = matriz.join("");

    console.log(matrizRetorno);
}

retangulo(5, 5);