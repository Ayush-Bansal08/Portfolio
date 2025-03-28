import React from "react";
import { NavLink } from "react-router-dom";

function Projects(){
    return(
<> 
<div className="bg-gray-600 w-70 ml-60 text-center mt-15 hover:scale-100 hover:shadow-2xl hover:shadow-purple-500">
<a href="https://ayush-bansal08.github.io">
<img src="https://st2.depositphotos.com/1032577/6582/i/950/depositphotos_65828845-stock-photo-portfolio-written-on-notebook.jpg" alt="" />
</a>
<h1 className="text-white font-bold">My first project was a basic personal profile page using HTML,CSS.</h1>
</div>

<div className="w-70 ml-160 mb-150 mt-[-230px] bg-gray-700 text-center hover:scale-100 hover:shadow-2xl hover:shadow-purple-500">
<a href="https://ayush-bansal08.github.io/Netflix/">
<img src="https://jobs.netflix.com/static/images/Netflix-Social-Rectangle.png" alt="" />
</a>
<h2 className="text-white font-bold">This is a project made using HYML,CSS,JAVASCRIPT. This project is not completed fully but i tried to make a similar login page just like Netflix. Here i made a cursor such that it changes colour every time it moves an inch.</h2>
</div>

<div></div>

</>
    )

}

export default Projects
