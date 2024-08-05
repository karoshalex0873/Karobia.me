import Supercar from '../assets/Super Cars.png'
import QueenSalon from '../assets/Queen Salon.png'
const projectData=[
    {
     id:1,
     img:Supercar,
     name:"Super Car Market",
     link:"https://super-car-seven.vercel.app/",
     description:"A react  and three js peroject that advertise the sale of super cars"
    },
    {
      id:2,
      img:QueenSalon,
      name:"Queen Salon",
      link:"https://queens-salon.vercel.app/",
      description:"A react and tailwind using routes  to vavigate to other sections"
     }

];
const Projects = () => {
  return (
    <>
    <span id="projects"></span>
    <div className=" py-10">
        <div className="continer">
            <div className=" text-center mb-0">
            <h1 className="text-4xl font-bold text-gray-800">Projects
           </h1>
           </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 md:gap-5 place-items-center  space-x-8 p-10
              ">
             {
                projectData.map((data, index)=>{
                    return(
                        <div key={index}
                        className=" rounded-2xl bg-gradient-to-tr from-darkBrand to-secondary hover:text-white shadow-xl duration-20max-w-[300px]0  group relative  mb-10">
                        {/*image section */}
                          <div className=" h-[122px]">
                            <img src={data.img} alt=""
                            className="max-w-[200px] block mx-auto transform translate-y-14 group-hover:scale-110 rotate-2 rounded-xl  group-hover:rotate-0 duration-30 
                            "
                            />
                          </div>
                          {/*detail section of the projects*/}
                          <div className=" pt-20  text-white">
                            <h1 className="text-center text-3xl md:text-2xl sm:text-2xl">{data.name}</h1>
                                <div className=" text-center py-3 px-4">
                                    <p className=" text-start">{data.description}</p>
                                    <a href={data.link} 
                                    className=" pt-5">
                                    <button className=" mt-7 bg-gradient-to-r from-secondary to-primary border-2 border-secondary rounded-full px-4 py-2 text-white hover:scale-105 duration-200 cursor-pointer ">check out</button>
                                    </a>
                                </div>
                          </div>
                        </div>
                    )
                })
             }
             </div>
             
        </div>
    </div>
    </>
  )
}

export default Projects