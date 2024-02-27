
//import du BienImmobilier
import { BienImmobilier } from "./BienImmobilier.js";

const init = function () { //Jeu charge à la page



    const container = document.querySelector(".container_annonces");


    JSON.parse(localStorage.getItem("tableEnregistrement") || "[]").forEach(element => {

        container.appendChild(BienImmobilier.recreateBien(element).bienHTML());

    });

}

window.onload = init;

