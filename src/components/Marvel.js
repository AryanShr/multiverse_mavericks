import React from 'react'
import { Link } from 'react-router-dom'
import Books from './elements/Books'
import Games from './elements/Games'
import Quiz from './elements/Quiz'
function Marvel() {
    return (
        <div className='flex w-[100%] justify-around h-[100%] items-center'>
            <Games />
            <Link to='/Marvel/database' ><Books /></Link>
            <Quiz />
        </div>
      )
}

export default Marvel