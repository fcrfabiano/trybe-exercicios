const peao = {
    movimento: {
        1: "Só anda uma casa por vez",
        2: "Quando ainda não foi movido, pode pular uma casa",
        3: "Come uma casa na diagonal"
    } 
};

const torre = {
    movimento: {
        1: "Anda na horizontal, quantas casas quiser",
        2: "Anda na vertical, quantas casasn quiser"
    }
};

const bispo = {
    movimento: {
        1: "Anda na diagonal, somente na cor da casa em que começou"
    }
};

const cavalo = {
    movimento: {
        1: "Anda em L, sendo pula duas casa e vira uma para qualquer lado",
        2: "Anda em L, sendo anda uma, vira e anda mais duas",
        3: "Ele pode pular qualquer peça",
        4: "Só come se o local onde parar coincidir com o local da peça alvo"
    }
};

const rei = {
    movimento: {
        1: "Anda uma casa em qualquer direção",
        2: "Não pode ficar em posição de risco, senão é obrigado a sair"
    }
};

const rainha = {
    movimento: {
        1: "Anda quantas casas quiser para qualquer lado"
    }
};

const pecas = {
    peao,
    torre,
    bispo,
    cavalo,
    rei,
    rainha
};

function checkPeca(peca) {
    switch (peca) {
        case "peao":
            return pecas.peao;
        break;
        case "torre":
            return pecas.torre;
        break;
        case "bispo":
            return pecas.bispo;
        break;
        case "cavalo":
            return pecas.cavalo;
        break;
        case "rei":
            return pecas.rei;
        break;
        case "rainha":
            return pecas.rainha;
        break;
        default:
            return "Peça inválida"
        break;
    }
}

console.log(checkPeca("a"));