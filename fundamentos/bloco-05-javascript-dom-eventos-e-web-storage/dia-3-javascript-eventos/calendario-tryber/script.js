const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holyday = [24, 25, 31];
const friday = [4, 11, 18, 25];
const days = document.getElementById('days');
const buttons = document.querySelector('.buttons-container');
const myTasks = document.querySelector('.my-tasks');
const btnAdd = document.getElementById('btn-add');
const textInput = document.getElementById('task-input');

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
        weekDaysList.appendChild(createElement('li', '', '', weekDays[index]));
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

function createElement(element, className = '', id = '', innerHTML = '') {
    const newElement = document.createElement(element);
    if(className) {
        newElement.className = className;    
    }
    if(id) {
        newElement.id = id;    
    }
    if(innerHTML) {
        newElement.innerHTML = innerHTML;
    }

    return newElement;
}

for (let i = 0; i <= dezDaysList.length; i += 1) {
    const day = createElement('li', 'day', '', dezDaysList[i]);
    if(holyday.includes(dezDaysList[i])) {
        day.classList.add('holiday');
    }
    if(friday.includes(dezDaysList[i])) {
        day.classList.add('friday');
    }
    days.appendChild(day);
}

buttons.appendChild(createElement('button', '', 'btn-holiday', 'Feriados'));
buttons.appendChild(createElement('button', '', 'btn-friday', 'Sexta-feira'));

const btnHolyday = document.getElementById('btn-holiday');
btnHolyday.addEventListener('click', () => {
    const day = document.getElementsByClassName('holiday');

    for (let i = 0; i < day.length; i += 1) {
        day[i].classList.toggle('holydayChecked');
    }
});

const btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', () => {
    const day = document.getElementsByClassName('friday');

    for (let i = 0; i < day.length; i += 1) {
        if(day[i].innerText !== 'SEXTOU o/') {
            day[i].innerText = 'SEXTOU o/';
        } else {
            day[i].innerText = friday[i];
        }
    }
});

const day = document.getElementsByClassName('day');
for (let i = 0; i < day.length; i += 1) {
    day[i].addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'scale(1.5)';
        e.target.style.textShadow = '0 5px 15px rgba(0,0,0,0.5)';
        e.target.style.transition = 'transform 0.6s ease-in-out';
        e.target.style.transition = 'box-shadow 0.2s ease-in-out';
    });
    day[i].addEventListener('mouseout', (e) => {
        e.target.style.transform = 'unset';
        e.target.style.textShadow = 'unset';
        e.target.style.transition = 'unset';
        e.target.style.transition = 'unset';
    });
}

btnAdd.addEventListener('click', () => {
    if(!textInput.value) {
        return;
    }

    const newTask = createElement('span', '', '', textInput.value);
    myTasks.appendChild(newTask);
    textInput.value = '';
});

function colorTask(color) {
    const newTask = createElement('div', 'task');
    newTask.style.backgroundColor = color;
    myTasks.appendChild(newTask);
}

colorTask('rgb(1,128,0)');

const task = document.querySelector('.task');
task.addEventListener('click', () => {
    task.classList.toggle('selected');
});


function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();