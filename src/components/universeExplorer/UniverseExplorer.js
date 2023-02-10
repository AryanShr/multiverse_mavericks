import React, { useState } from 'react'
import { Link } from 'react-router-dom';



function UniverseExplorer({img, x, y,content ,route}) {
    const [show,setShow] = useState(false);

  return (
    <div className='absolute ' style={{top:y, left:x}}>
    <Link to={`/${route}`}>
        <a onMouseEnter={()=>setShow(true)} onMouseLeave = {()=>setShow(false)}>
            <img src= {content} style={show?{display:'block'}:{display:'none'}} className='absolute z-10 w-[30vh]  transition-all pointer-events-none top-16 left-16' alt='galaxy'/>
            <img src= {img} className='h-[18rem] w-[18rem] hover:scale-150 transition-all' alt='galaxy'/>
        </a>
    </Link>

    </div>
  )
}

export default UniverseExplorer