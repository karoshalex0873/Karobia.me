import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ status: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ status: 'loading', message: 'Sending message...' });

    emailjs.send(
      'service_mozfkko', 
      'Email.Alex', 
      formData,
      'smMo6WW4MS2qObauQ'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormStatus({ status: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.log('FAILED...', error);
      setFormStatus({ status: 'error', message: 'Failed to send message. Please try again.' });
    });
  };

  return (
    <>
    <span id='reach_out'></span>
    <div className="py-10">
      <div className="container mx-auto p-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary py-4 mb-9">Lets Talk</h1>
          <h2 className="text-2xl font-bold text-gray-800">Contact Me</h2>
        </div>
        <div className="max-w-md mx-auto bg-white shadow-xl rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-darkBrand to-secondary text-white rounded-lg hover:from-secondary hover:to-darkBrand transition duration-300"
                disabled={formStatus.status === 'loading'}
              >
                {formStatus.status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {formStatus.message && (
              <div className={`mt-4 text-center text-sm ${formStatus.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
