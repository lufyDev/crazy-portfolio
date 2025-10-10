import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/v-logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin md:w-[120px] md:h-[40px]"
          />

         
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-purple-400 transition-colors">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-purple-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className={`cursor-pointer ${social.name === 'GitHub' ? 'bg-white rounded-full p-0.5' : ''}`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#7042f861] transition-colors"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[65px] left-0 w-full bg-[#03001417] backdrop-blur-md border-t border-[#7042f861] md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a 
                href="#about-me" 
                className="text-gray-200 hover:text-purple-400 transition-colors py-2 border-b border-[#7042f861]/30"
                onClick={closeMenu}
              >
                About me
              </a>
              <a 
                href="#skills" 
                className="text-gray-200 hover:text-purple-400 transition-colors py-2 border-b border-[#7042f861]/30"
                onClick={closeMenu}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-gray-200 hover:text-purple-400 transition-colors py-2 border-b border-[#7042f861]/30"
                onClick={closeMenu}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-gray-200 hover:text-purple-400 transition-colors py-2 border-b border-[#7042f861]/30"
                onClick={closeMenu}
              >
                Contact
              </a>
              
              {/* Mobile Social Links */}
              <div className="flex flex-row gap-5 pt-4 justify-center">
                {Socials.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="hover:scale-110 transition-transform"
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={24}
                      height={24}
                      className={`cursor-pointer ${social.name === 'GitHub' ? 'bg-white rounded-full p-0.5' : ''}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;