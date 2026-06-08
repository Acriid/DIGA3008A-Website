import { BASE_PATH } from "./General/config.js";
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
    alt: "A test tube used in the game HiddenLab", 
    complete: true,
    dateStarted: "2025-04-14",
    githubLink: "https://github.com/Acriid/HiddenLabGame"
  },
  {
    name: "Cult Game", 
    description: "A game about a detective investigating a cult",
    longDescriptionRef: "/Text/Projects/CultGame/CultGameDesc.txt",
    longDescription: "",
    href: "/Pages/Projects/CultGame.html", 
    imgref: "/Assets/Images/Projects/CultGame/StartingScene.png",
    alt: "The starting scene of Cult Game",  
    complete: true,
    dateStarted: "2025-06-14",
    githubLink:"https://github.com/Acriid/CultGame"
  },
  {
    name: "Game Prototypes", 
    description: "Prototypes for games made for a game design course",
    longDescriptionRef: "/Text/Projects/Game Prototypes/GamePrototypesDesc.txt",
    longDescription: "",
    href: "/Pages/Projects/GamePrototypes.html", 
    imgref: "/Assets/Images/Projects/Game Prototypes/ContaminatedRoom.png", 
    alt: "A contaminated room from Game Prototypes", 
    complete: true,
    dateStarted: "2026-02-04",
    githubLink:"https://github.com/Acriid/unity-assignment-projects"
  },
  {
    name: "This Website", 
    description: "The website is constantly updating and developing",
    longDescriptionRef: "/Text/Projects/ThisWebsite/ThisWebsiteDesc.txt",
    longDescription: "",
    href: "/Pages/Projects/ThisWebsite.html", 
    imgref: "/Assets/Images/Projects/This Website/Title.png",
    alt: "The title This Website", 
    complete: false,
    dateStarted: "2026-04-07",
    githubLink:"https://github.com/Acriid/DIGA3008A-Website"
  },
];

export async function PreloadProjectDescriptions()
{
    const promises = projectLinks.map(async project =>
    {
        try
        {
            const response = await fetch(BASE_PATH + project.longDescriptionRef);

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