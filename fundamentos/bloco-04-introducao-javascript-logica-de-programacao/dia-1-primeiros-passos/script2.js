const nota = 100;

if (nota >= 80 && nota <= 100) {
    console.log("Parabéns, você foi aprovada(o)!");
    return;
}
if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
    return;
}
if (nota < 60 && nota >= 0) {
    console.log("Você foi reprovada(o)");
    return;
} else {
    console.log("Nota inválida");
}