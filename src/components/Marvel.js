import React from 'react'
import { Link } from 'react-router-dom'
import Books from './elements/Books'
import Games from './elements/Games'
import Quiz from './elements/Quiz'
function Marvel() {
    return (
        <div className='flex w-[100%] justify-around h-[100%] items-center'>
            <Link to='/Marvel/game'><Games /></Link>
            <Link to='/Marvel/database' ><Books /></Link>
            <Link to='/Marvel/quiz'><Quiz /></Link>
        </div>
      )
}

export default Marvel