import { useState } from 'react'
import Card from './Card'
import '../game.css'

const bgUrl = 'https://wallpapercave.com/wp/wp4990911.jpg';

function GameDB(){
    const [items, setItems] = useState([
        { id: 1, name:"Goku", img: '/img/goku.png', stat: "" },
        { id: 1, name:"Goku", img: '/img/goku.png', stat: "" },
        { id: 2, name:"Vageta", img: '/img/vageta.png', stat: "" },
        { id: 2, name:"Vageta", img: '/img/vageta.png', stat: "" },
        { id: 3, name:"Piccolo", img: '/img/piccolo.png', stat: "" },
        { id: 3, name:"Piccolo", img: '/img/piccolo.png', stat: "" },
        { id: 4, name:"Lord Beerus", img: '/img/LordBeerus.png', stat: "" },
        { id: 4, name:"Lord Beerus", img: '/img/LordBeerus.png', stat: "" },
        { id: 5, name:"Broly", img: '/img/broly.png', stat: "" },
        { id: 5, name:"Broly", img: '/img/broly.png', stat: "" },
        { id: 6, name:"Lord Freeza", img: '/img/freeza.png', stat: "" },
        { id: 6, name:"Lord Freeza", img: '/img/freeza.png', stat: "" },
        { id: 7, name:"Shernon", img: '/img/shernon.png', stat: "" },
        { id: 7, name:"Shernon", img: '/img/shernon.png', stat: "" },
        { id: 8, name:"kid buu", img: '/img/kidBuu.png', stat: "" },
        { id: 8, name:"kid buu", img: '/img/kidBuu.png', stat: "" },
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)
    const [score, setScore] = useState(0)
    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setScore(score+1)
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className='h-[100vh] w-[100vw] bg-cover bg-no-repeat justify-center items-center text-center relative' style={{backgroundImage:`url(${bgUrl})`}}>
            <h1>
            Some popular characters of this Universe
            </h1>
            <div className="game">
                { items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                )) }
            </div>
        </div>
    )
}

export default GameDB