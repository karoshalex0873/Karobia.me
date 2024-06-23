import Navbar from "./componets/Navbar"
import Main from "./componets/Main"
import About from "./componets/About"
import Projects from "./componets/Projects"
import ContactForm from "./componets/Contact"
import SocialMediaLinks from "./componets/SocialMediaLinks"
import Chatbox from "./componets/Chatbox"

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-wrap justify-center md:justify-between">
          <div className="w-full md:w-2/5 md:pr-6 mb-6 md:mb-0">
            <ContactForm />
          </div>
          <div className="w-full md:w-2/5 md:pl-6">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-10">
        <Chatbox /> 
      </div>
    </div>
  );
};

export default App;
