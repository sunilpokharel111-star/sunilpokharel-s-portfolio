import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import portfolio1 from '../assets/hero.png';
import portfolio2 from '../assets/hero.png';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

export default function ContactProof() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cuh24ii',   // Replace with your EmailJS service ID
        'template_po3e3fo',  // Replace with your EmailJS template ID
        formRef.current,
        'Jl6IAoHNCQWdKFEy7'       // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          alert('Message sent successfully!');
          e.target.reset(); // Clear form after sending
        },
        (error) => {
          console.log('Failed to send email.', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 sm:px-6 py-16 md:py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
        Contact & Proof
      </h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-8 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg flex flex-col gap-4"
        >
          <label className="text-white font-medium text-sm sm:text-base">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 sm:p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent text-base"
          />

          <label className="text-white font-medium text-sm sm:text-base">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 sm:p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent text-base"
          />

          <label className="text-white font-medium text-sm sm:text-base">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-3 sm:p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent text-base"
          />

          <label className="text-white font-medium text-sm sm:text-base">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-3 sm:p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent text-base resize-none"
          />

          <Button type="submit" className="mt-4">
            Send Message
          </Button>

          {/* Direct Contact Links */}
          <div className="flex mt-6 space-x-4">
            <a
              href="mailto:sunilpokharel111@gmail.com"
              aria-label="Send Email"
              className="text-white hover:text-accent transition text-xl sm:text-2xl"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/sunil-pokharel-077977288/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-white hover:text-accent transition text-xl sm:text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sunilpokharel111-star/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-white hover:text-accent transition text-xl sm:text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </motion.form>

        {/* Proof / Portfolio */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img
              src={"portfolioproject1.jpeg"}
              alt="Portfolio Project 1"
              className="w-full h-40 sm:h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 text-white">
              <h3 className="font-semibold text-base sm:text-lg">Project One(Black Ink Ateller)</h3>
              <a
                href="https://github.com/sunilpokharel111-star/black-ink-atelier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline text-sm"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img
              src={"portfolioproject2.jpeg"}
              alt="Portfolio Project 2"
              className="w-full h-40 sm:h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 text-white">
              <h3 className="font-semibold text-base sm:text-lg">Project Two(sunilpokhareldev)</h3>
              <a
                href="https://github.com/sunilpokharel111-star/sunilpokharel-s-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline text-sm"
              >
                View Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 -z-10"
        animate={{ x: [-50, 50, -50] }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  );
}