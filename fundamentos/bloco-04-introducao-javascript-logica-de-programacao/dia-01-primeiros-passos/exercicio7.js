function nota(notaNumerica) {
    if (notaNumerica >= 90)
        return "A";
    if (notaNumerica >= 80)
        return "B";
    if (notaNumerica >= 70)
        return "C";
    if (notaNumerica >= 60)
        return "D";
    if (notaNumerica >= 50)
        return "E";
    if (notaNumerica < 50)
        return "F";
}



console.log(nota(70));