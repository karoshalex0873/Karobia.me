import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Menu = [
  {
    id: 1,
    name: 'About',
    link: '#About',
  },
  {
    id: 2,
    name: 'Projects',
    link: '#projects',
  },
  {
    id: 3,
    name: 'Skills',
    link: '#blog',
  },
  {
    id: 4,
    name: 'Reach Out',
    link: '#reach_out',
  },
  {
    id: 5,
    name: 'KarobiaBot',
    link: '#karobiaBot',
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toggleMenu(); // Close the menu after scrolling
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary to-secondary/90 text-white  ">
      <div className="container py-1">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div>
            <a href="/" className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider">
              Logo
            </a>
          </div>

          {/* Menu toggle button */}
          <div className="flex items-center gap-4 sm:hidden  sm:absolute">
            <button onClick={toggleMenu} className="text-2xl">
              {showMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Menu items */}
          <ul className={`sm:flex items-center sm:justify-normal gap-4 lg:relative md:relative absolute right-0 top-0 z-50 p-4 rounded-lg ${showMenu ? 'block' : 'hidden'} sm:block  mt-3`}>
            {Menu.map((data) => (
              <li key={data.id}>
                <button
                  onClick={() => scrollToSection(data.link)}
                  className=" menu-icon block py-2 px-4 text-primary  text-left w-full "
                >
                  {data.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
