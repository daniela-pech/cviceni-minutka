console.log('funguju!');

const budik = document.querySelector('.alarm');

const cas = prompt('Kolik vteřin má uplynout, než začne zvonit?');
const sekundy = cas * 1000;

const zvuk = document.querySelector('audio');

const zvoneni = () => {
  budik.classList.add('alarm--ring');
  zvuk.play();
};

const spustitZvoneni = setTimeout(zvoneni, sekundy);

const tlacitko = document.querySelector('button');
const vypnoutBudik = () => {
  clearTimeout(spustitZvoneni);
};
tlacitko.addEventListener('click', vypnoutBudik);
