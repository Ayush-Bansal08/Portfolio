import React from "react";
import { NavLink } from "react-router-dom";

<<<<<<< HEAD
function Projects() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 p-8 bg-black">
        {/* Project 1 */}
        <div className="w-80 bg-gray-700 text-center rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300">
          <a href="https://ayush-bansal08.github.io/Netflix/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://i.ytimg.com/vi/_JlEGi8yHKI/maxresdefault.jpg"
              alt="netflix"
              className="w-full h-48 object-cover"
            />
          </a>
          <h2 className="text-white font-bold p-4 text-sm">
            This is a project made using HTML, CSS, and JavaScript. It replicates a Netflix login page. It features a custom cursor that changes color every time it moves an inch.
          </h2>
        </div>

        {/* Project 2 */}
        <div className="w-80 bg-gray-700 text-center rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300">
          <a href="https://passwordgenerator-blond-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://images.pexels.com/photos/17155842/pexels-photo-17155842/free-photo-of-finger-scan.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="password"
              className="w-full h-48 object-cover"
            />
          </a>
          <h2 className="text-white font-bold p-4 text-sm">
            The Password Generator is a web tool for generating secure, customizable passwords. Users can set length and include uppercase, lowercase, numbers, and symbols.
          </h2>
        </div>

        {/* Project 3 */}
        <div className="w-80 bg-gray-700 text-center rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300">
          <a href="https://web3-netflix-clone-six.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*x8f-F0WuPfULS68Kuwqmfg.png"
              alt="web3 netflix"
              className="w-full h-48 object-cover"
            />
          </a>
          <h2 className="text-white font-bold p-4 text-sm">
            A Web3 Netflix-style platform using NFX token. Smart contracts (Solidity) handle payments and access. Integrated blockchain with Ethers.js and Web3.js.
          </h2>
        </div>
=======
function Projects(){
    return(
<> 
<div className="bg-gray-600 w-70 ml-20 text-center mt-9 hover:scale-100 hover:shadow-2xl hover:shadow-purple-500">
<a href="https://ayush-bansal08.github.io">
<img src="https://st2.depositphotos.com/1032577/6582/i/950/depositphotos_65828845-stock-photo-portfolio-written-on-notebook.jpg" alt="" />
</a>
<h1 className="text-white font-bold">My first project was a basic personal profile page using HTML,CSS.</h1>
</div>

<div className="w-70 ml-127 mb-135 mt-[-240px] bg-gray-700 text-center hover:scale-100 hover:shadow-2xl hover:shadow-purple-500">
<a href="https://ayush-bansal08.github.io/Netflix/">
<img src="https://jobs.netflix.com/static/images/Netflix-Social-Rectangle.png" alt="" />
</a>
<h2 className="text-white font-bold">This is a project made using HYML,CSS,JAVASCRIPT. This project is not completed fully but i tried to make a similar login page just like Netflix. Here i made a cursor such that it changes colour every time it moves an inch.</h2>
</div>

<div className="w-70 ml-230 mb-135  mt-[-825px] bg-gray-700 text-center hover:scale-100 hover:shadow-2xl hover:shadow-purple-500">
<a href="https://passwordgenerator-blond-chi.vercel.app/">
<img src="https://img.freepik.com/free-photo/flat-lay-laptop-with-ethernet-cables-notebook-with-password_23-2148578080.jpg?ga=GA1.1.2029584824.1735299451&semt=ais_hybrid" alt="" />
</a>
<h2 className="text-white font-bold">This is a project made using HYML,CSS,JAVASCRIPT. Here oyu can easily generate your password which can include characters and numbers and the length of the password can also be decided by you.</h2>
</div>

<div className="w-70 ml-127 mb-135 mt-[-240px] bg-gray-700 text-center hover:scale-100 hover:shadow-2xl hover:shadow-purple-500">
<a href="https://ayush-bansal08.github.io/Netflix/">
<img src="https://jobs.netflix.com/static/images/Netflix-Social-Rectangle.png" alt="" />
</a>
<h2 className="text-white font-bold">This is a project made using HYML,CSS,JAVASCRIPT. This project is not completed fully but i tried to make a similar login page just like Netflix. Here i made a cursor such that it changes colour every time it moves an inch.</h2>
</div>
</>
    )
>>>>>>> 3e646cb83004fd31233467a32eab00aae92c3c42

        
      </div>
    </>
  );
}

export default Projects;
