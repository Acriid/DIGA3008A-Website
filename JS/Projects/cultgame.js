import { projectLinks } from "/JS/projectdata.js";
import { RenderProjectBody } from "/JS/General/project-body.js";
import { InitializeCollaborators } from "/JS/General/collaborators.js";

//Initialize Button
const cultGame = projectLinks.find(project => project.name === "Cult Game");

const githubButton = document.getElementById("github-button");

githubButton.onclick = function(){
    window.open(cultGame.githubLink, "_blank", "noopener,noreferrer");
};

//Initialize body content
const mediaQuery = window.matchMedia("(max-width: 1000px)");

function ChooseContentOrder(boolValue)
{
    let returnContent = null;
    if(boolValue)
    {
        returnContent = [
            {type: "paragraph", src:"/Text/Projects/CultGame/Paragraph1.txt"},
            {type: "image", src:"/Assets/Images/Projects/CultGame/PauseScreen.png", alt: "Pause Screen of Cult Game"},
            {type: "paragraph", src:"/Text/Projects/CultGame/Paragraph2.txt"},
            {type: "image", src:"/Assets/Images/Projects/CultGame/CultBook.png", alt: "Starting point of the game"},
            {type: "paragraph", src:"/Text/Projects/CultGame/Paragraph3.txt"},
            {type: "image", src:"/Assets/Images/Projects/CultGame/CultRitual.png", alt: "Ritual from the game"},
        ];
        
    }
    else
    {
        returnContent = [
            {type: "paragraph", src:"/Text/Projects/CultGame/Paragraph1.txt"},
            {type: "image", src:"/Assets/Images/Projects/CultGame/PauseScreen.png", alt: "Pause Screen of Cult Game"},
            {type: "image", src:"/Assets/Images/Projects/CultGame/CultBook.png", alt: "Starting point of the game"},
            {type: "paragraph", src:"/Text/Projects/CultGame/Paragraph2.txt"},
            {type: "paragraph", src:"/Text/Projects/CultGame/Paragraph3.txt"},
            {type: "image", src:"/Assets/Images/Projects/CultGame/CultRitual.png", alt: "Ritual from the game"},
        ];       
    }

    return returnContent;
}



const bodyContainer = document.getElementById("project-body");

mediaQuery.addEventListener("change", async (event) =>
{
    bodyContainer.innerHTML = "";

    const content = ChooseContentOrder(event.matches);

    await RenderProjectBody(bodyContainer, content);
});

const content = ChooseContentOrder(mediaQuery.matches);
RenderProjectBody(bodyContainer, content);


//Set Collaborators
const collaborators = [
    {name: "ChuM00n (Chu)", github: "https://github.com/ChuM00n"},
    {name: "Nikhilin", github: "https://github.com/Nikhilin"},
];

InitializeCollaborators(collaborators);