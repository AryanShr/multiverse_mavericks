import React from 'react'
import bgImg from './img/sky.jpg'
import galaxy from './img/galaxy.jpg'
function Home() {
  return (
    <div style={{backgroundImage:`url(${bgImg})`,backgroundSize:'cover',backgroundRepeat:'no-repeat', height:'100vh',width:'100vw', display:'flex', color:'white', justifyContent:'center', alignItems:'center'}}>
    <p>Space Background</p>
    </div>
  )
}

export default Home