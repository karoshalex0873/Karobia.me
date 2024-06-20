import { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <span id='karobiaBot'></span>
    <div className="fixed bottom-10 right-10 z-50 bg-darkBrand py-5 px-6 rounded-xl sm:py-2 sm:px-3">
    <h2 className=' lg:text-3xl text-xs font-bold text-white'>karobiaBot</h2>
      {!isOpen && (
        <button
          className="bg-white text-secondary rounded-full lg:p-4 p-2 shadow-lg hover:bg-opacity-80 transition duration-300"
          onClick={toggleChatbox}
        >
          <FaComments className="lg:text-3xl text-xs"  />
        </button>
      )}
      {isOpen && (
        <div className="bg-white w-80 h-96 shadow-lg rounded-lg p-4 sm:px-10">
          {/* Chat interface content */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Chat</h2>
            <button
              className="text-gray-600 hover:text-red-500"
              onClick={toggleChatbox}
            >
              Close
            </button>
          </div>
          <div className="h-64 overflow-y-auto">
            {/* Messages or chat history */}
            <div className="my-2">
              <div className="bg-gray-100 rounded-lg p-2">
                <p className="text-sm text-gray-600">Hello! How can I help you today?</p>
              </div>
            </div>
          </div>
          {/* Chat input */}
          <form className="mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="mt-2 bg-secondary text-white rounded-lg px-4 py-2 hover:bg-opacity-80 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
    </>
  );
};

export default Chatbox;
