
//import du BienImmobilier
import { BienImmobilier } from "./BienImmobilier.js";


const container = document.querySelector(".container_annonces");
const boutonToutesAnnonces = document.querySelector(".bouton_toutes_annonces");
const boutonImmeuble = document.querySelector(".bouton_immeuble");
const boutonMaison = document.querySelector(".bouton_maison");
const boutonTerrain = document.querySelector(".bouton_terrain");

container.innerHTML = "";

const immeubleLocal = JSON.parse(localStorage.getItem('tableEnregistrement'));

immeubleLocal.forEach(annonces => {

    console.log(annonces);
    container.appendChild(BienImmobilier.recreateBien(annonces).bienHTML());
    
});



//voir toutes les annonces
boutonToutesAnnonces.addEventListener("click", () => {

    container.innerHTML = "";

    const immeubleLocal = JSON.parse(localStorage.getItem('tableEnregistrement'));

    immeubleLocal.forEach(annonces => {

        console.log(annonces);
        container.appendChild(BienImmobilier.recreateBien(annonces).bienHTML());

    });

});


//voir que les annonces immeubles
boutonImmeuble.addEventListener("click", () => {

    container.innerHTML = "";

    const immeuble1 = JSON.parse(localStorage.getItem('tableEnregistrement')).filter(bien => bien.NomPiece === "immeuble");

    immeuble1.forEach(immeuble => {

        console.log(immeuble);
        container.appendChild(BienImmobilier.recreateBien(immeuble).bienHTML());

    });

});

//voir que les annonces maisons
boutonMaison.addEventListener("click", () => {

    container.innerHTML = "";

    const maisonLocal = JSON.parse(localStorage.getItem('tableEnregistrement')).filter(bien => bien.NomPiece === "maison");

    maisonLocal.forEach(maison => {

        console.log(maison);
        container.appendChild(BienImmobilier.recreateBien(maison).bienHTML());

    });

});

//voir que les annonces terrains
boutonTerrain.addEventListener("click", () => {

    container.innerHTML = "";

    const terrainLocal = JSON.parse(localStorage.getItem('tableEnregistrement')).filter(bien => bien.NomPiece === "terrain");

    terrainLocal.forEach(terrain => {

        console.log(terrain);
        container.appendChild(BienImmobilier.recreateBien(terrain).bienHTML());

    });

});













