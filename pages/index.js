import React from 'react'
import Hero from '../components/main/Hero'

const Home = () => {
  return (
    <div className='h-full w-full'>
      <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
      </div>
    </div>
  )
}

export default Home