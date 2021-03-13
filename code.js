// Fight Simulator

// Personnage

class Personnage {
    constructor(pseudo, classe, sante, attaque) {
        this.pseudo     = pseudo;
        this.classe     = classe;
        this.sante      = sante;
        this.attaque    = attaque;
        this.niveau     = 1;
    }

    evoluer() {
        this.level ++;
        console.log(this.pseudo + " passe au niveau " + this.niveau);
    }

    verifierSante() {
        if(this.sante <= 0) {
            this.sante = 0;
            console.log(this.pseudo + " a perdu.");
        }
    }

    get informations() {
        console.log(this.pseudo + " (" + this.classe + ") a " + this.sante + " points de vie et est au niveau " + this.niveau);
    }
}

// Magicien

class Magicien extends Personnage {
    constructor(pseudo) {
        super(pseudo, "magicien", 170, 90);
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant un sort " + this.attaque + " dégâts");
        personnage.evoluer();
        personnage.verifierSante();
    }

    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes" + personnage.pseudo + " (" + this.attaque + " * 5 dégâts )");
        personnage.evoluer();
        personnage.verifierSante();
    }
}

// Guerrier

class Guerrier extends Personnage {
    constructor(pseudo) {
        super(pseudo, "guerrier", 350, 50);
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son épée ( " + this.attaque + " dégâts )");
        personnage.evoluer();
        personnage.verifierSante();
    }

    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial haches de guerre" + personnage.pseudo + " (" + this.attaque + " * 5 dégâts )");
        personnage.evoluer();
        personnage.verifierSante();
    }
}

merlin = new Magicien('Merlin');
console.log(merlin.informations);
batman = new Guerrier("Batman");
console.log(batman.informations);
merlin.attaquer(batman);
console.log(batman.informations);
batman.attaquer(merlin);
console.log(merlin.informations);
merlin.coupSpecial(batman);