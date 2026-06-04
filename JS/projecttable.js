const table = document.getElementById("table");
const sortHeader = document.getElementById("sort-name");

import { projectLinks } from "/JS/projectdata.js";




function MakeTableEntry(rowData,table){
    const row = table.insertRow();

    // Project Name cell
    const nameCell = row.insertCell();

    const link = document.createElement("a");
    link.href = rowData.href;
    link.textContent = rowData.name;

    nameCell.appendChild(link);

    // Other cells
    const descriptionCell = row.insertCell();
    descriptionCell.textContent = rowData.description;

    const statusCell = row.insertCell();
    if(rowData.complete)
    {
        statusCell.textContent = "Complete";
    }
    else
    {
        statusCell.textContent = "Ongoing";
    }

    const dateCell = row.insertCell();
    dateCell.textContent = rowData.dateStarted;

    [descriptionCell, statusCell, dateCell].forEach(cell => {
        cell.classList.add("body-text-small");
    });
}

function RenderTable(projects,table)
{
    // Remove all rows except header
    while (table.rows.length > 1)
    {
        table.deleteRow(1);
    }

    // Re-add rows
    projects.forEach(project => {
        MakeTableEntry(project, table);
    });
}

//Sort table by name

let ascending = true;

sortHeader.addEventListener("click", () =>
{
    projectLinks.sort((a, b) =>
    {
        return ascending
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
    });

    ascending = !ascending;


    sortHeader.textContent = ascending
        ? "Project Name ▼"
        : "Project Name ▲";

    RenderTable(projectLinks,table);
});


RenderTable(projectLinks,table);