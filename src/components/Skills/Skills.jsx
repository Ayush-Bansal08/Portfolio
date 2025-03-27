import React from 'react';

const Skills = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-white text-6xl font-bold mb-20">
        My <span className="text-purple-500">skills</span>
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
        {/* Row 1 */}
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />

        {/* Row 2 */}
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
        <img src="https://files.oaiusercontent.com/file-HtduMwCKrYJ7fk1QFHFUwp?se=2025-03-27T12%3A00%3A33Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbf71cca7-5f04-4866-a4e9-c9b01dcb20c1.webp&sig=BrCH7M2ouwcKSRBetYrgdJEmy3GF9G37uwHQEWg4TYk%3D" alt="HTML" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="React" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
        <img src="https://files.oaiusercontent.com/file-4qJErmbJnQRZRD61XA29Y7?se=2025-03-27T12%3A02%3A22Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4e16ca66-119b-4ac2-a338-728340ae3788.webp&sig=WK6aPv1fz58frXmTC52lo2aw8JsHt2GT5RSqs5WW/S0%3D" alt="tailwind" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
      </div>
    </div>
  );
};

export default Skills;

