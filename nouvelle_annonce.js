import { BienImmobilier } from "./BienImmobilier.js";

const init = function () {

    var maison = document.querySelector(".maison");
    var immeuble = document.querySelector(".immeuble");
    var terrain = document.querySelector(".terrain");
    var titre = document.querySelector(".titre");
    var adresse = document.querySelector(".adresse");
    var surface = document.querySelector(".surface");
    var nombre_pieces = document.querySelector(".nombre_pieces");
    var description = document.querySelector(".description");
    var prix = document.querySelector(".prix");
    var bouton = document.querySelector(".bouton");


    //Bouton valider
    bouton.addEventListener("click", () => {
        var titreValue = document.querySelector(".titre_input").value;
        var adresseValue = document.querySelector(".adresse_input").value;
        var surfaceValue = document.querySelector(".surface_input").value;
        var nombrePiecesValue = document.querySelector(".nombre_pieces_input").value;
        var descriptionValue = document.querySelector(".description_input").value;
        var prixValue = document.querySelector(".prix_input").value;
        var typeBienValue = document.querySelector(".selector").value;

        if (titreValue !== "") {

            const bien = new BienImmobilier(crypto.randomUUID(), titreValue, descriptionValue, prixValue, adresseValue, surfaceValue, typeBienValue);

            putInLocalStorage(bien);

        }

    });

    console.log(putInLocalStorage);


    //Pour mettre dans le localStorage
    function putInLocalStorage(bien) {
        const tableEnregistrement = JSON.parse(localStorage.getItem("tableEnregistrement") || "[]");

        tableEnregistrement.push(bien);

        localStorage.setItem("tableEnregistrement", JSON.stringify(tableEnregistrement));

    }


}


window.onload = init;


