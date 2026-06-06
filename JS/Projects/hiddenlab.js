import { projectLinks } from "/JS/projectdata.js";
const hiddenLab = projectLinks.find(project => project.name === "Hidden Lab");

const paragraph1 = document.getElementById("paragraph1");
const paragraph2 = document.getElementById("paragraph2");
const paragraph3 = document.getElementById("paragraph3");

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

ShowImage(image1,"/Assets/Images/Projects/HiddenLab/MainMenu.png", "Main menu of HiddenLab");
ShowImage(image2,"/Assets/Images/Projects/HiddenLab/StartingPoint.png", "Starting point of the game");
ShowImage(image3,"/Assets/Images/Projects/HiddenLab/Reactor.png", "Reactor from the game");
function ShowImage(pageElement, imageReference, altText)
{
    pageElement.innerHTML = `<img src=${imageReference} alt="${altText}" class="project-card">`;
}

fetch("/Text/Projects/HiddenLab/Paragraph1.txt")
    .then(response => response.text())
    .then(data => {
        paragraph1.textContent = data
    })
    .catch(error =>{
        console.error("Could not load Paragraph1.txt");
    });


fetch("/Text/Projects/HiddenLab/Paragraph2.txt")
    .then(response => response.text())
    .then(data => {
        paragraph2.textContent = data
    })
    .catch(error =>{
        console.error("Could not load Paragraph2.txt");
    });

fetch("/Text/Projects/HiddenLab/Paragraph3.txt")
    .then(response => response.text())
    .then(data => {
        paragraph3.textContent = data
    })
    .catch(error =>{
        console.error("Could not load Paragraph3.txt");
    });


const githubButton = document.getElementById("github-button");

githubButton.onclick = function(){
    window.open(hiddenLab.githubLink, "_blank", "noopener,noreferrer");
};