import React , { useState }from 'react'
import game from './img/game.png'
function Games() {
    const[glow, setglow] = useState(false);
    return (
      <div className='h-32 w-64 hover:scale-150 transition-all' onMouseEnter={()=>setglow(true)} onMouseLeave={()=>setglow(false)}>
          {<img src={game} alt="book" className=''/>}
            <p className='text-center text-2xl'>Games</p>
      </div>
    )
}

export default Games