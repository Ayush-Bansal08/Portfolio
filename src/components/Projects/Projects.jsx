import React from "react";
import { NavLink } from "react-router-dom";

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
      </div>
    </>
  );
}

export default Projects;
