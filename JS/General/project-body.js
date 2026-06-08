export async function RenderProjectBody(parent, content)
{
    for (const item of content)
    {
        if (item.type === "paragraph")
        {
            await AddParagraphSection(parent, item.src);
        }
        else if (item.type === "image")
        {
            AddImageSection(
                parent,
                item.src,
                item.alt
            );
        }
    }
}

import { BASE_PATH } from "./config.js";

//Scripts can just take the AddParagraph or AddImage function if needed
export async function AddParagraphSection(parent, textFile)
{
    const container = document.createElement("div");
    container.classList.add("body-text");

    const paragraph = document.createElement("p");

    const response = await fetch(BASE_PATH + textFile);
    paragraph.textContent = await response.text();

    container.appendChild(paragraph);
    parent.appendChild(container);
}

export function AddImageSection(parent, imageFile, altText)
{
    const container = document.createElement("div");
    container.classList.add("project-image");

    const image = document.createElement("img");
    image.src = BASE_PATH + imageFile;
    image.alt = altText;
    image.loading = "lazy";

    container.appendChild(image);
    parent.appendChild(container);
}