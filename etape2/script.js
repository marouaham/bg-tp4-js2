
"use strict"; // Slide 51 : mode strict.

function doInsertRowTable(num, nom, prenom, points) {

    // Slide 57 : retrouver un élément HTML avant de faire une opération.
    // Slides 61-64 : retrouver un élément par son identifiant.
    const container = document.getElementById("table_container");

    // Slides 66-69 : retrouver les éléments par nom de balise.
    // [0] permet de récupérer le premier élément de la collection.
    const table = container.getElementsByTagName("table")[0];
    const tbody = table.getElementsByTagName("tbody")[0];

    // Slides 104-105 : créer des éléments HTML.
    const row = document.createElement("tr");

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Slide 91 : innerText permet d'ajouter du texte simple.
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Slides 104-105 : créer une case à cocher.
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Slide 103 : ajouter un élément enfant à la fin.
    col5.appendChild(checkbox);

    // Slide 107 : définir les attributs class des cellules.
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Slide 103 : ajouter les cellules à la ligne.
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

    // Slide 103 : ajouter la ligne au corps du tableau.
    tbody.appendChild(row);
}

