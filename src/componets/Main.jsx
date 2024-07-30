import React, { useEffect } from 'react';
import Blog from "./Blog";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutData = [
  {
    id: 1,
    category: "Career Path",
    description: "Started career path in software engineering in 2023, passionate about solving problems with technology.",
    aosDelay: "100",
  },
  {
    id: 2,
    category: "Education",
    description: "Currently pursuing a degree in Information Technology at Dedan Kimathi University of Technology.",
    aosDelay: "300",
  },
  {
    id: 3,
    category: "Projects",
    description: "Developed several web applications and contributed to open-source projects. More info is in the Project section.",
    aosDelay: "500",
  },
  {
    id: 4,
    category: "Achievements",
    description: "Received awards for academic excellence and innovation in software development.",
    aosDelay: "700",
  },
  {
    id: 5,
    category: "Skills",
    description: "Proficient in JavaScript, Python, React, Node.js, and database management.",
    aosDelay: "900",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <span id="About"></span>
      <div className="py-10 flex flex-col bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          </div>
          {/* About Me */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-w-full">
            {AboutData.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={index}
                className="rounded-2xl bg-white hover:bg-secondary hover:text-white shadow-xl duration-200 w-full max-w-none group relative"
              >
                <div className="p-6 text-center">
                  <h1 className="text-xl font-bold">{data.category}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Blog />
      </div>
    </>
  );
};

export default About;
