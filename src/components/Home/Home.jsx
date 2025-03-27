import React from "react";
import { NavLink } from "react-router-dom";

export default  function Home(){
    return(
<>
<div className= "">
    <h1 className="text-center mt-36 -ml-30 mr-75 text-6xl text-yellow-400 font-bold">Hi there, </h1>
    <h2 className="text-center mt-5 -ml-40 text-6xl text-yellow-400 font-bold">I am Ayush Bansal</h2>
    <h3 className="text-center mt-8 -ml-33 text-4xl text-red-800 font-bold mr-35">I like Coding and stuff!!</h3>
    <br />
    <br />
    <NavLink to="/About" className='text-white bg-blue-900 p-2 ml-75 rounded-2xl hover:bg-red-700'>
      About Me→
    </NavLink>
</div>
</>
    )
}