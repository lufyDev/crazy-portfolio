"use client"

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import Image from 'next/image'
import { SparklesIcon } from '@heroicons/react/24/solid'

const Projects = () => {
  // Wake up Urban Update server in background when component mounts
  useEffect(() => {
    const wakeUpUrbanUpdate = async () => {
      try {
        // Make a background request to wake up the server
        await fetch('https://urban-update.vercel.app/', {
          method: 'GET',
          mode: 'no-cors' // Use no-cors to avoid CORS issues since we don't need the response
        });
        console.log('Urban Update server wake-up request sent');
      } catch (error) {
        // Silently handle errors since this is a background operation
        console.log('Urban Update wake-up request completed');
      }
    };

    wakeUpUrbanUpdate();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Admin Dashboard",
      description: "A sleek admin dashboard with real-time data integration and beautiful UI/UX design able to perform CRUD operations.",
      image: "/refine.png",
      technologies: ["React", "Node.js", "MongoDB", "Daisy-UI"],
      liveUrl: "https://refine-dashboard-5vvw.onrender.com/",
      githubUrl: "https://github.com/VishalMX3/Refine-Dashboard"
    },
    {
      id: 2,
      title: "3D Car Viewer",
      description: "A browser-based 3D car viewer using WebGL-powered engines to enable real-time rendering of interactive vehicle model.",
      image: "/threeDViewer.png",
      technologies: ["React", "ThreeJs", "WebGL", "Tailwind CSS"],
      liveUrl: "https://3d.spyne.ai/3d/v2?sku_id=2e9699d6245246878c8171ed9c8a880c&original=true",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Spyne Demo Flow",
      description: "Spyne's customer-facing demo page, with high performance and responsive design driving sales and user engagement.",
      image: "/spyne.png",
      technologies: ["Next.js", "React", "Material UI", "Tailwind CSS"],
      liveUrl: "https://console.spyne.ai/virtualstudio/v2/demo?project_uuid=a42532d32df3423e8c1c9664e292ad7f&preset_id=7e5cd54194fa468c8537922b34ed6c04",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "3D Shirt Customizer",
      description: "A 3D shirt customizer where you can customize your shirt in your own style. Pick colors, add logos to make your virtual swag unique.",
      image: "/three-d-shirt.png",
      technologies: ["React", "ThreeJs", "Tailwind CSS"],
      liveUrl: "https://ai-shop-3d.vercel.app/",
      githubUrl: "https://github.com/lufyDev/ai-shop-3d"
    },
    {
      id: 5,
      title: "Urban Update",
      description: "A news and publications website along with a strong CMS to manage the website CRUD operations on content.",
      image: "/urban-update.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://urban-update.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Haunted House",
      description: "A haunted house scene created which demonstrates the use of Three.js to create a 3D scene, add lights, textures and shadow.",
      image: "/haunted.png",
      technologies: ["React", "ThreeJs", "Tailwind CSS"],
      liveUrl: "https://haunted-house-delta-one.vercel.app/",
      githubUrl: "https://github.com/lufyDev/haunted-house"
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
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors hover:text-purple-400">
                  {project.title}
                </h3>
              </a>
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
                {project?.liveUrl != "#" && <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center rounded-lg hover:opacity-80 transition-opacity text-sm font-medium"
                >
                  Live Demo
                </a>}
                {project?.githubUrl != "#" && <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 border border-gray-600 text-gray-300 text-center rounded-lg hover:border-purple-500 hover:text-purple-400 transition-colors text-sm font-medium"
                >
                  GitHub
                </a>}
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
