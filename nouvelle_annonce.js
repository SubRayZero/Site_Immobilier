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



}


class Appartement extends BienImmobilier {
    Etage;
    Ascenseur;

    constructor(id, Titre, Description, Prix, Adresse, Surface, NomPiece, Etage, Ascenseur) {
        super(id, Titre, Description, Prix, Adresse, Surface, NomPiece, "Appartement");


        this.Etage = Etage;
        this.Ascenseur = Ascenseur;



    }
}

class Maison {
    Jardin;
    Garage;

    constructor(id, Titre, Description, Prix, Adresse, Surface, NomPiece, Jardin, Garage) {
        super(id, Titre, Description, Prix, Adresse, Surface, NomPiece);


        this.Jardin = Jardin;
        this.Garage = Garage;


    }
}

class Terrain {
    Isolé;
    Lotissement;

    constructor(id, Titre, Description, Prix, Adresse, Surface, NomPiece, Isolé, Lotissement) {
        super(id, Titre, Description, Prix, Adresse, Surface, NomPiece);


        this.Isolé = Isolé;
        this.Lotissement = Lotissement;


    }
}

