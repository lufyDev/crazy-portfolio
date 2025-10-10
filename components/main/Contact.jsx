"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Socials } from '@/constants'
import Image from 'next/image'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent to-[#030014]/50"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="flex flex-col items-center mb-16"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-6">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Get In Touch
          </h1>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Together</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl text-base md:text-lg">
          Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
        </p>
      </motion.div>

      {/* Contact Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.3)}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#0300145e] border border-[#7042f861] hover:border-purple-500/50 transition-colors">
                <EnvelopeIcon className="h-6 w-6 text-purple-400" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">vishalpundhirofficial@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#0300145e] border border-[#7042f861] hover:border-purple-500/50 transition-colors">
                <PhoneIcon className="h-6 w-6 text-purple-400" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+91 8193809760</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#0300145e] border border-[#7042f861] hover:border-purple-500/50 transition-colors">
                <MapPinIcon className="h-6 w-6 text-purple-400" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Gurugram, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {Socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-[#0300145e] border border-[#7042f861] hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className={`w-6 h-6 ${social.name === 'GitHub' ? 'bg-white rounded-full p-0.5' : ''}`}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.3)}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#0300145e] border border-[#7042f861] rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#0300145e] border border-[#7042f861] rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#0300145e] border border-[#7042f861] rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 button-primary text-white rounded-lg hover:scale-105 transition-transform font-medium"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="mt-20 pt-8 border-t border-[#7042f861] w-full max-w-6xl text-center"
      >
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Image
              src="/v-logo.png"
              alt="logo"
              width={40}
              height={40}
              className="w-[120px] h-[40px]"
            />
            {/* <span className="text-white font-bold">Vishal Pundhir</span> */}
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Vishal Pundhir. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
