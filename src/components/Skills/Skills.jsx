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
        <img src="https://velog.velcdn.com/images/jayone1202/post/50affd79-d863-4817-b718-5d3797445bc6/image.png" alt="HTML" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="React" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
        <img src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg" alt="tailwind" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
      </div>
    </div>
  );
};

export default Skills;

