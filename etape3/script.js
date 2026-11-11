
"use strict"; // Slide 51 : utiliser le mode strict.

// Slide 40 : déclarer un tableau d'objets.
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Slide 51 : déclarer une variable avec let et l'initialiser à 0.
let lignes = 0;


// Fonction doInsertRowTable
function doInsertRowTable(num, nom, prenom, points) {

    // Slides 61-64 : retrouver un élément HTML par son identifiant.
    const container = document.getElementById("table_container");

    // Slides 66-69 : retrouver le tbody par son nom de balise.
    // [0] permet de récupérer le premier élément de la collection.
    const table = container.getElementsByTagName("tbody")[0];

    // Slide 104 : créer une nouvelle ligne HTML.
    const row = document.createElement("tr");

    // Slide 104 : créer les cinq cellules.
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Slide 91 : innerText permet d'insérer du texte simple.
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Slides 104 et 107 : créer une case à cocher et définir son attribut.
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // Slide 107 : affecter les classes CSS aux cellules.
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Slide 98 : ajouter les cellules à la ligne.
    row.append(col1, col2, col3, col4, col5);

    // Slide 98 : ajouter la ligne au corps du tableau.
    table.append(row);
}


// Fonction doInsert
function doInsert(nom, prenom, points) {

    // Slide 41 : incrémenter le compteur lignes.
    lignes++;

    // Slide 45 : appeler la fonction doInsertRowTable.
    doInsertRowTable(lignes, nom, prenom, points);
}


// Fonction init
function init() {

    // Slide 44 : parcourir le tableau persons avec une boucle.
    for (const person of persons) {

        // Slides 39-40 : accéder aux propriétés de chaque objet.
        doInsert(person.nom, person.prenom, person.points);
    }
}


// Slide 45 : appeler la fonction init.
init();


// Fonction consoleTableau
function consoleTableau() {

    // Slide 33 : afficher le contenu dans la console.
    console.log(persons);
}
