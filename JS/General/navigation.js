import { BASE_PATH } from "./config.js";

const page = window.location.pathname;

// Update links if needed
const navLinks = [
    { id: "navButton1", label: "About",    href: BASE_PATH + "/Pages/about.html"    },
    { id: "navButton2", label: "Home",     href: BASE_PATH + "/index.html"          },
    { id: "navButton3", label: "Projects", href: BASE_PATH + "/Pages/projects.html" },
];


async function InitializeNavigation()
{
    const navContainer = document.getElementById("navigation-container");

    const response = await fetch(BASE_PATH + "/General-HTML/navigation.html");
    navContainer.innerHTML = await response.text();

    navLinks.forEach(({ id, label, href }) =>
    {
        const btn = document.getElementById(id);

        btn.textContent = label;
        btn.onclick = () => window.location.href = href;

        if (page === href)
        {
            btn.classList.add("active");
        }
    });
}

InitializeNavigation();