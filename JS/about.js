import { BASE_PATH } from "./General/config.js";

const aboutText = document.getElementById("biography-text");

fetch(BASE_PATH + "/Text/About/aboutme.txt")
    .then(response => response.text())
    .then(data => {
        aboutText.textContent = data
    })
    .catch(error =>{
        console.error("Could not load aboutme.txt");
    });