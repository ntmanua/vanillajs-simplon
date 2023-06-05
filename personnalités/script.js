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

window.addEventListener('load', () => {
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

partieDwayne.insertAdjacentElement('afterend', sectionDwayne);
partieVin.insertAdjacentElement('afterend', sectionVin);
partieImen.insertAdjacentElement('afterend', sectionImen);
partieJessica.insertAdjacentElement('afterend', sectionJessica);
partieZita.insertAdjacentElement('afterend', sectionZita);


partieDwayne.addEventListener('click', () => {
    if(sectionDwayne.style.display !== 'none'){
        sectionDwayne.style.display = 'none';
    } else {
        sectionDwayne.style.display = 'block';
    }
});

partieVin.addEventListener('click', () => {
    if(sectionVin.style.display!== 'none'){
        sectionVin.style.display = 'none';
    } else {
        sectionVin.style.display = 'block';
    }
});

partieImen.addEventListener('click', () => {
    if(sectionImen.style.display!== 'none'){
        sectionImen.style.display = 'none';
    } else {
        sectionImen.style.display = 'block';
    }
});

partieJessica.addEventListener('click', () => {
    if(sectionJessica.style.display!== 'none'){
        sectionJessica.style.display = 'none';
    } else {
        sectionJessica.style.display = 'block';
    }
});

partieZita.addEventListener('click', () => {
    if(sectionZita.style.display!== 'none'){
        sectionZita.style.display = 'none';
    } else {
        sectionZita.style.display = 'block';
    }
});
