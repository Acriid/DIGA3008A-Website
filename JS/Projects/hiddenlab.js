const paragraph1 = document.getElementById("paragraph1");

fetch("/Text/Projects/HiddenLab/Paragraph1.txt")
    .then(response => response.text())
    .then(data => {
        paragraph1.textContent = data
    })
    .catch(error =>{
        console.error("Could not load Paragraph1.txt");
    });