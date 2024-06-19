// import React from 'react';
import { Link } from 'react-scroll';
import alex from '../assets/alex.jpg';

const Main = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-darkBrand flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text content section */}
          <div className="order-2 sm:order-2 px-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold py-10">
              I am, Karobia Alex <span className="text-secondary">Software Developer</span>
            </h1>
            <div>
                <button>
                <Link
                    to="reach_out"
                    smooth={true}
                    duration={500}
                    className="bg-gradient-to-r from-secondary to-primary border-2 border-secondary rounded-full px-4 py-2 text-white hover:scale-105 duration-200 cursor-pointer"
                  >
                    Download CV
                  </Link>
                </button>
            </div>
          </div>
          {/* Image content section */}
          <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src={alex}
              alt="karobia"
              className="lg:w-[280px] w-[200px] lg:h-[420px] md:h-[300px] sm:w-[200px] sm:h-[300px] rounded-3xl hover:scale-110 hover:rotate-0 rotate-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
