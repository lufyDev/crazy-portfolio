import React from 'react'
import Hero from '../components/main/Hero'
import Skills from '@/components/main/Skills'
import Projects from '@/components/main/Projects'
import Contact from '@/components/main/Contact'

const Home = () => {
  return (
    <div className='h-full w-full overflow-x-hidden'>
      <div className='flex flex-col min-h-screen'>
        <section id="about-me">
          <Hero />
        </section>
        <Skills/>
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default Home