const projectCard1 = document.getElementById("projectCard1");
const projectCard2 = document.getElementById("projectCard2");
const projectCard3 = document.getElementById("projectCard3");

import { projectLinks } from "/JS/projectdata.js";

function PickRandomProject(projectList){
    return projectList[Math.floor(Math.random() * projectList.length)];
}

function SetProjects(){
    let projectLinksCopy = structuredClone(projectLinks);

   
   
    let randomProject = PickRandomProject(projectLinksCopy);
    projectLinksCopy = projectLinksCopy.filter(project => project.name !== randomProject.name);

    SetCard(projectCard1,randomProject);

    randomProject = PickRandomProject(projectLinksCopy);
    projectLinksCopy = projectLinksCopy.filter(project => project.name !== randomProject.name);

    SetCard(projectCard2,randomProject);

    randomProject = PickRandomProject(projectLinksCopy);
    projectLinksCopy = projectLinksCopy.filter(project => project.name !== randomProject.name);
 
    SetCard(projectCard3,randomProject);

}

function SetCard(card,project){
    card.addEventListener("click", function(){
        window.location.href = project.href;
    });


    card.innerHTML = `
        <img src="${project.imgref}" class="project-img">

        <div class="project-description body-text-small">
            ${project.description}
        </div>
    `;
}
SetProjects();


const projectTitle = document.getElementById("project-title");

projectTitle.addEventListener("click", function(){
        window.location.href = "/Pages/projects.html";
});

//Load file
const aboutParagraph = document.getElementById("about-text");

fetch("/Text/index/aboutme.txt")
    .then(response => response.text())
    .then(data => {
        aboutParagraph.textContent = data
    })
    .catch(error =>{
        console.error("Could not load aboutme.txt");
    });