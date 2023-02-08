import React from 'react'
import bgImg from './img/sky.jpg'
import galaxy from './img/galaxy.jpg'
function Home() {
  return (
    <div className='bg-cover bg-no-repeat h-[100vh] w-[100vw] flex text-white justify-center items-center' style={{backgroundImage:`url(${bgImg})`}} >
    <p >Space Background</p>
    </div>
  )
}

export default Home