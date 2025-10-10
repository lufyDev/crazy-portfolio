'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-col lg:flex-row items-center justify-center px-4 md:px-10 lg:px-20 mt-20 md:mt-32 lg:mt-40 w-full z-[20] gap-8 lg:gap-0'
    >
      <div className='h-full w-full flex flex-col gap-5 m-auto justify-center text-center lg:text-start'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0'>
          <SparklesIcon className='w-5 h-5 text-[#b49bff] mr-[10px]' />
          <h1 className='Welcome-text text-[13px]'>Full Stack Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-3xl md:text-5xl lg:text-6xl font-semibold text-white max-w-[600px] w-auto h-auto'>
          <span>
            Providing
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
            Project Experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-base md:text-lg text-gray-400 my-5 max-w-[600px]'
        >
          I&apos;m <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-white to-cyan-500'>Vishal Pundhir</span>, a full stack developer with 1+ years of experience and a passion for creating beautiful and functional
          web applications with an added advantage of integrating <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-white to-cyan-500'>3D meshes</span> in my projects. I&apos;m a quick learner and I&apos;m always looking to improve my skills.
        </motion.p>

        <motion.a
          href="#projects"
          variants={slideInFromLeft(1.0)}
          className='py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto lg:mx-0 hover:scale-105 transition-transform'
        >
          Learn More
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center order-first lg:order-last relative'
      >
        {/* Background floating image */}
        <motion.div
          animate={{
            y: [0, -60, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute"
        >
          <Image
            src='/mainIconsdark.svg'
            alt='background-icons'
            width={400}
            height={400}
            className="hero-bg-icons md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] opacity-80"
          />
        </motion.div>

        {/* Foreground floating image */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 5, -5, 0],
            rotate: [0, -1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="relative z-10"
        >
          <Image
            src='/vishal.png'
            alt='vishal-portrait'
            width={400}
            height={400}
            className="hero-portrait md:min-w-[650px] md:min-h-[650px] lg:min-w-[650px] lg:min-h-[650px] lg:w-[650px] lg:h-[650px]"
          />
        </motion.div>

      </motion.div>
    </motion.div>
  )
}

export default HeroContent