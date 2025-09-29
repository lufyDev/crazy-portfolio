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
          className='Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0'>
          <SparklesIcon className='w-5 h-5 text-[#b49bff] mr-[10px]' />
          <h1 className='Welcome-text text-[13px]'>Full Stack Developer Portfolio</h1>
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
          I&apos;m a full stack developer with a passion for creating beautiful and functional
          web applications. I&apos;m a quick learner and I&apos;m always looking to improve my skills.
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
        className='w-full h-full flex justify-center items-center order-first lg:order-last'
      >
        <Image
          src='/mainIconsdark.svg'
          alt='work-icons'
          width={400}
          height={400}
          className="md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px]"
        />

      </motion.div>
    </motion.div>
  )
}

export default HeroContent