const page = window.location.pathname;

//Add new NavLink for each new page added
const navLinks = [
  { id: "navButton1", label: "About",    href: "/Pages/about.html"    },
  { id: "navButton2", label: "Home",     href: "/index.html"          },
  { id: "navButton3", label: "Projects", href: "/Pages/projects.html" },
];

navLinks.forEach(({ id, label, href }) => {
  const btn = document.getElementById(id);
  btn.textContent = label;

  btn.onclick = () => { window.location.href = href; };

  if (page.includes(href)) btn.classList.add("active");
});