import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiThreedotjs, SiMongodb, SiExpress } from 'react-icons/si';

const Skill = [
  { id: 1, name: 'HTML', description: 'HyperText Markup Language used for structuring web content.', level: 90, icon: <FaHtml5 /> },
  { id: 2, name: 'CSS', description: 'Cascading Style Sheets used for styling web pages.', level: 80, icon: <FaCss3Alt /> },
  { id: 3, name: 'JavaScript', description: 'Programming language for web development, enabling interactive elements.', level: 85, icon: <FaJs /> },
  { id: 4, name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development.', level: 75, icon: <SiTailwindcss /> },
  { id: 5, name: 'React js', description: 'JavaScript library for building user interfaces.', level: 80, icon: <FaReact /> },
  { id: 6, name: 'NextJs', description: 'React framework for server-side rendering and static site generation.', level: 70, icon: <SiNextdotjs /> },
  { id: 7, name: 'ThreeJs', description: 'JavaScript library for creating 3D graphics on the web.', level: 65, icon: <SiThreedotjs /> },
  { id: 8, name: 'Python & Django', description: 'Python is a programming language, Django is a web framework for building applications.', level: 75, icon: <FaPython /> },
  { id: 9, name: 'MongoDb', description: 'NoSQL database for storing JSON-like documents.', level: 70, icon: <SiMongodb /> },
  { id: 10, name: 'Express', description: 'Web application framework for Node.js.', level: 65, icon: <SiExpress /> },
];

const Blog = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = (id) => {
    setHoveredSkill(id);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <>
      <span id="blog"></span>
      <div className="py-10">
        <div className="container mx-auto relative">
          <div className="text-center mb-0">
            <h1 className="Main-heading">Skills and Blog</h1>
          </div>
          <div>
            <div className="text-center mb-0 py-8">
              <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
            </div>
            <div className="relative">
              <div className="lg:center-line sm:opacity-0"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 md:gap-5 place-items-center">
                {Skill.map((data, index) => (
                  <div
                    key={index}
                    className="transform transition duration-500 hover:scale-105 relative"
                    onMouseEnter={() => handleSkillHover(data.id)}
                    onMouseLeave={handleSkillLeave}
                  >
                    <div className="mb-20 shadow-xl text-center hover:text-white hover:bg-primary max-w-[200px] h-[auto] rounded-3xl p-4">
                      <div className="w-16 h-16 mx-auto mb-4 text-5xl">
                        {data.icon}
                      </div>
                      <h1 className="font-bold text-lg">{data.name}</h1>
                      <p className="text-sm text-start">{data.description}</p>
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div className="text-right">
                            <span className=" text-xs font-medium inline-block text-white">
                              {hoveredSkill === data.id ? `${data.level}%` : 'hover'}
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                          <div
                            style={{ width: `${hoveredSkill === data.id ? data.level : 0}%` }}
                            className={`h-full bg-gradient-to-r from-secondary to-primary transition-width duration-1000 ease-out ${hoveredSkill === data.id ? 'opacity-100' : 'opacity-0'}`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h1 className="text-center text-xl font-bold">
              <a href="https://www.instagram.com/" className="bg-gradient-to-r from-secondary to-primary border-2 border-secondary rounded-full px-4 py-2 text-white hover:scale-105 duration-200 cursor-pointer">
                My blog
              </a>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
