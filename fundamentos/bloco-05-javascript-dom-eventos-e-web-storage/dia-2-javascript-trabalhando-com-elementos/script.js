const ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
ondeVoceEsta.parentElement.style.backgroundColor = "red";

ondeVoceEsta.firstElementChild.innerText = "Primeiro Filho";

const pai = document.getElementById("pai");
const primeiroFilho = pai.firstElementChild;

console.log(ondeVoceEsta.previousElementSibling);
console.log((ondeVoceEsta.nextSibling.textContent = "Texto mudou!"));
console.log(ondeVoceEsta.nextElementSibling);
console.log(pai.lastElementChild.lastElementChild);

function createElement(element, parent, className) {
  const newElement = document.createElement(element);
  newElement.className = className;
  parent.append(newElement);
}

createElement("section", pai, "irmaoOndeEstou");
createElement("section", ondeVoceEsta, "filhoOndeVoceEsta");
