import React, { useEffect, useState } from 'react'
import axios from "axios";
const API_KEY = 153458870835843;

function DatabaseMarvel() {
    const [showData, setshowData] = useState(false)
    const [selHero, setselHero] = useState("");
    const [heroData, setheroData] = useState({})
    const [current, setCurrent] = useState(0)
    const [error, seterror] = useState("")
    const fetchdata = async () => {
        try {
            const res = await axios.get(`https://superheroapi.com/api/${API_KEY}/search/${selHero}`)
            console.log(res.data.results)
            let temp;
            if (res.data.results) {
                temp = res.data.results.filter((data) => data.biography.publisher === 'Marvel Comics')
                if (temp.length === 0)
                    seterror('Looks like this charachter is not in this universe')
                else {
                    setheroData(temp)
                    setshowData(true);
                    seterror("")
                }
            }
            else{
                seterror('Looks like this charachter is not in this universe')
            }
        } catch (err) {
            console.log(err)
            seterror(err.message)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (selHero) {
            fetchdata()
        }
    }
    return (
        <div>
            {!showData ?
                <div className='mx-auto flex flex-col w-[25%] pt-64'>
                    <form className='text-center items-center bg-black rounded-lg p-4 flex' onSubmit={handleSubmit}>
                        <label className=''>Enter Charachter Name
                            <input className=' text-black rounded-lg p-4 mt-4' placeholder='Type Here...' onChange={(e) => { setselHero(e.target.value) }} />
                        </label>
                        <button type="submit" class="mt-8 bg-indigo-500 hover:bg-indigo-700 rounded-full p-2 shadow-lg font-semibold text-white">Search</button>
                        {error&& <div className='text-red-600 text-lg'>{error}</div>}
                    </form>
                </div>
                :
                <div>
                    <div className='h-[80%] absolute top-20 left-24 w-[90%] bg-black items-center'>
                        <div className='flex h-[100%]'>
                            <div className='w-[30%] bg-slate-600 flex flex-col'>
                                <div className='flex-auto'>
                                    <img src={heroData[current].image.url} alt={heroData[current].name} />
                                </div>
                                <div className='flex-auto bg-gray-900'>
                                    Hero Name: {heroData[current].name}
                                </div>
                                <div className='flex-auto bg-gray-900'>
                                    Gender: {heroData[current].appearance.gender}
                                </div>
                                <div className='flex-auto bg-gray-900'>
                                    Race: {heroData[current].appearance.race}
                                </div>
                                <div className='flex-auto bg-gray-900'>
                                    Height: {heroData[current].appearance.height[1]}
                                </div>
                                <div className='flex-auto bg-gray-900'>
                                    Weight: {heroData[current].appearance.weight[1]}
                                </div>
                            </div>
                            <div className='w-[100%]'>
                                <div className='flex my-4 mx-2 justify-items-start'>
                                    <div className='mr-4'>
                                        Real Name:
                                    </div>
                                    <div>
                                        {heroData[current].biography["full-name"]}
                                    </div>
                                </div>
                                <div className='flex my-4 mx-2 justify-items-start'>
                                    <div className='mr-4'>
                                        Aliases:
                                    </div>
                                    <div>
                                        {heroData[current].biography.aliases.map((c) => (
                                            <div className='inline-block'>{c},</div>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex my-4 mx-2 justify-items-start'>
                                    <div className='mr-4'>
                                        Groups Affliations:
                                    </div>
                                    <div>
                                        {heroData[current].connections["group-affiliation"]}
                                    </div>
                                </div>
                                <div className='flex my-4 mx-2 justify-items-start'>
                                    <div className='mr-4'>
                                      PowerStats:
                                    </div>
                                    <div>
                                        <ul>
                                        {Object.entries(heroData[current].powerstats).map(([key,value])=>(
                                            <li key={key}>{key}:{value}</li>
                                        ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className='flex my-4 mx-2 justify-items-start'>
                                    <div className='mr-4'>
                                      Occupation:
                                    </div>
                                    <div>
                                        <ul>
                                        {heroData[current].work.occupation}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-4 left-[50%]'>
                        <button
                        disabled={current===0}
                        onClick={() => {setCurrent(current-1)}}
                        className='m-4  bg-indigo-500 hover:bg-indigo-700 rounded-full p-2 shadow-lg font-semibold text-white'
                        >
                            Previous
                        </button>
                        {heroData.length>1?current+1:''}
                        <button
                        disabled={current === heroData.length-1}
                        onClick={() =>{setCurrent(current+1)}}
                        className = ' bg-indigo-500 hover:bg-indigo-700 rounded-full p-2 shadow-lg font-semibold text-white'
                        >
                            Next
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default DatabaseMarvel