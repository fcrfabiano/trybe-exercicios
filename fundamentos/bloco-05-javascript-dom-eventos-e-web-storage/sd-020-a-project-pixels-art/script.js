const black = document.querySelector('.black');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const gray = document.querySelector('.gray');
const deeppink = document.querySelector('.deeppink');
const cyan = document.querySelector('.cyan');
const brown = document.querySelector('.brown');
let color = 'black';
const generateBoard = document.querySelector('#generate-board');
const boardSize = document.getElementById('board-size');
const cores = [
  'black',
  'red',
  'blue',
  'green',
  'gray',
  'deeppink',
  'cyan',
  'brown',
];

const clearBoard = document.getElementById('clear-board');

function sortearCores() {
  const coresSorteadas = new Set();

  coresSorteadas.add(cores[0]);
  while (coresSorteadas.size < 4) {
    const cor = Math.floor(Math.random() * cores.length);

    coresSorteadas.add(cores[cor]);
  }

  return coresSorteadas;
}

function criarPaleta() {
  const coresSorteadas = sortearCores();

  for (const cor of cores) {
    if (!coresSorteadas.has(cor)) {
      const element = document.getElementsByClassName(cor);

      for (let i = 0; i < element.length; i += 1) {
        element[i].remove();
      }
    }
  }
}

generateBoard.addEventListener('click', (e) => {
  e.preventDefault();

  if (boardSize.value) {
    if (boardSize.value > 0 && boardSize.value <= 50) {
      window.onload(boardSize.value);
    }
    if (boardSize.value < 5) {
      window.onload(5);
    }
    if (boardSize.value > 50) {
      window.onload(50);
    }
  } else {
    alert('Board inválido!');
  }
});

function removeBoard() {
  const pixel = document.querySelectorAll('.linha');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].remove();
  }
}

clearBoard.addEventListener('click', (e) => {
  e.preventDefault();

  clear();
});

black.addEventListener('click', (e) => {
  e.preventDefault();

  red.classList.remove('selected');
  blue.classList.remove('selected');
  green.classList.remove('selected');
  gray.classList.remove('selected');
  deeppink.classList.remove('selected');
  cyan.classList.remove('selected');
  brown.classList.remove('selected');

  black.classList.add('selected');
  color = 'black';
});

red.addEventListener('click', (e) => {
  e.preventDefault();

  black.classList.remove('selected');
  blue.classList.remove('selected');
  green.classList.remove('selected');
  gray.classList.remove('selected');
  deeppink.classList.remove('selected');
  cyan.classList.remove('selected');
  brown.classList.remove('selected');

  red.classList.add('selected');
  color = 'red';
});

blue.addEventListener('click', (e) => {
  e.preventDefault();

  black.classList.remove('selected');
  red.classList.remove('selected');
  green.classList.remove('selected');
  gray.classList.remove('selected');
  deeppink.classList.remove('selected');
  cyan.classList.remove('selected');
  brown.classList.remove('selected');

  blue.classList.add('selected');
  color = 'blue';
});

green.addEventListener('click', (e) => {
  e.preventDefault();

  black.classList.remove('selected');
  red.classList.remove('selected');
  blue.classList.remove('selected');
  gray.classList.remove('selected');
  deeppink.classList.remove('selected');
  brown.classList.remove('selected');
  cyan.classList.remove('selected');

  green.classList.add('selected');
  color = 'green';
});

gray.addEventListener('click', (e) => {
  e.preventDefault();

  black.classList.remove('selected');
  red.classList.remove('selected');
  blue.classList.remove('selected');
  green.classList.remove('selected');
  deeppink.classList.remove('selected');
  cyan.classList.remove('selected');
  brown.classList.remove('selected');

  gray.classList.add('selected');
  color = 'gray';
});

deeppink.addEventListener('click', (e) => {
  e.preventDefault();

  black.classList.remove('selected');
  red.classList.remove('selected');
  blue.classList.remove('selected');
  green.classList.remove('selected');
  gray.classList.remove('selected');
  cyan.classList.remove('selected');
  brown.classList.remove('selected');

  deeppink.classList.add('selected');
  color = 'deeppink';
});

cyan.addEventListener('click', (e) => {
  e.preventDefault();

  black.classList.remove('selected');
  red.classList.remove('selected');
  blue.classList.remove('selected');
  green.classList.remove('selected');
  gray.classList.remove('selected');
  deeppink.classList.remove('selected');
  brown.classList.remove('selected');

  cyan.classList.add('selected');
  color = 'cyan';
});

brown.addEventListener('click', (e) => {
  e.preventDefault();

  black.classList.remove('selected');
  red.classList.remove('selected');
  blue.classList.remove('selected');
  green.classList.remove('selected');
  gray.classList.remove('selected');
  deeppink.classList.remove('selected');
  cyan.classList.remove('selected');

  brown.classList.add('selected');
  color = 'brown';
});

window.onload = function (tamanho) {
  const pixel = document.getElementsByClassName('pixel');
  criarPaleta();
  createBoard(5);
  if (tamanho >= 5) {
    removeBoard();
    createBoard(tamanho);
  }

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', () => {
      trocaCor(pixel[i]);
      pixel[i].classList.add(color);
    });
  }
};

function createBoard(tamanho) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let linha = 0; linha < tamanho; linha += 1) {
    const l = createBox('div', 'linha');
    pixelBoard.appendChild(l);
    for (let coluna = 0; coluna < tamanho; coluna += 1) {
      const pixel = createBox('div', 'pixel');
      l.appendChild(pixel);
    }
  }
}

function clear() {
  const pixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    trocaCor(pixel[i]);
  }
}

function trocaCor(elemento) {
  if (elemento.classList.contains('black')) {
    elemento.classList.remove('black');
  }
  if (elemento.classList.contains('red')) {
    elemento.classList.remove('red');
  }
  if (elemento.classList.contains('blue')) {
    elemento.classList.remove('blue');
  }
  if (elemento.classList.contains('green')) {
    elemento.classList.remove('green');
  }
  if (elemento.classList.contains('gray')) {
    elemento.classList.remove('gray');
  }
  if (elemento.classList.contains('deeppink')) {
    elemento.classList.remove('deeppink');
  }
  if (elemento.classList.contains('cyan')) {
    elemento.classList.remove('cyan');
  }
  if (elemento.classList.contains('brown')) {
    elemento.classList.remove('brown');
  }
}

function createBox(element, className = '', id = '') {
  const box = document.createElement(element);

  if (className) {
    box.className = className;
  }

  if (id) {
    box.id = id;
  }

  return box;
}
