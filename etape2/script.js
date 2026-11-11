
"use strict";

// Slide 57 : récupérer un élément HTML puis effectuer une opération.
// Slides 86 et 99-105 : manipulation et ajout des éléments du DOM.

function doInsertRowTable(num, nom, prenom, points) {

    // Slide 57 : récupérer le tableau HTML.
    const table = document.querySelector("#table_container table");

    // Slide 86 : récupérer le corps du tableau.
    const tbody = table.querySelector("tbody");

    // Slide 104 : créer une nouvelle ligne HTML.
    const row = document.createElement("tr");

    // Slide 104 : créer les cellules de la ligne.
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Slide 91 : remplir les cellules avec du texte simple.
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Slide 104 : créer une case à cocher.
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    col5.append(checkbox);

    // Slide 107 : affecter les classes CSS aux cellules.
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Slides 99 et 103 : ajouter les cellules à la ligne.
    row.append(col1);
    row.append(col2);
    row.append(col3);
    row.append(col4);
    row.append(col5);

    // Slide 103 : ajouter la ligne au tableau.
    tbody.append(row);
}
