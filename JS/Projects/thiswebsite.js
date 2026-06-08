import { projectLinks } from "/JS/projectdata.js";
import { RenderProjectBody } from "/JS/General/project-body.js";
import { InitializeCollaborators } from "/JS/General/collaborators.js";


const thisWebsite = projectLinks.find(project => project.name === "This Website");


const githubButton = document.getElementById("github-button");
githubButton.onclick = function(){
    window.open(thisWebsite.githubLink, "_blank", "noopener,noreferrer");
};


const bodyContainer = document.getElementById("project-body");

const content = [
    {type: "paragraph", src:"/Text/Projects/ThisWebsite/Explanation.txt"},
];

RenderProjectBody(bodyContainer, content);


