//SECTIONS
const sectionDwayne = document.getElementById('dwayne');
const sectionVin = document.getElementById('vin');
const sectionImen = document.getElementById('imen');
const sectionJessica = document.getElementById('jessica');
const sectionZita = document.getElementById('zita');

let tableSection = [sectionDwayne, sectionVin, sectionImen, sectionJessica, sectionZita];

function cacherSection(table) {
    for (let section of table) {
        section.style.display = 'none';
    }
}

cacherSection(tableSection);

//IMAGES
const bwImg = new Image();
const colorImg = new Image();
bwImg.src = './images/bw-image.jpg';
colorImg.src = './images/color-image.jpg';

const largeurImage = bwImg.width;
const largeurPartie = bwImg.width/5;

//Decoupe image noir et blanc
bwImg.onload = function() {
  for (let i = 0; i < 5; i++) {
    const partie = document.createElement('div');

    partie.classList.add(`partie${i}`);
    partie.style.width = largeurPartie + 'px';
    partie.style.height = bwImg.height + 'px';

    partie.style.backgroundImage = 'url("' + bwImg.src + '")';
    partie.style.backgroundPositionX = -i * largeurPartie + 'px';

    conteneur.appendChild(partie);
  }
};
const imgDwayne = document.querySelector('.partie0');
const imgVin = document.querySelector('.partie1');
const imgImen = document.querySelector('.partie2');
const imgJessica = document.querySelector('.partie3');
const imgZita = document.querySelector('.partie4');



//Decoupe image couleur
colorImg.onload = function() {
  for (let i = 0; i < 5; i++) {
    const partie = document.createElement('div');

    partie.classList.add(`partieCouleur${i}`);
    partie.style.width = largeurPartie + 'px';
    partie.style.height = colorImg.height + 'px';

    partie.style.backgroundImage = 'url("' + colorImg.src + '")';
    partie.style.backgroundPositionX = -i * largeurPartie + 'px';

    conteneur.appendChild(partie);
  }
};

const imgDwayneCouleur = document.querySelector('.partieCouleur0');
const imgVinCouleur = document.querySelector('.partieCouleur1');
const imgImenCouleur = document.querySelector('.partieCouleur2');
const imgJessicaCouleur = document.querySelector('.partieCouleur3');
const imgZitaCouleur = document.querySelector('.partieCouleur4');


window.onload = function() {
