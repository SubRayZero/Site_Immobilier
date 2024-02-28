
class BienImmobilier {
    id;
    Titre;
    typeDeBien;
    Description;
    Prix;
    Adresse;
    Surface;
    NomPiece;

    constructor(id, Titre, Description, Prix, Adresse, Surface, NomPiece, typeDeBien) {
        this.id = id;
        this.Titre = Titre;
        this.typeDeBien = typeDeBien;
        this.Description = Description;
        this.Prix = Prix;
        this.Adresse = Adresse;
        this.Surface = Surface;
        this.NomPiece = NomPiece;
    }

    //méthode statique -> permet de travailler sur une instance et non une classe
    //... prend objet et l'étale dans le surobjet (spread objet)
    //prend toute les valeurs de l'autre instance

    static recreateBien(bien) {
        return new BienImmobilier(bien.id, bien.Titre, bien.Description, bien.Prix, bien.Adresse, bien.Surface, bien.NomPiece, bien.typeDeBien);
    }

    //méthode qui permet de créer un élément HTML depuis BienImmobilier
    bienHTML() {
        const cardAnnonce = document.createElement("div");
        cardAnnonce.classList.add("card_annonces");

        cardAnnonce.id = this.id;

        //On dit au JS qu'on va faire du HTML
        cardAnnonce.insertAdjacentHTML("beforeend", `<div class="titre_annonce">${this.Titre}</div>`);
        cardAnnonce.insertAdjacentHTML("beforeend", `<div class="prix_annonce">${this.Prix}</div>`);
        cardAnnonce.insertAdjacentHTML("beforeend", `<div class="description_annonces">${this.Description}</div>`);
        cardAnnonce.insertAdjacentHTML("beforeend", `<div class="location_annonces">${this.Adresse}</div>`);

        return cardAnnonce;

    }


    

}

//export du BienImmobilier
export { BienImmobilier };