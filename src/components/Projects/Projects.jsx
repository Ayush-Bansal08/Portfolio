import React from "react";
import { NavLink } from "react-router-dom";

function Projects(){
    return(
<> 
<div className="bg-gray-600 w-70 ml-40 text-center mt-15 hover:scale-100 hover:shadow-2xl hover:shadow-purple-500">
<a href="https://ayush-bansal08.github.io">
<img src="https://files.oaiusercontent.com/file-Jqy3jUuuA4S3nESunUPqep?se=2025-03-27T12%3A04%3A57Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7d9f3a89-0644-4f6a-ad50-d9eb8e187eb3.webp&sig=By5X5ndY8kkIZ72xkbN14mPSm6w3x03hkUS6u9Pek6c%3D" alt="" />
</a>
<h1 className="text-white font-bold">My first project was a basic personal profile page using HTML,CSS.</h1>
</div>

<div className="w-70 ml-160 mb-150 mt-[-330px] bg-gray-700 text-center hover:scale-100 hover:shadow-2xl hover:shadow-purple-500">
<a href="https://ayush-bansal08.github.io/Netflix/">
<img src="https://files.oaiusercontent.com/file-MXc8pnDHgBHd1K6joNpWGD?se=2025-03-27T12%3A06%3A37Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7ce4217e-a1ce-483c-8900-b4d5be2405d2.webp&sig=qTeWPTUlophmSfKgqdg2gYKz6dk82zTNSs8nRH%2Bg090%3D" alt="" />
</a>
<h2 className="text-white font-bold">This is a project made using HYML,CSS,JAVASCRIPT. This project is not completed fully but i tried to make a similar login page just like Netflix. Here i made a cursor such that it changes colour every time it moves an inch.</h2>
</div>

<div></div>

</>
    )

}

export default Projects
