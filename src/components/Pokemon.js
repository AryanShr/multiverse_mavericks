import React from 'react'
import { Link } from 'react-router-dom'
import Books from './elements/Books'
import Games from './elements/Games'
import Quiz from './elements/Quiz'

function Pokemon() {
  return (
    <div className='flex w-[100%] justify-around h-[100%] items-center'>
        <Link to='/Pokemon/game'><Games /></Link>
        <Link to='/Pokemon/database' ><Books /></Link>
        <Link to='/Pokemon/quiz'><Quiz /></Link>
    </div>
  )
}

export default Pokemon