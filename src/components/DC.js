import React from 'react'
import { Link } from 'react-router-dom'
import Books from './elements/Books'
import Games from './elements/Games'
import Quiz from './elements/Quiz'
import Share from './Share.tsx'

function DC() {
    return (
        <div className=' h-[100%] grid  content-center'>
            <div className='flex w-[100%] h-[50%] justify-around items-center'>
            <Link to='/DC/game'><Games /></Link>
            <Link to='/DC/database' ><Books /></Link>
            <Link to='/DC/quiz'><Quiz /></Link>
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

export default DC