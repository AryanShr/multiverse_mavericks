import React from 'react'
import UniverseExplorer from './universeExplorer/UniverseExplorer'

import galaxy1 from './img/galxies/Galaxy-PNG.png'
import galaxy2 from './img/galxies/gal1.png'
import galaxy3 from './img/galxies/gal2.png'
import galaxy4 from './img/galxies/gal3.png'
import galaxy5 from './img/galxies/Purple.png'

import pokemon from './img/Universes/Pokemon.png'
import dbz from './img/Universes/DBZ.png'
import DCuni from './img/Universes/DC_Comics_logo.png'
import Marvel from './img/Universes/Marvel.png'
import Disney from './img/Universes/Disney.png'

const galaxies = [
  {name:"Pokemon",galaxy_img:galaxy1,x:'5rem',y:'15rem',galaxy_cont:pokemon},
  {name:"DBZ",galaxy_img:galaxy2,x:'20rem',y:'0rem',galaxy_cont:dbz},
  {name:"DC",galaxy_img:galaxy3,x:'50rem',y:'0rem',galaxy_cont:DCuni},
  {name:"Marvel",galaxy_img:galaxy4,x:'65rem',y:'20rem',galaxy_cont:Marvel},
  {name:"Disney",galaxy_img:galaxy5,x:'38rem',y:'25rem',galaxy_cont:Disney}
]
function Universe() {
  return (
    <div className='flex text-white justify-center items-center h-[100%]' >
        <p className="text-3xl font-serif">Choose Your Universe</p>
        {galaxies.map((g)=>(
          <UniverseExplorer img = {g.galaxy_img} x={g.x} y={g.y} content ={g.galaxy_cont} route={g.name}/>
        ))}
    </div>
  )
}

export default Universe