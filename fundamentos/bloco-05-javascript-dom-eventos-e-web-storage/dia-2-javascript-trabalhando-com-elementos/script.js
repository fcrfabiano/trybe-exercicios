const ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
ondeVoceEsta.parentElement.style.backgroundColor = "red";

ondeVoceEsta.firstElementChild.innerText = "Primeiro Filho";

const pai = document.getElementById("pai");
const primeiroFilho = pai.firstElementChild;

console.log(ondeVoceEsta.previousElementSibling);
console.log((ondeVoceEsta.nextSibling.textContent = "Texto mudou!"));
console.log(ondeVoceEsta.nextElementSibling);
console.log(pai.lastElementChild.lastElementChild);

function createElement(element, className) {
  const newElement = document.createElement(element);
  newElement.className = className;

  return newElement;
}

pai.appendChild(createElement("section", "irmaoOndeEstou"));
ondeVoceEsta.appendChild(createElement("section", "filhoOndeVoceEsta"));
const irmaoPrimeiroFilhoDoFilho = primeiroFilho.parentElement.appendChild(
  createElement("section", "irmaoPrimeiroFilhoDoFilho")
);
console.log(
  irmaoPrimeiroFilhoDoFilho.previousElementSibling.previousElementSibling
    .previousElementSibling
);

const paiDoPai = document.getElementById("paiDoPai");
const paiRemove = document.querySelectorAll("section");
for (let i = 0; i < paiRemove.length; i += 1) {
  if (
    paiRemove[i].id !== "pai" &&
    paiRemove[i].id !== "elementoOndeVoceEsta" &&
    paiRemove[i].id !== "primeiroFilhoDoFilho"
  ) {
    paiRemove[i].remove();
  }
}
