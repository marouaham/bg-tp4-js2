
"use strict";

// Tableau des personnes
const persons = [
    {
        nom: "nom-1",
        prenom: "prenom-1",
        points: 5
    },
    {
        nom: "nom-2",
        prenom: "prenom-2",
        points: 10
    },
    {
        nom: "nom-3",
        prenom: "prenom-3",
        points: 15
    }
];

// Variables
let lignes = 0;
let total_points = 0;


// Fonction pour insérer une ligne dans le tableau
function doInsertRowTable(num, nom, prenom, points) {

    const table = document.getElementById("table_body");

    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.className = "col_number";
    cell1.innerText = num;

    const cell2 = document.createElement("td");
    cell2.className = "col_text";
    cell2.innerText = nom;

    const cell3 = document.createElement("td");
    cell3.className = "col_text";
    cell3.innerText = prenom;

    const cell4 = document.createElement("td");
    cell4.className = "col_number";
    cell4.innerText = points;

    const cell5 = document.createElement("td");
    cell5.className = "col_chkbox";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    cell5.appendChild(checkbox);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);

    table.appendChild(row);
}


// Fonction d'insertion
function doInsert(nom, prenom, points) {

    lignes++;

    total_points += points;

    doInsertRowTable(lignes, nom, prenom, points);

    update_summary();
}


// Fonction d'initialisation
function init() {

    for (const person of persons) {

        doInsert(
            person.nom,
            person.prenom,
            person.points
        );
    }
}


// Fonction pour afficher le tableau dans la console
function consoleTableau() {

    console.log(persons);
}


// Fonction de mise à jour du résumé
function update_summary() {

    // Récupérer l'élément id = p1
    let element_lignes = document.getElementById("p1");

    // Récupérer l'élément id = p3
    let element_points = document.getElementById("p3");

    // Afficher le nombre de lignes
    element_lignes.innerText = lignes + " ligne(s)";

    // Afficher le total des points
    element_points.innerText = "Totale point(s)= " + total_points;
}


// Lancer l'initialisation
init();
