const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

// https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/onload função para ler a imagem
function readImage() {
  console.log(this.files, this.files[0]);
  if (this.files && this.files[0]) {
    const file = new FileReader();
    file.onload = (e) => {
      document.getElementById('meme-image').src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}

textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

memeInsert.addEventListener('input', readImage, false);

fire.addEventListener('click', () => {
  memeImageContainer.style.border = '3px dashed red';
});
water.addEventListener('click', () => {
  memeImageContainer.style.border = '5px double blue';
});
earth.addEventListener('click', () => {
  memeImageContainer.style.border = '6px groove green';
});

meme1.addEventListener('click', () => {
  document.getElementById('meme-image').src = './imgs/meme1.png';
});
meme2.addEventListener('click', () => {
  document.getElementById('meme-image').src = './imgs/meme2.png';
});
meme3.addEventListener('click', () => {
  document.getElementById('meme-image').src = './imgs/meme3.png';
});
meme4.addEventListener('click', () => {
  document.getElementById('meme-image').src = './imgs/meme4.png';
});
