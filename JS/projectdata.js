//Must keep objects consistent otherwise I need to redo objects in every js file

//description is only for tables
//While longDescription is for cards
//This may change in the future.
export const projectLinks = [
  {
    name: "Hidden Lab",
    description: "A game about a slime escaping a lab",
    longDescriptionRef: "/Text/Projects/Project 1/project1LongDesc.txt",
    longDescription: "",
    href: "/Pages/Projects/project1.html", 
    imgref: "/Assets/Images/Projects/Temp/FairyFlight.jpg", 
    complete: true,
    dateStarted: "DD/MM/YY"
  },
  {
    name: "Cult Game", 
    description: "A game about a detective investigating a cult",
    longDescriptionRef: "/Text/Projects/project2.txt",
    longDescription: "",
    href: "/Pages/Projects/project2.html", 
    imgref: "/Assets/Images/Projects/Temp/fairy.jpg", 
    complete: true,
    dateStarted: "DD/MM/YY"
  },
  {
    name: "Project 3", 
    description: "Description 3",
    longDescriptionRef: "/Text/Projects/project3.txt",
    longDescription: "",
    href: "/Pages/Projects/project3.html", 
    imgref: "/Assets/Images/Projects/Temp/FairyMagic.jpg", 
    complete: false,
    dateStarted: "DD/MM/YY"
  },
  {
    name: "This Website", 
    description: "The website is constantly updating and developing",
    longDescriptionRef: "/Text/Projects/project4.txt",
    longDescription: "",
    href: "/Pages/Projects/project4.html", 
    imgref: "/Assets/Images/Projects/Temp/VoidDevastator.png", 
    complete: false,
    dateStarted: "DD/MM/YY"
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