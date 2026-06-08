import { BASE_PATH } from "../General/config.js";
import { projectLinks } from "../projectdata.js";
import { RenderProjectBody } from "../General/project-body.js";
import { InitializeCollaborators } from "../General/collaborators.js";


const thisWebsite = projectLinks.find(project => project.name === "This Website");


const githubButton = document.getElementById("github-button");
githubButton.onclick = function(){
    window.open(thisWebsite.githubLink, "_blank", "noopener,noreferrer");
};


const bodyContainer = document.getElementById("project-body");

const content = [
    {type: "paragraph", src: BASE_PATH + "/Text/Projects/ThisWebsite/Explanation.txt"},
];

RenderProjectBody(bodyContainer, content);


