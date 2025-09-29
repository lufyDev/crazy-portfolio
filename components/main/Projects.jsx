"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import Image from 'next/image'
import { SparklesIcon } from '@heroicons/react/24/solid'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Space Themed Website",
      description: "A beautiful space-themed website with stunning animations and modern design. Built with Next.js and Framer Motion.",
      image: "/SpaceWebsite.png",
      technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Next.js Portfolio",
      description: "A modern portfolio website showcasing advanced web development skills with responsive design and smooth animations.",
      image: "/NextWebsite.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Crypto Card Application",
      description: "A sleek crypto trading card application with real-time data integration and beautiful UI/UX design.",
      image: "/CardImage.png",
      technologies: ["React", "Node.js", "MongoDB", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden"
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
            My Projects
          </h1>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl text-base md:text-lg">
          Here are some of my recent projects that showcase my skills in modern web development
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft(index * 0.2)}
            className="group relative bg-[#0300145e] backdrop-blur-sm border border-[#7042f861] rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            {/* Project Image */}
            <div className="relative h-48 md:h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center rounded-lg hover:opacity-80 transition-opacity text-sm font-medium"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex-1 py-2 px-4 border border-gray-600 text-gray-300 text-center rounded-lg hover:border-purple-500 hover:text-purple-400 transition-colors text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="mt-16 text-center"
      >
        <p className="text-gray-400 mb-6 text-base md:text-lg">
          Want to see more of my work?
        </p>
        <a
          href="#contact"
          className="inline-block py-3 px-8 button-primary text-white rounded-lg hover:scale-105 transition-transform font-medium"
        >
          Get In Touch
        </a>
      </motion.div>
    </section>
  )
}

export default Projects
