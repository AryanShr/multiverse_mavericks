import { useState } from 'react'
import Card from './Card'
import '../game.css'

const bgUrl = 'https://images8.alphacoders.com/974/thumb-1920-974682.jpg'

function GameDC(){
    const [items, setItems] = useState([
        { id: 1, name:"Aquaman", img: '/img/aquaman.png', stat: "" },
        { id: 1, name:"Aquaman", img: '/img/aquaman.png', stat: "" },
        { id: 2, name:"Batman", img: '/img/batman.png', stat: "" },
        { id: 2, name:"Batman", img: '/img/batman.png', stat: "" },
        { id: 3, name:"Cyborg", img: '/img/cyborg.png', stat: "" },
        { id: 3, name:"Cyborg", img: '/img/cyborg.png', stat: "" },
        { id: 4, name:"Wonder Women", img: '/img/wonderW.png', stat: "" },
        { id: 4, name:"Wonder Women", img: '/img/wonderW.png', stat: "" },
        { id: 5, name:"Superman", img: '/img/superman.png', stat: "" },
        { id: 5, name:"Superman", img: '/img/superman.png', stat: "" },
        { id: 6, name:"Doomsday", img: '/img/doomsDay.png', stat: "" },
        { id: 6, name:"Doomsday", img: '/img/doomsDay.png', stat: "" },
        { id: 7, name:"The Joker", img: '/img/joker.png', stat: "" },
        { id: 7, name:"The Joker", img: '/img/joker.png', stat: "" },
        { id: 8, name:"The Flash", img: '/img/theFlash.png', stat: "" },
        { id: 8, name:"The Flash", img: '/img/theFlash.png', stat: "" },
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

export default GameDC