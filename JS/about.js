const aboutText = document.getElementById("biography-text");

fetch("/Text/About/aboutme.txt")
    .then(response => response.text())
    .then(data => {
        aboutText.textContent = data
    })
    .catch(error =>{
        console.error("Could not load aboutme.txt");
    });