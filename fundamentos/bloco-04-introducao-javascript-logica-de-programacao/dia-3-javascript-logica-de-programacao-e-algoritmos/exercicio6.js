function triangulo(tamanho) {
    let matriz = [];

    for (let a = 0; a <= tamanho; a += 1) {
        for (let b = 0; b < a; b += 1) {
            matriz.push("*");
        }
        matriz.push("\n");
    }

    const matrizRetorno = matriz.join("");

    console.log(matrizRetorno);
}

triangulo(5);