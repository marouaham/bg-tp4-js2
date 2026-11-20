
"use strict"; // Slide 51 : mode strict.

// Slide 40 : déclarer un tableau d'objets.
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Slide 51 : déclarer et initialiser les variables.
let lignes = 0;
let total_points = 0;


// Fonction pour insérer une ligne dans le tableau.
function doInsertRowTable(num, nom, prenom, points) {

    // Slides 61-64 : récupérer un élément par son identifiant.
    const table = document.getElementById("table_body");

    // Slides 99-105 : créer les éléments HTML.
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");

    // Slide 91 : modifier le contenu textuel.
    cell1.innerText = num;
    cell2.innerText = nom;
    cell3.innerText = prenom;
    cell4.innerText = points;

    // Créer la case à cocher.
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    cell5.appendChild(checkbox);

    // Affecter les classes CSS.
    cell1.className = "col_number";
    cell2.className = "col_text";
    cell3.className = "col_text";
    cell4.className = "col_number";
    cell5.className = "col_chkbox";

    // Slides 99-105 : ajouter les cellules et la ligne.
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);

    table.appendChild(row);
}


// Fonction d'insertion.
function doInsert(nom, prenom, points) {

    // Mettre à jour les variables.
    lignes++;
    total_points += points;

    // Insérer la nouvelle ligne.
    doInsertRowTable(lignes, nom, prenom, points);

    // Mettre à jour le résumé.
    update_summary();
}


// Fonction d'initialisation.
function init() {

    // Slide 44 : parcourir le tableau.
    for (const person of persons) {

        doInsert(
            person.nom,
            person.prenom,
            person.points
        );
    }
}


// Fonction pour afficher le tableau dans la console.
function consoleTableau() {

    // Slide 33 : afficher les données dans la console.
    console.log(persons);
}


// Fonction de mise à jour du résumé.
function update_summary() {

    // Récupérer les éléments HTML.
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    // Modifier leur contenu.
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Totale point(s)= " + total_points;
}


// Fonction pour ajouter les nouvelles données.
function doNewData() {

    // Récupérer les valeurs des champs de saisie.
    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const points_value = document.getElementById("points").value;

    // Vérifier que les champs ne sont pas vides.
    if (nom === "" || prenom === "" || points_value === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    // Convertir les points en nombre.
    const points = Number(points_value);

    // Vérifier que les points sont un nombre valide.
    if (!Number.isFinite(points)) {
        alert("Veuillez saisir un nombre valide pour les points !");
        return;
    }

    // Insérer la nouvelle personne dans le tableau persons.
    persons.push({
        nom: nom,
        prenom: prenom,
        points: points
    });

    // Insérer les données dans le tableau HTML.
    doInsert(nom, prenom, points);

    // Vider les champs de saisie.
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("points").value = "";
}


// Lancer l'initialisation.
init();
