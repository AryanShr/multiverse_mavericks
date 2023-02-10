import React,{useState} from 'react'
import quiz from './img/quiz.png'
function Quiz() {
    const[glow, setglow] = useState(false);
    return (
      <div className='  w-64  hover:scale-150 transition-all items-center place-content-center rounded-lg' onMouseEnter={()=>setglow(true)} onMouseLeave={()=>setglow(false)}>
          {<img src={quiz} alt="book" className='p-4'/>}
          <p className='text-center font-mono text-xl relative'>Quiz</p>
      </div>
    )
}

export default Quiz