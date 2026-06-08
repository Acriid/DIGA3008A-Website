import { BASE_PATH } from "./config.js";

async function InitializeNavigation()
{
    const footerContainer = document.getElementById("contact-container");

    const response = await fetch(BASE_PATH + "/General-HTML/footer.html");
    footerContainer.innerHTML = await response.text();

};

InitializeNavigation();