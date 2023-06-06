const bwImg = new Image();
bwImg.src = './images/bw-image.jpg';

const colorImg = new Image();
colorImg.src = './images/color-image.jpg';

bwImg.onload = () => {

    const conteneur = document.querySelector('.container');

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
    cacherSection();

    const largeurPartie = bwImg.width/5;

    for (let i = 0; i < 5; i++) {
        const partie = document.createElement('div');

        partie.id = `partie${i}`;
        partie.style.width = largeurPartie + 'px';
        partie.style.height = bwImg.height + 'px';

        partie.style.backgroundImage = 'url("' + bwImg.src + '")';
        partie.style.backgroundPositionX = -i * largeurPartie + 'px';

        conteneur.appendChild(partie);
    }

    for (let i = 0; i < 5; i++) {
        const partie = document.createElement('div');

        partie.id = `partieCouleur${i}`;
        partie.style.width = largeurPartie + 'px';
        partie.style.height = colorImg.height + 'px';

        partie.style.backgroundImage = 'url("' + colorImg.src + '")';
        partie.style.backgroundPositionX = -i * largeurPartie + 'px';

        conteneur.appendChild(partie);
    }

    const partieDwayne = document.getElementById('partie0');
    const partieVin = document.getElementById('partie1');
    const partieImen = document.getElementById('partie2');
    const partieJessica = document.getElementById('partie3');
    const partieZita = document.getElementById('partie4');

    const partieDwayneCouleur = document.getElementById('partieCouleur0');
    const partieVinCouleur = document.getElementById('partieCouleur1');
    const partieImenCouleur = document.getElementById('partieCouleur2');
    const partieJessicaCouleur = document.getElementById('partieCouleur3');
    const partieZitaCouleur = document.getElementById('partieCouleur4');

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

    //ETAT INITIALE
    function etatInitial() {
        sectionImen.style.display = 'block';
        partieImenCouleur.style.display = 'block';
        partieImen.replaceWith(partieImenCouleur);
    }
    etatInitial();

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
            partieDwayneCouleur.replaceWith(partieDwayne);
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
            partieVinCouleur.replaceWith(partieVin);
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
            partieImenCouleur.replaceWith(partieImen);
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
            partieJessicaCouleur.replaceWith(partieJessica);
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
            partieZitaCouleur.replaceWith(partieZita);
        } else {
            cacherSection();
            cacherCouleur(tableImage, tableImageCouleur);
            sectionZita.style.display = 'block';
            partieZitaCouleur.style.display = 'block';
            partieZita.replaceWith(partieZitaCouleur);
        }
    });
};
