import React from 'react'
import { Link } from 'react-router-dom'
import Books from './elements/Books'
import Games from './elements/Games'
import Quiz from './elements/Quiz'
import Share from './Share.tsx'

function Marvel() {
    return (
<div className=' h-[100%] grid  content-center'>
            <div className='flex w-[100%] h-[50%] justify-around items-center'>
            <Link to='/Marvel/game'><Games /></Link>
            <Link to='/Marvel/database' ><Books /></Link>
            <Link to='/Marvel/quiz'><Quiz /></Link>
            </div>
            
            <div className='rounded-lg flex justify-self-center'>
            <p className=' rounded-l-lg flex justify-self-center bg-white p-4 pr-0 text-black'>
                Be cool & share your experience with others on:
            </p>
            <Share className=' rounded-r-lg w-[20%]' description={" Hey Guys, I am loving the Multiverse Explorer Web App built by Multiverse Mavericks (ᵔᴥᵔ) )"} />
            </div>
            
        </div>
      )
}

export default Marvel