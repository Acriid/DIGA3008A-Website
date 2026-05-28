const currentCard1 = document.getElementById("current-card1");
const currentCard2 = document.getElementById("current-card2");
const currentCard3 = document.getElementById("current-card3");

const previousCard1 = document.getElementById("previous-card1");
const previousCard2 = document.getElementById("previous-card2");
const previousCard3 = document.getElementById("previous-card3");


import { projectLinks } from "/JS/projectdata.js";

console.log(projectLinks);


const ongoingProjects = projectLinks.filter(project => project.complete === false);
const completeProjects = projectLinks.filter(project => project.complete === true);

console.log(ongoingProjects);
console.log(completeProjects);


function PickRandomIndexFromList(projectList){
    return Math.floor(Math.random() * projectList.length);
}

function ShowProjectOnCard(project,card){
    card.addEventListener("click", function(){
        window.location.href = project.href;
    });
    card.innerHTML = `<img src= ${project.imgref}
     class="project-card-img">`;
}

ShowProjectOnCard(ongoingProjects[0], currentCard2);