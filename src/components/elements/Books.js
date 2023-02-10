import React, { useState } from 'react'
import book from "./img/explore.png"
function Books() {
    const[glow, setglow] = useState(false);
  return (
    <div className=' w-64  hover:scale-150 transition-all items-center place-content-center rounded-lg' onMouseEnter={()=>setglow(true)} onMouseLeave={()=>setglow(false)}>
        {<img src={book} alt="book" className='p-4'/>}
        <p className='text-center font-mono text-2xl relative'>Explore</p>
    </div>
  )
}

export default Books