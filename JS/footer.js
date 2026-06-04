async function InitializeNavigation()
{
    const footerContainer = document.getElementById("contact-container");

    const response = await fetch("/General-HTML/footer.html");
    footerContainer.innerHTML = await response.text();

};

InitializeNavigation();