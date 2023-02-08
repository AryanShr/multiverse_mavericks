import React from 'react'
function UniverseExplorer({img, x, y}) {
  return (
    <div className='absolute' style={{top:y, left:x}}>
        <a href='#'><img src= {img} className='h-[15rem] w-[15rem] hover:scale-150 transition-all' alt='galaxy'/></a>
    </div>
  )
}

export default UniverseExplorer