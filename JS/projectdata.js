//Must keep objects consistent otherwise I need to redo objects in every js file

//description is only for tables
//While longDescription is for cards
//This may change in the future.
export const projectLinks = [
  {
    name: "Hidden Lab",
    description: "A game about a slime escaping a lab",
    longDescriptionRef: "/Text/Projects/HiddenLab/HiddenLabDesc.txt",
    longDescription: "",
    href: "/Pages/Projects/HiddenLab.html", 
    imgref: "/Assets/Images/Projects/HiddenLab/HiddenLabProjectCardImage.png", 
    complete: true,
    dateStarted: "14/04/2025",
    githubLink: "https://github.com/Acriid/HiddenLabGame"
  },
  {
    name: "Cult Game", 
    description: "A game about a detective investigating a cult",
    longDescriptionRef: "/Text/Projects/CultGame/CultGameDesc.txt",
    longDescription: "",
    href: "/Pages/Projects/CultGame.html", 
    imgref: "/Assets/Images/Projects/CultGame/StartingScene.png", 
    complete: true,
    dateStarted: "14/06/2025",
    githubLink:"https://github.com/Acriid/CultGame"
  },
  {
    name: "Game Prototypes", 
    description: "Prototypes for games made for a game design course",
    longDescriptionRef: "/Text/Projects/Game Prototypes/GamePrototypesDesc.txt",
    longDescription: "",
    href: "/Pages/Projects/GamePrototypes.html", 
    imgref: "/Assets/Images/Projects/Temp/FairyMagic.jpg", 
    complete: true,
    dateStarted: "04/02/2026"
  },
  {
    name: "This Website", 
    description: "The website is constantly updating and developing",
    longDescriptionRef: "/Text/Projects/ThisWebsite/ThisWebsiteDesc.txt",
    longDescription: "",
    href: "/Pages/Projects/ThisWebsite.html", 
    imgref: "/Assets/Images/Projects/Temp/VoidDevastator.png", 
    complete: false,
    dateStarted: "07/04/2026"
  },
];

export async function PreloadProjectDescriptions()
{
    const promises = projectLinks.map(async project =>
    {
        try
        {
            const response = await fetch(project.longDescriptionRef);

            if (!response.ok)
            {
                throw new Error("Could not load description");
            }

            project.longDescription = await response.text();
        }
        catch(error)
        {
            console.error(
                `Failed to load description for ${project.name}`,
                error
            );

            project.longDescription = "";
        }
    });

    await Promise.all(promises);
}