const btnCriarTarefa = document.getElementById('criar-tarefa');
const tasksList = [];
const listaOrdenada = document.querySelector('#lista-tarefas');

function createElement(element, className = '') {
  const newElement = document.createElement(element);
  if (className) {
    newElement.className = className;
  }

  return newElement;
}

function removeStylesId() {
  const element = document.getElementsByTagName('li');
  for (let i = 0; i < element.length; i += 1) {
    document.querySelectorAll('li')[i].removeAttribute('id');
  }
}

function handleList(e) {
  removeStylesId();
  e.path[0].setAttribute('id', 'active');
}

function handleDblClick(e) {
  e.path[0].classList.toggle('completed');
}

btnCriarTarefa.addEventListener('click', (e) => {
  e.preventDefault();

  const textoTarefa = document.getElementById('texto-tarefa').value;

  if (textoTarefa) {
    const newElement = createElement('li');
    newElement.innerText = textoTarefa;
    newElement.onclick = handleList;
    newElement.ondblclick = handleDblClick;
    listaOrdenada.appendChild(newElement);

    document.getElementById('texto-tarefa').value = '';
  }
});

function handleRemove() {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    li[i].remove();
  }
}

const btnRemove = document.getElementById('apaga-tudo');
btnRemove.addEventListener('click', (e) => {
  e.preventDefault();
  handleRemove();
});

function handleRemoveCompleted() {
  const task = document.querySelectorAll('.completed');
  for (let index = 0; index < task.length; index += 1) {
    listaOrdenada.removeChild(task[index]);
  }
}

const btnRemoveCompleted = document.getElementById('remover-finalizados');
btnRemoveCompleted.addEventListener('click', handleRemoveCompleted);

const btnSaveList = document.getElementById('salvar-tarefas');
btnSaveList.addEventListener('click', (e) => {
  e.preventDefault();
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    const taskName = li[i].innerText;
    const taskClassList = li[i].classList[0];
    const taskIdList = li[i].id;
    const task = {
      taskName,
      taskClassList,
      taskIdList,
    };

    tasksList.push(task);
  }

  localStorage.setItem('list', JSON.stringify(tasksList));
});

window.onload = () => {
  if (typeof (Storage) !== 'undefined') {
    if (localStorage.list) {
      const list = JSON.parse(localStorage.list);

      for (let i = 0; i < list.length; i += 1) {
        const newElement = createElement('li');
        newElement.classList = list[i].taskClassList;
        newElement.id = list[i].taskIdList;
        newElement.innerText = list[i].taskName;

        listaOrdenada.appendChild(newElement);
      }
    }
  } else {
    alert('Sorry! No Web Storage support...');
  }
};

const moverCima = document.querySelector('#mover-cima');

moverCima.addEventListener('click', () => {
  const active = document.getElementById('active');
  if (!active) {
    return;
  }
  const previous = active.previousElementSibling;
  if (previous && previous.tagName === 'LI') {
    previous.before(active);
  }
});

const moverBaixo = document.querySelector('#mover-baixo');

moverBaixo.addEventListener('click', () => {
  const active = document.getElementById('active');
  if (!active) {
    return;
  }
  const next = active.nextElementSibling;
  if (next && next.tagName === 'LI') {
    next.after(active);
  }
});

const btnRemoveActive = document.getElementById('remover-selecionado');

function handleRemoveActive() {
  const task = document.querySelectorAll('#active');
  for (let index = 0; index < task.length; index += 1) {
    listaOrdenada.removeChild(task[index]);
  }
}

btnRemoveActive.addEventListener('click', handleRemoveActive);
