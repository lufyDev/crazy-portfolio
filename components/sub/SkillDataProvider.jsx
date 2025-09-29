"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

const SkillDataProvider = ({ src, width, height, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.5, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0 }
    }

    const animationDelay = 0.1
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ 
                delay: index * animationDelay,
                duration: 0.5,
                ease: "easeOut"
            }}
            className="group relative p-3 rounded-lg hover:bg-[#7042f861] transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Image
                src={src}
                width={Math.max(40, Math.min(width, 80))}
                height={Math.max(40, Math.min(height, 80))}
                alt='skill image'
                className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain group-hover:drop-shadow-[0_0_10px_rgba(180,155,255,0.5)] transition-all duration-300"
            />
        </motion.div>
    )
}

export default SkillDataProvider