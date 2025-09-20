import React from 'react'
import Hero from '../components/main/Hero'
import Skills from '@/components/main/Skills'

const Home = () => {
  return (
    <div className='h-full w-full'>
      <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
        <Skills/>
      </div>
    </div>
  )
}

export default Home