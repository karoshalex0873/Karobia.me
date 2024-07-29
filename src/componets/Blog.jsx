import { useState, useRef, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiThreedotjs, SiMongodb, SiExpress } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  const lineRef = useRef(null);

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

  useEffect(() => {
    gsap.fromTo(lineRef.current, 
      { opacity: 0 }, 
      {
        opacity: 1,
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
      });
  }, []);

  return (
    <>
      <span id="blog"></span>
      <div className="py-10">
        <div className="container mx-auto relative px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold">Skills</h1>
          </div>
          <section>
            <div className="relative flex flex-col items-center">
              {/* Center Line for Large and Medium Devices */}
              <div
                ref={lineRef}
                className="absolute inset-y-0 left-1/2 w-[6px] bg-secondary z-10 hidden md:block"
              ></div>
              {/* Center Line for Small Devices */}
              <div
                className="block md:hidden absolute top-0 left-0 h-full w-[6px] bg-secondary z-10"
              ></div>
              {/* Cards */}
              <div id="Cards" className="relative flex flex-col items-center gap-8">
                {skills.map((skill, index) => (
                  <div
                    key={skill.id}
                    className={`relative flex flex-col items-center w-full mb-10 ${skill.id % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} mx-auto`}
                    data-aos={skill.id % 2 === 0 ? 'fade-left' : 'fade-right'}
                    data-aos-delay={index * 100} // Adds delay to each skill card
                    data-aos-offset="100" // Starts animation when scrolled into view
                  >
                    {/* Additional Information */}
                    <div 
                      onMouseEnter={() => handleSkillHover(skill.id)}
                      onMouseLeave={handleSkillLeave}
                      className={`relative flex flex-col items-center justify-center ${skill.id % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} p-6 bg-white text-black rounded-lg shadow-lg z-20 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transition-transform transform hover:scale-105`}
                      data-aos={skill.id % 2 === 0 ? 'fade-left' : 'fade-right'}
                      data-aos-delay={index * 100} // Adds delay to each skill card
                      data-aos-offset="100" // Starts animation when scrolled into view
                    >
                      <div className="mb-4 text-4xl sm:text-3xl xs:text-2xl">
                        {skill.icon}
                      </div>
                      <h1 className="font-bold text-xl sm:text-lg xs:text-md text-center mb-3">{skill.name}</h1>
                      <p className="text-base text-center mb-4 text-gray-600">{skill.description}</p>
                      <div className="relative w-full flex flex-col items-center">
                        {/* Display Skill Level */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-lg sm:text-base font-bold text-primary">
                          {hoveredSkill === skill.id ? `${skill.level}%` : ''}
                        </div>
                        <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden mt-4 mb-2">
                          <div
                            style={{ width: `${hoveredSkill === skill.id ? skill.level : 0}%` }}
                            className={`h-full bg-gradient-to-r from-primary to-primary transition-all duration-1000 ease-out`}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* Dot at Intersection */}
                    <div
                      className={`absolute w-3 h-3 rounded-full bg-white ${skill.id % 2 === 0 ? 'left-[calc(50%-1.5rem)]' : 'right-[calc(50%-1.5rem)]'} ${hoveredSkill === skill.id ? 'opacity-100' : 'opacity-100'} transition-opacity duration-500`}
                      style={{ top: '50%' }}
                    ></div>
                  </div>
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
