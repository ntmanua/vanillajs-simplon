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

function cacherSection() {
    sectionDwayne.style.display='none';
    sectionVin.style.display='none';
    sectionImen.style.display='none';
    sectionJessica.style.display='none';
    sectionZita.style.display='none';
}
window.addEventListener('load', () => {
    cacherSection();
    sectionImen.style.display='block';
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

for (let i = 0; i < 5; i++) {
    const partie = document.createElement('div');

    partie.classList.add(`partieCouleur${i}`);
    partie.style.width = largeurPartie + 'px';
    partie.style.height = colorImg.height + 'px';

    partie.style.backgroundImage = 'url("' + colorImg.src + '")';
    partie.style.backgroundPositionX = -i * largeurPartie + 'px';

    conteneur.appendChild(partie);
}

partieDwayne = document.querySelector('.partie0');
partieVin = document.querySelector('.partie1');
partieImen = document.querySelector('.partie2');
partieJessica = document.querySelector('.partie3');
partieZita = document.querySelector('.partie4');

partieDwayneCouleur = document.querySelector('.partieCouleur0');
partieVinCouleur = document.querySelector('.partieCouleur1');
partieImenCouleur = document.querySelector('.partieCouleur2');
partieJessicaCouleur = document.querySelector('.partieCouleur3');
partieZitaCouleur = document.querySelector('.partieCouleur4');

function cacherPartieCouleur() {
    partieDwayneCouleur.style.display='none';
    partieVinCouleur.style.display='none';
    partieImenCouleur.style.display='none';
    partieJessicaCouleur.style.display='none';
    partieZitaCouleur.style.display='none';
}

cacherPartieCouleur();

partieDwayne.insertAdjacentElement('afterend', sectionDwayne);
partieVin.insertAdjacentElement('afterend', sectionVin);
partieImen.insertAdjacentElement('afterend', sectionImen);
partieJessica.insertAdjacentElement('afterend', sectionJessica);
partieZita.insertAdjacentElement('afterend', sectionZita);



partieDwayne.addEventListener('click', () => {
    if(sectionDwayne.style.display !== 'none'){
        sectionDwayne.style.display = 'none';
    } else {
        cacherSection();
        sectionDwayne.style.display = 'block';
    }
});

if (sectionDwayne.style.display == 'block') {
    partieDwayneCouleur.style.display = 'block';
    conteneur.replaceChild(partieDwayneCouleur, partieDwayne);
}

partieVin.addEventListener('click', () => {
    if(sectionVin.style.display!== 'none'){
        sectionVin.style.display = 'none';
    } else {
        cacherSection();
        sectionVin.style.display = 'block';
    }
});

partieImen.addEventListener('click', () => {
    if(sectionImen.style.display!== 'none'){
        sectionImen.style.display = 'none';
    } else {
        cacherSection();
        sectionImen.style.display = 'block';
    }
});

partieJessica.addEventListener('click', () => {
    if(sectionJessica.style.display!== 'none'){
        sectionJessica.style.display = 'none';
    } else {
        cacherSection();
        sectionJessica.style.display = 'block';
    }
});

partieZita.addEventListener('click', () => {
    if(sectionZita.style.display!== 'none'){
        sectionZita.style.display = 'none';
    } else {
        cacherSection();
        sectionZita.style.display = 'block';
    }
});
