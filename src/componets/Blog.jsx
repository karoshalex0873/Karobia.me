import { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiThreedotjs, SiMongodb, SiExpress } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { id: 1, name: 'HTML', description: 'HyperText Markup Language used for structuring web content.', level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { id: 2, name: 'CSS', description: 'Cascading Style Sheets used for styling web pages.', level: 80, icon: <FaCss3Alt className="text-blue-500" /> },
  { id: 3, name: 'JavaScript', description: 'Programming language for web development, enabling interactive elements.', level: 85, icon: <FaJs className="text-yellow-500" /> },
  { id: 4, name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development.', level: 75, icon: <SiTailwindcss className="text-blue-400" /> },
  { id: 5, name: 'React js', description: 'JavaScript library for building user interfaces.', level: 80, icon: <FaReact className="text-blue-600" /> },
  { id: 6, name: 'NextJs', description: 'React framework for server-side rendering and static site generation.', level: 70, icon: <SiNextdotjs className="text-gray-600" /> },
  { id: 7, name: 'ThreeJs', description: 'JavaScript library for creating 3D graphics on the web.', level: 65, icon: <SiThreedotjs className="text-yellow-400" /> },
  { id: 8, name: 'Python & Django', description: 'Python is a programming language, Django is a web framework for building applications.', level: 75, icon: <FaPython className="text-green-500" /> },
  { id: 9, name: 'MongoDb', description: 'NoSQL database for storing JSON-like documents.', level: 70, icon: <SiMongodb className="text-green-600" /> },
  { id: 10, name: 'Express', description: 'Web application framework for Node.js.', level: 65, icon: <SiExpress className="text-gray-400" /> },
];

const Blog = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

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
        <div className="container mx-auto relative px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold">Skills</h1>
          </div>
          <section>
            <div className="relative">
              <div className="lg:center-line sm:opacity-0"></div>
              <div id='Cards' className="flex flex-col items-center gap-4 md:gap-6">
                {skills.map((skill) => (
                  <article
                    key={skill.id}
                    className="skill-card transform transition-transform duration-500 hover:scale-105 relative text-white bg-gradient-to-b from-secondary to-darkBrand rounded-xl shadow-md p-4 flex flex-col items-center justify-center"
                    onMouseEnter={() => handleSkillHover(skill.id)}
                    onMouseLeave={handleSkillLeave}
                    data-aos="fade-up"
                    data-aos-delay={skill.id * 100} // Adds delay to each skill card
                    data-aos-offset="100" // Starts animation when scrolled into view
                    style={{ maxWidth: '250px', minWidth: '200px' }}
                  >
                    <div className="mb-3 mx-auto text-4xl text-primary">
                      {skill.icon}
                    </div>
                    <h1 className="font-bold text-lg text-center mb-2">{skill.name}</h1>
                    <p className="text-sm text-center mb-3">{skill.description}</p>
                    <div className="relative w-full">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-right">
                          <span className="text-xs font-medium">
                            {hoveredSkill === skill.id ? `${skill.level}%` : ''}
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                        <div
                          style={{ width: `${hoveredSkill === skill.id ? skill.level : 0}%` }}
                          className={`h-full bg-gradient-to-r from-secondary to-primary transition-width duration-1000 ease-out 
                            ${hoveredSkill === skill.id ? 'opacity-100' : 'opacity-0'}`}
                        ></div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blog;
