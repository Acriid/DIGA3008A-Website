const table = document.getElementById("table");
const sortHeader = document.getElementById("sort-name");

const projects = [
    {
        name: "A",
        description: "Description 1",
        status: "Ongoing",
        date: "Today",
        link: "/Pages/Projects/project1.html"
    },
    {
        name: "B",
        description: "Description 2",
        status: "Finished",
        date: "Tomorrow",
        link: "/Pages/Projects/project2.html"
    }
];

let ascending = true;


function MakeTableEntry(rowData,table){
    const row = table.insertRow();

    // Project Name cell
    const nameCell = row.insertCell();

    const link = document.createElement("a");
    link.href = rowData.link;
    link.textContent = rowData.name;

    nameCell.appendChild(link);

    // Other cells
    const descriptionCell = row.insertCell();
    descriptionCell.textContent = rowData.description;

    const statusCell = row.insertCell();
    statusCell.textContent = rowData.status;

    const dateCell = row.insertCell();
    dateCell.textContent = rowData.date;
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


sortHeader.addEventListener("click", () =>
{
    projects.sort((a, b) =>
    {
        return ascending
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
    });

    ascending = !ascending;


    sortHeader.textContent = ascending
        ? "Project Name ▼"
        : "Project Name ▲";

    RenderTable(projects,table);
});


RenderTable(projects,table);