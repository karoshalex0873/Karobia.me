// import { data } from "autoprefixer";

import Blog from "./Blog";

const AboutData = [
    {
      id: 1,
      category: "Career Path",
      description: "Started career path in software engneering 2023, passionate about solving problems with technology.",
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
      description: "Developed several web applications and contributed to open-source projects. More info is in Project section",
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
      description: "Proficient in JavaScript, Python, React, Node.js, and database management .",
      aosDelay: "900",
    },
  ];
  
  
const About = () => {
  return (
    <>
    <span id="About"></span>
    <div className="py-10 flex  flex-col" >
        <div className="container">
          {/*Header tittle */}
           <div className=" text-center mb-0">
           <h1 className="text-4xl font-bold text-gray-800">About Me
           </h1>
           </div>
           {/*Abou me   */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 md:gap-5 place-items-center ">
            {
                AboutData.map((data,index)=>{
                    return(
                    <div 
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={index} className=" rounded-2xl bg-white hover:bg-secondary hover:text-white shadow-xl duration-200 max-w-[300px] group relative sm:py-5">
                        <div className="p-4 text-center py-10">
                            <h1 className="text-xl font-bold">{data.category}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p> 
                        </div>
                    </div>
                )})
            }
            </div>
        </div>
        <Blog />
    </div>
    </>
  )
}

export default About