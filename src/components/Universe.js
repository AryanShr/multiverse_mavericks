import React from 'react'
import bgImg from './img/sky.jpg'
import galaxy from './img/galaxy.jpg'
import UniverseExplorer from './universeExplorer/UniverseExplorer'
import galaxy1 from './img/galxies/Galaxy-PNG.png'
import galaxy2 from './img/galxies/gal1.png'
import galaxy3 from './img/galxies/gal2.png'
import galaxy4 from './img/galxies/gal3.png'
import galaxy5 from './img/galxies/Purple.png'
function Universe() {
  return (
    <div className='flex text-white justify-center items-center' >
        <p>Navigate through Universe</p>
        <UniverseExplorer img={galaxy1} x='10rem' y='15rem'/>
        <UniverseExplorer img={galaxy2} x='30rem' y='8rem'/>
        <UniverseExplorer img={galaxy3} x='50rem' y='8rem'/>
        <UniverseExplorer img={galaxy4} x='70rem' y='20rem'/>
        <UniverseExplorer img={galaxy5} x='45rem' y='30rem'/>
    </div>
  )
}

export default Universe