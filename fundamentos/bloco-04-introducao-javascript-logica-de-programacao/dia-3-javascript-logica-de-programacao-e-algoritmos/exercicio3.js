let array = ['java', 'javascript', 'python', 'html', 'css', 'nodejs', 'reactjs', 'react-native'];

function mergeSort(lista) {
    const meio = lista.length / 2; // Pega metade do tamanho da Lista
    
    if (lista.length < 2) { // Se o tamanho da lista for menor que dois, retorna a lista
        return lista;
    }

    const left = lista.splice(0, meio); // Divido a lista em duas, esquerda e direita
    return merge(mergeSort(left), mergeSort(lista)); // Combinando as duas arrays
}

function merge(left, right) {
    let arr = []; // Declaro array em branco para guardar a lista ordenada

    while (right.length && left.length) { // Enquanto a lista da esquerda e da direita forem maior que 0
        if (left[0].length < right[0].length) { // Se o elemento 0 da lista da esquerda for menor que o da direita
            arr.push(left.shift()); // Removo o primeiro item da lista da esquerda e adiciono ao arr
        } else {
            arr.push(right.shift()); // Senão, removo o primeiro item da lista da direita e adiciono ao arr
        }
    }

    return [ ...arr, ...right, ...left];
}

const lista_ordenada = mergeSort(array);
console.log(lista_ordenada.pop());