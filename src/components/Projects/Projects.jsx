import React from "react";
import { NavLink } from "react-router-dom";

function Projects(){
    return(
<> 
<div className="bg-gray-600 w-50 ml-40 text-center mt-15 hover:scale-100 hover:shadow-2xl hover:shadow-purple-500">
<a href="https://ayush-bansal08.github.io">
<img src="https://up.yimg.com/ib/th?id=OIP.eeo1M11Ox0NSzIcPvcr5gQHaEc&pid=Api&rs=1&c=1&qlt=95&w=201&h=120" alt="" />
</a>
<h1 className="text-white font-bold">My first project was a basic personal profile page using HTML,CSS.</h1>
</div>

<div className="w-70 ml-160 mb-150 mt-[-250px] bg-gray-700 text-center hover:scale-100 hover:shadow-2xl hover:shadow-purple-500">
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
