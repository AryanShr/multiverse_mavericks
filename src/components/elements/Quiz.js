import React,{useState} from 'react'
import quiz from './img/quiz.png'
function Quiz() {
    const[glow, setglow] = useState(false);
    return (
      <div className='h-32 w-64 hover:scale-150 transition-all' onMouseEnter={()=>setglow(true)} onMouseLeave={()=>setglow(false)}>
          {<img src={quiz} alt="book" className=''/>}
          <p className='text-center text-2xl relative'>Quiz</p>
      </div>
    )
}

export default Quiz