import React , { useState }from 'react'
import game from './img/game.png'
import glowgame from './img/gameglow.png'
function Games() {
    const[glow, setglow] = useState(false);
    return (
      <div className='h-32 w-64 hover:scale-150 transition-all' onMouseEnter={()=>setglow(true)} onMouseLeave={()=>setglow(false)}>
          {!glow? <img src={game} alt="book" className=''/>: <img src={glowgame} alt="book" className=''/>}
            <p className='text-center text-2xl'>Games</p>
      </div>
    )
}

export default Games