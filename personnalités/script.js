const btnDwayne = document.getElementById('btn-dwayne');
const btnVin = document.getElementById('btn-vin');
const btnImen = document.getElementById('btn-imen');
const btnJessica = document.getElementById('btn-jessica');
const btnZita = document.getElementById('btn-zita');

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

tableImage = [partieDwayne, partieVin, partieImen, partieJessica, partieZita];
tableImageCouleur = [partieDwayneCouleur, partieVinCouleur, partieImenCouleur, partieJessicaCouleur, partieZitaCouleur];

function cacherCouleur(table1, table2) {
    for (let i = 0; i < table1.length; i++) {
        if (table2[i].style.display === 'block') {
            table1[i].style.display = 'block';
            table2[i].replaceWith(table1[i]);
        }
    }
}

// EVENTS ON PICTURE
partieDwayne.addEventListener('click', () => {
    if(sectionDwayne.style.display !== 'none'){
            sectionDwayne.style.display = 'none';
    } else {
        cacherSection();
        cacherCouleur(tableImage, tableImageCouleur);
        sectionDwayne.style.display = 'block';
        partieDwayneCouleur.style.display = 'block';
        partieDwayne.replaceWith(partieDwayneCouleur);
    }
});

partieVin.addEventListener('click', () => {
    if(sectionVin.style.display!== 'none'){
        sectionVin.style.display = 'none';
    } else {
        cacherSection();
        cacherCouleur(tableImage, tableImageCouleur);
        sectionVin.style.display = 'block';
        partieVinCouleur.style.display = 'block';
        partieVin.replaceWith(partieVinCouleur);
    }
});

partieImen.addEventListener('click', () => {
    if(sectionImen.style.display!== 'none'){
        sectionImen.style.display = 'none';
    } else {
        cacherSection();
        cacherCouleur(tableImage, tableImageCouleur);
        sectionImen.style.display = 'block';
        partieImenCouleur.style.display = 'block';
        partieImen.replaceWith(partieImenCouleur);
    }
});

partieJessica.addEventListener('click', () => {
    if(sectionJessica.style.display!== 'none'){
        sectionJessica.style.display = 'none';
    } else {
        cacherSection();
        cacherCouleur(tableImage, tableImageCouleur);
        sectionJessica.style.display = 'block';
        partieJessicaCouleur.style.display = 'block';
        partieJessica.replaceWith(partieJessicaCouleur);
    }
});

partieZita.addEventListener('click', () => {
    if(sectionZita.style.display!== 'none'){
        sectionZita.style.display = 'none';
    } else {
        cacherSection();
        cacherCouleur(tableImage, tableImageCouleur);
        sectionZita.style.display = 'block';
        partieZitaCouleur.style.display = 'block';
        partieZita.replaceWith(partieZitaCouleur);
    }
});


// EVENTS ON BUTTONS

btnDwayne.addEventListener('click', () => {
    if(sectionDwayne.style.display !== 'none'){
        sectionDwayne.style.display = 'none';
    } else {
        cacherSection();
        cacherCouleur(tableImage, tableImageCouleur);
        sectionDwayne.style.display = 'block';
        partieDwayneCouleur.style.display = 'block';
        partieDwayne.replaceWith(partieDwayneCouleur);
    }
});

btnVin.addEventListener('click', () => {
    if(sectionVin.style.display!== 'none'){
        sectionVin.style.display = 'none';
    } else {
        cacherSection();
        cacherCouleur(tableImage, tableImageCouleur);
        sectionVin.style.display = 'block';
        partieVinCouleur.style.display = 'block';
        partieVin.replaceWith(partieVinCouleur);
    }
});

btnImen.addEventListener('click', () => {
    if(sectionImen.style.display!== 'none'){
        sectionImen.style.display = 'none';
    } else {
        cacherSection();
        cacherCouleur(tableImage, tableImageCouleur);
        sectionImen.style.display = 'block';
        partieImenCouleur.style.display = 'block';
        partieImen.replaceWith(partieImenCouleur);
    }
});

btnJessica.addEventListener('click', () => {
    if(sectionJessica.style.display!== 'none'){
        sectionJessica.style.display = 'none';
    } else {
        cacherSection();
        cacherCouleur(tableImage, tableImageCouleur);
        sectionJessica.style.display = 'block';
        partieJessicaCouleur.style.display = 'block';
        partieJessica.replaceWith(partieJessicaCouleur);
    }
});

btnZita.addEventListener('click', () => {
    if(sectionZita.style.display!== 'none'){
        sectionZita.style.display = 'none';
    } else {
        cacherSection();
        cacherCouleur(tableImage, tableImageCouleur);
        sectionZita.style.display = 'block';
        partieZitaCouleur.style.display = 'block';
        partieZita.replaceWith(partieZitaCouleur);
    }
});


