import { projectLinks } from "/JS/projectdata.js";
import { RenderProjectBody } from "/JS/General/project-body.js";
import { InitializeCollaborators } from "/JS/General/collaborators.js";


const hiddenLab = projectLinks.find(project => project.name === "Hidden Lab");


const githubButton = document.getElementById("github-button");
githubButton.onclick = function(){
    window.open(hiddenLab.githubLink, "_blank", "noopener,noreferrer");
};




function ChooseContentOrder(boolValue)
{
    let returnContent = null;
    if(boolValue)
    {
        returnContent = [
            {type: "paragraph", src:"/Text/Projects/HiddenLab/Paragraph1.txt"},
            {type: "image", src:"/Assets/Images/Projects/HiddenLab/MainMenu.png", alt: "Main menu of HiddenLab"},
            {type: "paragraph", src:"/Text/Projects/HiddenLab/Paragraph2.txt"},
            {type: "image", src:"/Assets/Images/Projects/HiddenLab/StartingPoint.png", alt: "Starting point of the game"},
            {type: "paragraph", src:"/Text/Projects/HiddenLab/Paragraph3.txt"},
            {type: "image", src:"/Assets/Images/Projects/HiddenLab/Reactor.png", alt: "Reactor from the game"},
        ];
        
    }
    else
    {
        returnContent = [
            {type: "paragraph", src:"/Text/Projects/HiddenLab/Paragraph1.txt"},
            {type: "image", src:"/Assets/Images/Projects/HiddenLab/MainMenu.png", alt: "Main menu of HiddenLab"},
            {type: "image", src:"/Assets/Images/Projects/HiddenLab/StartingPoint.png", alt: "Starting point of the game"},
            {type: "paragraph", src:"/Text/Projects/HiddenLab/Paragraph2.txt"},
            {type: "paragraph", src:"/Text/Projects/HiddenLab/Paragraph3.txt"},
            {type: "image", src:"/Assets/Images/Projects/HiddenLab/Reactor.png", alt: "Reactor from the game"},
        ];       
    }

    return returnContent;
}




const bodyContainer = document.getElementById("project-body");

const mediaQuery = window.matchMedia("(max-width: 1000px)");

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
    {name: "Erist-Tsire", github: "https://github.com/Erist-Tsire"},
    {name: "alexM2232", github: "https://github.com/alexM2232"},
];

InitializeCollaborators(collaborators);
