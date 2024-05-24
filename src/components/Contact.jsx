// src/pages/Contact.js
import { useState } from 'react';
import styles from '../style'; // Adjust the import according to your file structure

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ezedinnigussie@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom:%20${formData.name}%20(${formData.email})`;
    window.location.href = mailtoLink;
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000); // Disappear after 3 seconds
  };

  return (
    <section id="contact" className={`${styles.section} bg-dark text-white`}>
      <div className="container mx-auto px-5">
        <h2 className={`${styles.heading2} text-center mb-16`}>Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-8">
              I`d love to hear from you! Whether you have a question, a project in mind, or just want to connect, feel free to send me a message.
            </p>
            <ul>
              <li className="mb-4">
                <span className="font-semibold">Email: </span>
                <a href="mailto:ezedinnigussie@gmail.com" className="text-blue-400">ezedinnigussie@gmail.com</a>
              </li>
              <li className="mb-4">
                <span className="font-semibold">Phone: </span>
                <a href="tel:+251975363208" className="text-blue-400">+251975363208</a>
              </li>
              <li>
                <span className="font-semibold">Address: </span>
                <p className="text-gray-400">Jemo-1, Addis Ababa, Ethiopia</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <form className="bg-gray-800 p-8 rounded-lg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
              >
                Send Message
              </button>
            </form>
            {showSuccess && (
              <div className="mt-4 p-4 bg-green-600 text-white rounded">
                Thank you! Your message has been sent.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
