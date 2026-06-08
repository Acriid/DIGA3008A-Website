import { BASE_PATH } from "./General/config.js";
import { projectLinks } from "./projectdata.js";
import { PreloadProjectDescriptions } from "./projectdata.js";

//#region Setup
//Current Cards
const currentCard1 = document.getElementById("current-card1");
const currentCard2 = document.getElementById("current-card2");
const currentCard3 = document.getElementById("current-card3");

const currentCards = [
    currentCard1,
    currentCard2,
    currentCard3
];

//Previous Cards
const previousCard1 = document.getElementById("previous-card1");
const previousCard2 = document.getElementById("previous-card2");
const previousCard3 = document.getElementById("previous-card3");

const previousCards = [
    previousCard1,
    previousCard2,
    previousCard3
];

//Buttons
const leftPreviousButton = document.getElementById("left-button-previous");
const rightPreviousButton = document.getElementById("right-button-previous");
const leftCurrentButton = document.getElementById("left-button-current");
const rightCurrentButton = document.getElementById("right-button-current");

const projectTableButton = document.getElementById("project-button");

//ProjectData

const currentProjects = projectLinks.filter(project => project.complete === false);
const completeProjects = projectLinks.filter(project => project.complete === true);
//#endregion


function PickRandomIndexFromList(projectList){
    return Math.floor(Math.random() * projectList.length);
}

//#region card functions
//Set single card
function SetCards(project,card){
    card.onclick = function(){
        window.location.href = BASE_PATH + project.href;
    };


    card.innerHTML = `
        <img src="${BASE_PATH}${project.imgref}" class="project-img">

        <div class="project-title body-text-small">
            ${project.name}
        </div>
        <div class="project-description body-text-small">
            ${project.longDescription}
        </div>
    `;
}

//Goes through all cards and sets them based on current projectIndex
function ShowProjectCards(currentIndex,projectCards,projectsToShow)
{
    if(projectsToShow.length === 0) return;
    for(let i = 0; i < projectCards.length; i++)
    {
        const projectIndex = ChangeNumber(
            currentIndex,
            i,
            0,
            projectsToShow.length - 1
        );

        const selectedProject = projectsToShow[projectIndex];

        SetCards(
            selectedProject,
            projectCards[i]
        );
    }
}
//#endregion

//carousel function
function ChangeNumber(number, increase, min, max)
{
    if(max < min) return min;
    const range = max - min + 1;

    let newNumber = number + increase;

    newNumber = ((newNumber - min) % range + range) % range + min;

    return newNumber;
}

projectTableButton.onclick = function(){
    window.location.href = BASE_PATH + "/Pages/projecttable.html";
};


//Loads descriptions first then loads page
let currentIndex = PickRandomIndexFromList(currentProjects);
let previousIndex = PickRandomIndexFromList(completeProjects);

async function InitializeProjects(){
    await PreloadProjectDescriptions();
    ShowProjectCards(currentIndex,currentCards,currentProjects);
    ShowProjectCards(previousIndex,previousCards,completeProjects);
}

InitializeProjects();




//#region Image carousel buttons
leftPreviousButton.addEventListener("click", function(){
    previousIndex = ChangeNumber(previousIndex,-1,0,completeProjects.length -1);
    ShowProjectCards(previousIndex,previousCards,completeProjects);
});

rightPreviousButton.addEventListener("click", function(){
    previousIndex = ChangeNumber(previousIndex,1,0,completeProjects.length -1);
    ShowProjectCards(previousIndex,previousCards,completeProjects);
});

leftCurrentButton.addEventListener("click", function(){
    currentIndex = ChangeNumber(currentIndex,-1,0,currentProjects.length -1);
    ShowProjectCards(currentIndex,currentCards,currentProjects);
});

rightCurrentButton.addEventListener("click", function(){
    currentIndex = ChangeNumber(currentIndex,1,0,currentProjects.length -1);
    ShowProjectCards(currentIndex,currentCards,currentProjects);
});
//#endregion