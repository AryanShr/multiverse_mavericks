import React from 'react'
import { Link } from 'react-router-dom'
import Books from './elements/Books'
import Games from './elements/Games'
import Quiz from './elements/Quiz'
function DC() {
    return (
        <div className='flex w-[100%] justify-around h-[100%] items-center'>
            <Link to= '/DC/game'><Games /></Link>
            <Link to='/DC/database' ><Books /></Link>
            <Link to='/DC/quiz'><Quiz /></Link>
        </div>
      )
}

export default DC