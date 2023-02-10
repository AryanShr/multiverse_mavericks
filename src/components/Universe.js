import React from 'react'
import UniverseExplorer from './universeExplorer/UniverseExplorer'
// import Logo from './universeExplorer/Logo'

import uni4 from './img/galxies/uni4.png'
import uni3 from './img/galxies/uni3.png'
import uni5 from './img/galxies/uni5.png'
import uni1 from './img/galxies/uni1.png'
import uni2 from './img/galxies/uni2.png'

import pokemon from './img/Universes/Pokemon.png'
import dbz from './img/Universes/DBZ.png'
import DCuni from './img/Universes/DC_Comics_logo.png'
import Marvel from './img/Universes/Marvel.png'
import Disney from './img/Universes/Disney.png'

const unis = [
  {name:"Pokemon",galaxy_img:uni4,x:'5rem',y:'15rem',galaxy_cont:pokemon},
  {name:"DBZ",galaxy_img:uni3,x:'20rem',y:'0rem',galaxy_cont:dbz},
  {name:"DC",galaxy_img:uni5,x:'50rem',y:'0rem',galaxy_cont:DCuni},
  {name:"Marvel",galaxy_img:uni1,x:'65rem',y:'20rem',galaxy_cont:Marvel},
  {name:"Disney",galaxy_img:uni2,x:'38rem',y:'26rem',galaxy_cont:Disney}
]

function Logo({ x, y,content}) {

  return (
    <div className='absolute ' style={{top:y, left:x}}>
            <img src= {content} style={{display:'block'}} className='absolute z-20 w-[30vh]  transition-all pointer-events-none top-16 left-16' alt='galaxy'/>
    </div>
  )
}

function Universe() {

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.value.toLowerCase());
        const value = e.target.value.toLowerCase();
    unis.forEach((item)=>{
            if(item.name.toLowerCase().indexOf(value) !== -1){
              console.log("maicho gov");
              return <Logo x={item.x} y={item.y} content ={item.galaxy_cont}/>
            }
          });
  }
  

  return (
    <div className='flex text-white text-2xl justify-center items-center h-[100%]' >
        <p className="text-3xl font-serif">Choose Your Universe</p>
        {unis.map((g)=>(
          <UniverseExplorer img = {g.galaxy_img} x={g.x} y={g.y} content ={g.galaxy_cont} route={g.name}/>
        ))}
        <input type="text" placeholder=" search..." onChange={handleChange} className="placeholder:italic placeholder:text-slate-400 block bg-transparent w-[30%] border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm fixed  bottom-4 left-4" />

    </div>
  )
}

export default Universe