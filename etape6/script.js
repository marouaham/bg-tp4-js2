
"use strict";

// Tableau des personnes
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

let lignes = 0;
let total_points = 0;


// Insérer une ligne dans le tableau HTML
function doInsertRowTable(num, nom, prenom, points) {

    const table = document.getElementById("table_body");

    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");

    cell1.innerText = num;
    cell2.innerText = nom;
    cell3.innerText = prenom;
    cell4.innerText = points;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    cell5.appendChild(checkbox);

    cell1.className = "col_number";
    cell2.className = "col_text";
    cell3.className = "col_text";
    cell4.className = "col_number";
    cell5.className = "col_chkbox";

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);

    table.appendChild(row);
}


// Insérer une personne
function doInsert(nom, prenom, points) {

    lignes++;
    total_points += points;

    doInsertRowTable(lignes, nom, prenom, points);

    update_summary();
}


// Initialisation
function init() {

    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}


// Afficher le tableau persons dans la console
function consoleTableau() {
    console.log(persons);
}


// Mettre à jour le résumé
function update_summary() {

    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Totale point(s)= " + total_points;
}


// Ajouter une nouvelle personne
function doNewData() {

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const points_value = document.getElementById("points").value;

    if (nom === "" || prenom === "" || points_value === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    const points = Number(points_value);

    if (!Number.isFinite(points)) {
        alert("Veuillez saisir un nombre valide !");
        return;
    }

    persons.push({
        nom: nom,
        prenom: prenom,
        points: points
    });

    doInsert(nom, prenom, points);

    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("points").value = "";
}


// Supprimer les lignes sélectionnées
function deleteRow() {

    // Étape 1 : vérifier si le tableau est vide
    if (lignes === 0) {
        alert("Le tableau est vide !");
        return;
    }

    const table = document.getElementById("table_body");

    // Étape 2 : récupérer les checkbox cochées
    const checkboxes = table.querySelectorAll(
        "input[type='checkbox']"
    );

    // Étape 3 : vérifier si une ligne est sélectionnée
    let selection = false;

    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            selection = true;
            break;
        }
    }

    if (!selection) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    // Étape 4 : demander une confirmation
    const confirmation = confirm(
        "Voulez-vous vraiment supprimer les lignes sélectionnées ?"
    );

    if (!confirmation) {
        return;
    }

    // Étape 5 : récupérer toutes les lignes
    const rows = table.querySelectorAll("tr");

    // Étape 6 : parcourir les lignes en ordre inverse
    for (let i = rows.length - 1; i >= 0; i--) {

        const checkbox = rows[i].querySelector(
            "input[type='checkbox']"
        );

        if (checkbox.checked) {

            // Récupérer les points de la 4ème cellule
            const points = Number(rows[i].cells[3].innerText);

            // Soustraire les points du total
            total_points -= points;

            // Décrémenter le nombre de lignes
            lignes--;

            // Supprimer la ligne du tableau HTML
            rows[i].remove();

            // Supprimer la personne correspondante
            persons.splice(i, 1);
        }
    }

    // Renuméroter les lignes restantes
    const remainingRows = table.querySelectorAll("tr");

    for (let i = 0; i < remainingRows.length; i++) {
        remainingRows[i].cells[0].innerText = i + 1;
    }

    // Étape 7 : mettre à jour le résumé
    update_summary();

    alert("Suppression effectuée avec succès !");
}


// Lancer l'initialisation
init();
