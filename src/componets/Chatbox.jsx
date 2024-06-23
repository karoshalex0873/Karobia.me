import { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const predefinedResponses = {
  greeting: "Hello! How can I assist you today?",
  introduction: "Hello! I'm KarobiaBot, your virtual assistant.",
  services: "I can help you with a variety of tasks, including answering questions, providing information, and guiding you through processes.",
  contact: "You can reach us at contact@karobia.me.",
  resume: "Please request in the Contact section and you will have it.",
  default: "I'm sorry, I don't understand that question. Can you please rephrase?",
};

const getResponse = (message) => {
  const lowerCaseMessage = message.toLowerCase();
  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
    return predefinedResponses.greeting;
  }
  if (lowerCaseMessage.includes('introduce') || lowerCaseMessage.includes('who are you')) {
    return predefinedResponses.introduction;
  }
  if (lowerCaseMessage.includes('service') || lowerCaseMessage.includes('help')) {
    return predefinedResponses.services;
  }
  if (lowerCaseMessage.includes('contact')) {
    return predefinedResponses.contact;
  }
  if (lowerCaseMessage.includes('resume')) {
    return predefinedResponses.resume;
  }
  return predefinedResponses.default;
};

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      const userMessage = { text: userInput, sender: 'user' };
      setMessages([...messages, userMessage]);
      const aiMessage = { text: getResponse(userInput), sender: 'ai' };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      setUserInput('');
    }
  };

  return (
    <>
      <span id='karobiaBot'></span>
      <div className="fixed bottom-10 right-10 z-50 bg-darkBrand py-5 px-6 rounded-xl sm:py-2 sm:px-3">
        <h2 className='lg:text-3xl text-xs font-bold text-white'>karobiaBot</h2>
        {!isOpen && (
          <button
            className="bg-white text-secondary rounded-full lg:p-4 p-2 shadow-lg hover:bg-opacity-80 transition duration-300"
            onClick={toggleChatbox}
          >
            <FaComments className="lg:text-3xl text-xs" />
          </button>
        )}
        {isOpen && (
          <div className="bg-white lg:w-96 lg:h-96 w-full h-64 lg:shadow-lg shadow-md rounded-lg px-4 lg:px-10 py-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Chat</h2>
              <button
                className="text-gray-600 hover:text-red-500"
                onClick={toggleChatbox}
              >
                Close
              </button>
            </div>
            <div className="h-48 lg:h-64 overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`my-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} rounded-lg p-2`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <form className="mt-4 flex" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button
                type="submit"
                className="bg-secondary text-white rounded-r-lg px-4 py-2 hover:bg-opacity-80 transition duration-300"
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
