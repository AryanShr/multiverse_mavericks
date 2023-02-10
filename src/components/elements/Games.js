import React , { useState }from 'react'
import game from './img/game.png'
function Games() {
    const[glow, setglow] = useState(false);
    return (
      <div className=' w-64  hover:scale-150 transition-all items-center place-content-center rounded-lg' onMouseEnter={()=>setglow(true)} onMouseLeave={()=>setglow(false)}>
          {<img src={game} alt="p-4" className=''/>}
            <p className='text-center font-mono text-2xl relative'>Games</p>
      </div>
    )
}

export default Games