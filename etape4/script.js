
"use strict"; // Slide 51 : utiliser le mode strict.

// Slide 40 : déclarer un tableau d'objets.
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

// Slide 51 : déclarer et initialiser les variables.
let lignes = 0;
let total_points = 0;


// Fonction pour insérer une ligne dans le tableau
function doInsertRowTable(num, nom, prenom, points) {

    // Slides 61-64 : récupérer un élément par son identifiant.
    const table = document.getElementById("table_body");

    // Slide 104 : créer une nouvelle ligne HTML.
    const row = document.createElement("tr");

    // Slide 104 : créer les cinq cellules.
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

    // Slide 104 : créer une case à cocher.
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Slides 103-105 : ajouter la case à cocher à la cellule.
    cell5.appendChild(checkbox);

    // Slides 103-105 : ajouter les cellules à la ligne.
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);

    // Slides 103-105 : ajouter la ligne au tableau.
    table.appendChild(row);
}


// Fonction d'insertion
function doInsert(nom, prenom, points) {

    // Slide 41 : incrémenter le nombre de lignes.
    lignes++;

    // Slide 41 : additionner les points au total.
    total_points += points;

    // Slide 45 : appeler la fonction d'insertion.
    doInsertRowTable(lignes, nom, prenom, points);

    // Slide 45 : appeler la fonction de mise à jour du résumé.
    update_summary();
}


// Fonction d'initialisation
function init() {

    // Slide 44 : parcourir le tableau avec une boucle.
    for (const person of persons) {

        // Slides 39-40 : accéder aux propriétés de chaque objet.
        doInsert(
            person.nom,
            person.prenom,
            person.points
        );
    }
}


// Fonction pour afficher le tableau dans la console
function consoleTableau() {

    // Slide 33 : afficher le contenu dans la console.
    console.log(persons);
}


// Fonction de mise à jour du résumé
function update_summary() {

    // Slides 61-64 : récupérer l'élément ayant l'id p1.
    const element_lignes = document.getElementById("p1");

    // Slides 61-64 : récupérer l'élément ayant l'id p3.
    const element_points = document.getElementById("p3");

    // Slide 91 : innerText permet de modifier le contenu textuel.
    element_lignes.innerText = lignes + " ligne(s)";

    // Slide 91 : afficher le total des points.
    element_points.innerText = "Totale point(s)= " + total_points;
}


// Appeler la fonction d'initialisation.
init();
