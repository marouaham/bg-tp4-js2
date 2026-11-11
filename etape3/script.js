
"use strict";

// Déclarer le tableau persons
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Déclarer et initialiser le compteur lignes
let lignes = 0;


// Fonction doInsertRowTable
function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer le tableau
    const table = document.querySelector("#table_container tbody");

    // Créer une nouvelle ligne
    const row = document.createElement("tr");

    // Créer les cinq colonnes
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplir le contenu des colonnes
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Créer la checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // Affecter les classes
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter les colonnes à la ligne
    row.append(col1, col2, col3, col4, col5);

    // Ajouter la ligne au tableau
    table.append(row);
}


// Fonction doInsert
function doInsert(nom, prenom, points) {

    // Incrémenter le compteur lignes
    lignes++;

    // Insérer la ligne avec son numéro
    doInsertRowTable(lignes, nom, prenom, points);
}


// Fonction init
function init() {

    // Parcourir le tableau persons
    for (const person of persons) {

        doInsert(person.nom, person.prenom, person.points);

    }
}


// Appel de init()
init();


// Fonction consoleTableau
function consoleTableau() {

    console.log(persons);

}
