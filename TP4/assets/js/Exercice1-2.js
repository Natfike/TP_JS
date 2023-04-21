//Exercice 1.1

// a
const personne = {
    nom:"Jonathan",
    prenom:"Gucchi",
    age:19,
    taille:"1m62",
    qui: function(){
        console.log(this.nom,this.prenom);
    },
    quimaj:  function(){
        console.log(this.nom.toUpperCase(),this.prenom.toUpperCase());
    },
    quimajmaj:  function(){
        console.log(this.nom.toUpperCase(),this.prenom.toUpperCase(), "!!!!!!!!!!!");
    }
};

// b
const personne2 = {};
personne2.nom = "Erol";
personne2.prenom = "Terrol";
personne2.age = "20";
personne2.taille = "1m80";

// c
const x = personne2;
x.nom = "Eloi";
// Lorsque les champs de x sont modifiés, les champs de personne2 le sont aussi.

// Exercice 1.2

// a - b
for (const property in personne ){
    console.log(property);
}
Object.keys(personne2);
Object.getOwnPropertyNames(x);

// c
personne.poids=100;

//d
delete personne.poids;


// Exercice 1.3
// a
const sports = {sport1 : "Badminton", sport2 : "Volley", sport3 : "Basket"};
personne.sport = sports;

// b
console.log(personne.sport);

// c
for (const spor in personne.sport ){
    console.log(personne.sport[spor]);
}

// d
personne.sport = {nom:"Badminton", equipement:["raquette","volant","fillet-mignon","Jonathan","bandeau","claquette-chaussette"]};
for (let i in personne.sport){
    console.log(personne.sport[i]);
}

// 1.4

// a - b
personne.qui();
personne.quimaj();
personne.quimajmaj();

// 1.5

// a

// b
console.log(JSON.stringify(personne));

// c
personne.date = Date();
console.log(JSON.stringify(personne));

//d
personne.quelage = function(){
    return this.age;
}
console.log(JSON.stringify(personne.quelage))
// Ceci produit un "undefined"


// EXERCICE 2 //

// 2.1

// a
personne.langue = "francais"
console.log(personne.langue)

// b
personne.langue = "english"

// c
// get fullName() {} est appelé comme une propriété en lecture
// alors que fullName : function(){} st une méthode de l'objet

// d
const obj = {counter: 0};

Object.defineProperty(obj, 'reset', {
    get: function() {
        this.counter = 0;
    }
});

Object.defineProperty(obj, 'inc', {
    get: function() {
        this.counter++;
    }
});

Object.defineProperty(obj, 'dec', {
    get: function() {
        this.counter--;
    }
});

Object.defineProperty(obj, 'add', {
    set: function(value) {
        this.counter += value;
    }
});

Object.defineProperty(obj, 'subs', {
    set: function(value) {
        this.counter -= value;
    }
});

// 2.2
// a

function Personne(nom,prenom,age,couleurYeux){
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.couleur = couleurYeux;
}

const newPersonne = new Personne("Michel","NoIdea",3,"magenta")
console.log(newPersonne)

// b

const papa = new Personne("Jean", "Michel", 45, "none");
const maman = new Personne("Marie", "Ana", 42,"red");

// c

Personne.prototype.name = function(){
    console.log(this.nom, this.prenom)
}

maman.name();

// d
Personne.prototype.changename = function(nom){
    this.nom = nom;
}
maman.changename("Boris");
maman.name();

// e
// L'objet Math n'est pas instanciable. On utilise
// simplement ses méthodes, comme random, round, abs...

// 3
// a
Personne.prototype.nationalite = "française";

// b
// Already done in 2.2.c, here is the code :
/*
Personne.prototype.name = function(){
    console.log(this.nom, this.prenom)
}
*/

// 3.1
// a
function Personne2(nom,prenom){
    this.nom = nom;
    this.prenom = prenom;
    this.estomac = [];
}

// b
Personne2.prototype.manger = function (nourriture){
    if(this.estomac.length<10){
        this.estomac.push(nourriture);
    } else {
        console.log("Désolé mais j'ai déjà trop mangé, va voir Luffy !");
    }
}

// c
Personne2.prototype.digestionOK = function(){
    this.estomac = [];
}

// d
Personne2.prototype.name = function(){
    console.log(this.nom,this.prenom)
}

// 3.2
// a
function Car(modele, conso100km) {
    this.modele = modele;
    this.conso100km = conso100km;
    this.reservoirlitre = 0;
    this.compteurkm = 0;
}

// b
Car.prototype.addfuel = function(nblt){
    this.reservoirlitre += nblt;
}

// c
Car.prototype.drive = function(nbkm){
    if (nbkm > this.reservoirlitre){
        this.compteurkm += this.reservoirlitre;
        console.log("Dans" + this.reservoirlitre + "km, je serai a cours de carburant :(");
        this.reservoirlitre = 0;
    } else {
        this.compteurkm += nbkm;
        this.reservoirlitre -= nbkm;
    }
}

// 3.3
// a
function Baby(nom, prenom, age, couleurYeux) {
    Personne.call(this, nom, prenom, age, couleurYeux);
    this.langage = "";
}

// b
Baby.prototype.jouerFavori = "Pokemon cards";

// c
Baby.prototype.jouer = function(){
    console.log("Je joue avec mon jouet favori : " + this.jouerFavori);
}
