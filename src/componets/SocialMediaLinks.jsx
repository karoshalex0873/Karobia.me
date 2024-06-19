import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const socialMedia = [
  { id: 1, name: 'LinkedIn', url: 'https://www.linkedin.com/', icon: <FaLinkedin color="#0A66C2" /> },
  { id: 2, name: 'GitHub', url: 'https://github.com/', icon: <FaGithub color="#333" /> },
  { id: 3, name: 'Twitter', url: 'https://twitter.com/', icon: <FaTwitter color="#1DA1F2" /> },
  { id: 4, name: 'Instagram', url: 'https://www.instagram.com/', icon: <FaInstagram color="#E1306C" /> },
  { id: 5, name: 'Facebook', url: 'https://www.facebook.com/', icon: <FaFacebook color="#1877F2" /> },
];

const SocialMediaLinks = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Follow Me</h2>
        <div className="flex flex-wrap justify-start space-x-1 lg:space-x-8 px-6">
          {socialMedia.map((media) => (
            <a
              key={media.id}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
            >
              <div className="flex items-center justify-center w-16 h-16 text-5xl bg-white shadow-xl rounded-full p-4 hover:bg-white hover:text-black">
                {media.icon}
              </div>
            </a>
          ))}
        </div>
        <h1 className="text-xl font-bold text-primary py-4 mt-9">You will find my Updated Info at My accounts</h1>

      </div>
    </div>
  );
};

export default SocialMediaLinks;
