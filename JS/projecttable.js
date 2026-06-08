const table = document.getElementById("table");


import { projectLinks } from "/JS/projectdata.js";




function MakeTableEntry(rowData,table){
    const row = table.insertRow();

    // Project Name cell
    const nameCell = row.insertCell();

    const link = document.createElement("button");
    link.onclick = function(){
        window.location.href = rowData.href;
    };
    link.textContent = rowData.name;
    link.classList.add("button");
    link.classList.add("table-button");

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

    //Add time tag for better accessibility
    const dateCell = row.insertCell();

    const timeElement = document.createElement("time");
    timeElement.dateTime = rowData.dateStarted;
    timeElement.textContent = rowData.dateStarted;

    dateCell.appendChild(timeElement);

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

let ascendingName = true;

const sortHeader = document.getElementById("sort-name");

sortHeader.addEventListener("click", () => {
    projectLinks.sort((a, b) => {
        return ascendingName
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
    });

    ascendingName = !ascendingName;


    sortHeader.textContent = ascendingName
        ? "Project Name ▼"
        : "Project Name ▲";

    RenderTable(projectLinks,table);
});


//Sort table by description
let ascendingDescription = true;

const sortDescription = document.getElementById("sort-description");

sortDescription.addEventListener("click", () => {
    projectLinks.sort((a,b) => {
        return ascendingDescription 
        ? a.description.localeCompare(b.description)
        : b.description.localeCompare(a.description);
    });

    ascendingDescription = !ascendingDescription;

    sortDescription.textContent = ascendingDescription
        ? "Project Description ▼"
        : "Project Description ▲";
    RenderTable(projectLinks,table);
});

//Sort table by status
let complete = true;

const sortStatus = document.getElementById("sort-status");

sortStatus.addEventListener("click", () => {
    projectLinks.sort((a, b) => {
        return complete
            ? Number(b.complete) - Number(a.complete)
            : Number(a.complete) - Number(b.complete);
    });

    complete = !complete;

    sortStatus.textContent = complete
        ? "Project Status ▼"
        : "Project Status ▲";

    RenderTable(projectLinks, table);
});


//Sort table by date
let dateSorted = true;

const sortDate = document.getElementById("sort-date");

sortDate.addEventListener("click", () => {
    projectLinks.sort((a, b) => {
        return dateSorted
            ? new Date(a.dateStarted) - new Date(b.dateStarted)
            : new Date(b.dateStarted) - new Date(a.dateStarted);
    });

    dateSorted = !dateSorted;

    sortDate.textContent = dateSorted
        ? "Project Date ▼"
        : "Project Date ▲";

    RenderTable(projectLinks, table);
});


RenderTable(projectLinks,table);


const searchInput = document.getElementById("table-search");
//Checks if search input is in any part of the project and displays that project
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredProjects = projectLinks.filter(project => {
        const searchableText = [
            project.name,
            project.description,
            project.dateStarted,
            project.complete ? "Complete" : "Ongoing"
        ]
        .join(" ")
        .toLowerCase();

        return searchableText.includes(searchTerm);
    });

    RenderTable(filteredProjects, table);
});