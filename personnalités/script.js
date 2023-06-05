// const btnDwayne = document.getElementById('btnDwayne');
// const btnVin = document.getElementById('btnVin');
// const btnImena = document.getElementById('btnImena');
// const btnJessica = document.getElementById('btnJessica');
// const btnZita = document.getElementById('btnZita');

const sectionDwayne = document.getElementById('dwayne');
const sectionVin = document.getElementById('vin');
const sectionImen = document.getElementById('imen');
const sectionJessica = document.getElementById('jessica');
const sectionZita = document.getElementById('zita');

window.addEventListener('load', (event) => {
    sectionDwayne.style.display='none';
    sectionVin.style.display='none';
    sectionImen.style.display='none';
    sectionJessica.style.display='none';
    sectionZita.style.display='none';
});

const conteneur = document.querySelector('.container');
const bwImg = new Image();
const colorImg = new Image();
bwImg.src = './images/bw-image.jpg';
colorImg.src = './images/color-image.jpg';

const largeurImage = bwImg.width;
const largeurPartie = bwImg.width/5;


for (let i = 0; i < 5; i++) {
    const partie = document.createElement('div');

    partie.classList.add(`partie${i}`);
    partie.style.width = largeurPartie + 'px';
    partie.style.height = bwImg.height + 'px';

    partie.style.backgroundImage = 'url("' + bwImg.src + '")';
    partie.style.backgroundPositionX = -i * largeurPartie + 'px';

    conteneur.appendChild(partie);
  }

partieDwayne = document.querySelector('.partie0');
partieVin = document.querySelector('.partie1');
partieImen = document.querySelector('.partie2');
partieJessica = document.querySelector('.partie3');
partieZita = document.querySelector('.partie4');

partieDwayne.addEventListener('click', () => {
    if(sectionDwayne.display != 'none'){
        sectionDwayne.style.display = 'none';
    } else {
        sectionDwayne.style.display = 'block';
    }
});