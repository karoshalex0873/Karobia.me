import React, { useEffect } from "react";
import { Link } from "react-scroll";
import alex from "../assets/alex.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Navbar from "./Navbar"; // Import the Navbar component

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize AOS duration
  }, []);

  return (
    <div className="min-h-screen bg-darkBrand flex flex-col justify-center items-center text-white relative overflow-hidden">
      {/* Include the Navbar at the top */}
      <div className="w-full fixed top-0 left-0 z-50">
        <Navbar />
      </div>

      {/* Icons on the right with animation */}
      <div 
      data-aos="fade-up"
      data-aos-delay="300"
      className="fixed right-0 top-0 w-[40px] lg:w-[80] h-full flex flex-col justify-center items-center gap-4 p-2 z-20 transition-transform duration-300 ease-in-out transform hover:translate-x-0 animate-fade-in ">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-2 rounded-full cursor-pointer border border-secondary hover:bg-white hover:text-primary transition-colors duration-300"
        >
          <FaFacebookF className="text-xl  text-secondary" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-2 rounded-full cursor-pointer border border-primary hover:bg-white hover:text-primary transition-colors duration-300"
        >
          <FaInstagram className="text-xl text-secondary" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-2 rounded-full cursor-pointer border border-secondary hover:bg-white hover:text-primary transition-colors duration-300"
        >
          <FaLinkedinIn className="text-xl text-secondary" />
        </a>
      </div>

      <div className="container lg:px-6 px-10 py-12 mx-auto relative mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text content section */}
          <div className="text-start lg:text-center md:text-left">
            <h1
              data-aos="fade-right"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold "
            >
              I am, Karobia Alex <span className="text-secondary">Software Developer</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-lg sm:text-xl mb-6"
            >
              I specialize in creating stunning and functional digital Web. <br />Let's connect and build something great together.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex justify-center md:justify-start"
            >
              <a
                href="/CV_Karobia_Alex.pdf" // Adjust the path as needed
                download="CV_Karobia_Alex.pdf" // The file name for the download
                className="bg-gradient-to-r from-secondary to-primary border-2 border-secondary rounded-full px-6 py-3 font-semibold text-white hover:scale-105 transition duration-200"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* Image content section */}
          <div className="flex justify-center items-center relative">
            <img
              src={alex}
              alt="Karobia Alex"
              data-aos="zoom-in"
              className="w-50 lg:w-80 h-auto rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105 liquid-effect"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
