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
        <img src="https://files.oaiusercontent.com/file-VSV4kA17CyNw1fWeLf5v7Q?se=2025-03-24T11%3A04%3A47Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dab45526e-6d07-4171-8f68-93e3de0562a5.webp&sig=NBRfpfvZxZzvdHoWojKgWa%2Bt4xbN33JdWaAT7Ua/zc4%3D" alt="HTML" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="React" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
        <img src="https://files.oaiusercontent.com/file-R69YPyupVhJKjzWsj57zM3?se=2025-03-24T11%3A05%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dee925037-b67e-484a-82c0-ed14bbef1fca.webp&sig=nGvq4tWRQAwH1cIcVOwg0O%2BMxFz96m63FWWUKPEW9xE%3D" alt="tailwind" className="w-38 h-40 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500" />
      </div>
    </div>
  );
};

export default Skills;

