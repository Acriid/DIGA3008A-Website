export function InitializeCollaborators(collaborators)
{

    const container =
        document.getElementById("collaborator-container");

    //Sets html
    container.innerHTML = `
        <h2 class="centered-text">Collaborators</h2>
        <div class="collaborators"></div>
    `;

    //Gets html just set
    const collaboratorsDiv =
        container.querySelector(".collaborators");

    //Adds new cards for each collaborator for the project
    collaborators.forEach(collaborator =>
    {
        const card = document.createElement("div");
        card.classList.add("collaborator-card");

        const heading = document.createElement("h3");
        heading.textContent = collaborator.name;

        const githubButton = document.createElement("button");
        githubButton.classList.add(
            "body-text",
            "button",
            "underline-button"
        );
        githubButton.textContent = "GitHub Account";

        githubButton.onclick = () =>
        {
            window.open(
                collaborator.github,
                "_blank",
                "noopener,noreferrer"
            );
        };

        card.appendChild(heading);
        card.appendChild(githubButton);

        collaboratorsDiv.appendChild(card);
    });
}