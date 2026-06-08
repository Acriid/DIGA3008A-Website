const page = window.location.pathname;

// Update links if needed
const navLinks = [
    { id: "navButton1", label: "About",    href: "/Pages/about.html"    },
    { id: "navButton2", label: "Home",     href: "/index.html"          },
    { id: "navButton3", label: "Projects", href: "/Pages/projects.html" },
];


async function InitializeNavigation()
{
    const navContainer = document.getElementById("navigation-container");

    const response = await fetch("/General-HTML/navigation.html");
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