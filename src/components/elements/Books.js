import React, { useState } from 'react'
import book from "./img/explore.png"
function Books() {
    const[glow, setglow] = useState(false);
  return (
    <div className='h-32 w-64 hover:scale-150 transition-all' onMouseEnter={()=>setglow(true)} onMouseLeave={()=>setglow(false)}>
        {<img src={book} alt="book" className=''/>}
        <p className='text-center text-2xl relative'>Explore</p>
    </div>
  )
}

export default Books