const projectCard1 = document.getElementById("projectCard1");
const projectCard2 = document.getElementById("projectCard2");
const projectCard3 = document.getElementById("projectCard3");

const projectLinks = [
  {name: "Project 1", href: "/Pages/Projects/project1.html", imgref: "/Assets/Images/Projects/FairyFlight.jpg"},
  {name: "Project 2", href: "/Pages/Projects/project2.html", imgref: "/Assets/Images/Projects/fairy.jpg"},
  {name: "Project 3", href: "/Pages/Projects/project3.html", imgref: "/Assets/Images/Projects/FairyMagic.jpg"},
];
3

function PickRandomProject(projectList){
    return projectList[Math.floor(Math.random() * projectList.length)];
}

function SetProjects(){
    let projectLinksCopy = structuredClone(projectLinks);

   
   
    let randomProject = PickRandomProject(projectLinksCopy);
    projectLinksCopy = projectLinksCopy.filter(project => project.name !== randomProject.name);

    projectCard1.addEventListener("click", function(){
        window.location.href = randomProject.href;
    });
    projectCard1.innerHTML = `<img src= ${randomProject.imgref}
     class="project-img">`;

    randomProject = PickRandomProject(projectLinksCopy);
    projectLinksCopy = projectLinksCopy.filter(project => project.name !== randomProject.name);

    projectCard2.addEventListener("click", function(){
        window.location.href = randomProject.href;
    });
    projectCard2.innerHTML = `<img src= ${randomProject.imgref}
     class="project-img">`;

    randomProject = PickRandomProject(projectLinksCopy);
    projectLinksCopy = projectLinksCopy.filter(project => project.name !== randomProject.name);
 
    projectCard3.addEventListener("click", function(){
        window.location.href = randomProject.href;
    });
    projectCard3.innerHTML = `<img src= ${randomProject.imgref}
     class="project-img">`;

}

SetProjects();


const projectTitle = document.getElementById("project-title");

projectTitle.addEventListener("click", function(){
        window.location.href = "/Pages/projects.html";
});