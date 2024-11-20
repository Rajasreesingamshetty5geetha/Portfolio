import React from 'react';

const techData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: 'https://cdn.svgporn.com/logos/python.svg' },
      { name: 'Java', icon: 'https://cdn.svgporn.com/logos/java.svg' },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: 'https://cdn.svgporn.com/logos/html-5.svg' },
      { name: 'CSS', icon: 'https://cdn.svgporn.com/logos/css-3.svg' },
      { name: 'JavaScript', icon: 'https://cdn.svgporn.com/logos/javascript.svg' },
      { name: 'React.js', icon: 'https://cdn.svgporn.com/logos/react.svg' },
      { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
      { name: 'Next.js', icon: 'https://cdn.svgporn.com/logos/nextjs-icon.svg' },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'SQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
      { name: 'MongoDB', icon: 'https://cdn.svgporn.com/logos/mongodb.svg' },
      { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
      { name: 'Node.js', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
      { name: 'REST API', icon: 'https://www.svgrepo.com/show/88703/api.svg' },
      { name: 'Firebase', icon: 'https://cdn.svgporn.com/logos/firebase.svg' },
    ],
  },
];

const Techstack = () => {
  return (
    <section id="tech" className="py-10 px-6 bg-[#10132E] text-white rounded-3xl border border-white/[0.2]">
      <h1 className='heading'>
        My{' '}
        <span className='text-purple relative inline-block'>
          TechStack
          <div className='absolute -bottom-3 left-3 w-[120%] -ml-[10%]'>
            <div className='h-2 bg-gradient-to-r from-[#3e51c9] to-[#fe019a] transform [clip-path:polygon(0_0,100%_0,90%_100%,10%_10%)]'></div>
          </div>
        </span>
      </h1>
      <div className="max-w-6xl mx-auto mt-10 ">
        {techData.map((category) => (
          <div key={category.category} className="mb-10">
            <h2 className="text-lg font-semibold mb-4">{category.category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center group bg-[#36385F] hover:bg-gray-800 p-4 rounded-lg transition-all "
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mb-2 object-contain"
                  />
                  <span className="text-sm text-center group-hover:text-blue-400">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techstack;
