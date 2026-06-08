//Imports
import { BASE_PATH } from "../General/config.js";
import { projectLinks } from "../projectdata.js";
import { RenderProjectBody } from "../General/project-body.js";
import { InitializeCollaborators } from "../General/collaborators.js";


const gamePrototypes = projectLinks.find(project => project.name === "Game Prototypes");


const githubButton = document.getElementById("github-button");
githubButton.onclick = function(){
    window.open(gamePrototypes.githubLink, "_blank", "noopener,noreferrer");
};




function ChooseContentOrder(boolValue)
{
    let returnContent = null;
    if(boolValue)
    {
        returnContent = [
            {type: "paragraph", src:"/Text/Projects/Game Prototypes/Paragraph1.txt"},
            {type: "image", src:"/Assets/Images/Projects/Game Prototypes/ExamMainMenu.png", 
                alt: "The main menu for the exam prototype"},
            {type: "paragraph", src:"/Text/Projects/Game Prototypes/Paragraph2.txt"},
            {type: "image", src:"/Assets/Images/Projects/Game Prototypes/OriginalPrototype1Map.png", 
                alt: "Map of the original first prototype"},
            {type: "paragraph", src:"/Text/Projects/Game Prototypes/Paragraph3.txt"},
            {type: "image", src:"/Assets/Images/Projects/Game Prototypes/OriginalTutorialMap.png", 
                alt: "Map of the original prototype two tutorial"},
            {type: "paragraph", src:"/Text/Projects/Game Prototypes/Paragraph4.txt"},
            {type: "image", src:"/Assets/Images/Projects/Game Prototypes/EnemyMap.png",
                alt: "A map of the level made to show off the enemy AI"},
            {type: "paragraph", src:"/Text/Projects/Game Prototypes/Paragraph5.txt"},
            {type: "image", src:"/Assets/Images/Projects/Game Prototypes/BinarySpacePartitioningMap.png",
                alt: "A map made by the binary space partitioning algorithm"},
            {type: "paragraph", src:"/Text/Projects/Game Prototypes/Paragraph6.txt"},
            {type: "image", src:"/Assets/Images/Projects/Game Prototypes/ProcedurallyGeneratedMap.png",
                alt: "A procedurally generated map"},
        ];
        
    }
    else
    { 
        returnContent = [
            {type: "paragraph", src:"/Text/Projects/Game Prototypes/Paragraph1.txt"},
            {type: "image", src:"/Assets/Images/Projects/Game Prototypes/ExamMainMenu.png", 
                alt: "The main menu for the exam prototype"},
            {type: "image", src:"/Assets/Images/Projects/Game Prototypes/OriginalPrototype1Map.png", 
                alt: "Map of the original first prototype"},
            {type: "paragraph", src:"/Text/Projects/Game Prototypes/Paragraph2.txt"},
            {type: "paragraph", src:"/Text/Projects/Game Prototypes/Paragraph3.txt"},
            {type: "image", src:"/Assets/Images/Projects/Game Prototypes/OriginalTutorialMap.png", 
                alt: "Map of the original prototype two tutorial"},
            {type: "image", src:"/Assets/Images/Projects/Game Prototypes/EnemyMap.png",
                alt: "A map of the level made to show off the enemy AI"},
            {type: "paragraph", src:"/Text/Projects/Game Prototypes/Paragraph4.txt"},
            {type: "paragraph", src:"/Text/Projects/Game Prototypes/Paragraph5.txt"},
            {type: "image", src:"/Assets/Images/Projects/Game Prototypes/BinarySpacePartitioningMap.png",
                alt: "A map made by the binary space partitioning algorithm"},
            {type: "image", src:"/Assets/Images/Projects/Game Prototypes/ProcedurallyGeneratedMap.png",
                alt: "A procedurally generated map"},
            {type: "paragraph", src:"/Text/Projects/Game Prototypes/Paragraph6.txt"},

        ];    
    }

    return returnContent;
}



//Change content order to match device size
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
