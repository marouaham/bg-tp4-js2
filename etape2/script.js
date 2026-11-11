
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
    row.setAttribute("class", "row");

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

"use strict";

// 1. Tableau des personnes
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// 2. Compteur
let lignes = 0;

// 3. Fonction doInsert
function doInsert(nom, prenom, points) {
    lignes++;
    let num = lignes;

    doInsertRowTable(num, nom, prenom, points);
}

// 4. Fonction init
function init() {
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}

// 5. Afficher persons dans la console
function consoleTableau() {
    console.log(persons);
}

// 6. Initialisation
init();

