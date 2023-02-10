import React, { useEffect, useState } from 'react'
import axios from "axios";

function DatabasePokemon() {
    const [showData, setshowData] = useState(false)
    const [selPokemon, setselPokemon] = useState("");
    const [heroData, setheroData] = useState({})
    const [error, seterror] = useState("")
    const [pokedex, setpokedex] = useState({});
    const fetchdata = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selPokemon}`)
            console.log(res.data)
            if (res.data) {
                setheroData(res.data)
                setshowData(true);
                seterror("")
            }
            else {
                seterror('Looks like this charachter is not in this universe')
            }
        } catch (err) {
            console.log(err)
            seterror(err.message)
        }
    }
    const fetchentry = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${selPokemon}`)
            // console.log(res.data)
            setpokedex(res.data)
            console.log(pokedex)
        } catch (error) {
            console.log(error);
            seterror(error.message)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (selPokemon) {
            fetchdata()
            fetchentry()
        }
    }
    return (
        <div>
            {!showData ?
                <div className='mx-auto flex flex-col w-[30%] pt-64'>
                    <form className='text-center items-center flex bg-black rounded-lg p-4 ' onSubmit={handleSubmit}>
                        <label className=''>Enter Pokemon Name
                            <input className=' text-black rounded-lg p-4 mt-4' placeholder='Type Here...' onChange={(e) => { setselPokemon(e.target.value.toLowerCase()) }} />
                        </label>
                        <button type="submit" class="mt-8 w-[40%] bg-indigo-500 hover:bg-indigo-700 rounded-full p-2 shadow-lg font-semibold text-white">Search</button>
                        {error && <div className='text-red-600 text-lg'>{error}</div>}
                    </form>
                </div>
                :
                <div>
                    <div className='h-[80%] absolute top-20 left-24 w-[90%] bg-black items-center'>
                        <div className='flex h-[100%]'>
                            <div className='w-[30%] bg-slate-600 flex flex-col'>
                                <div className='flex-auto'>
                                    <img src={heroData.sprites.other["official-artwork"].front_default} alt={heroData.name} />
                                </div>
                                <div className='flex-auto bg-gray-900'>
                                    Name: {heroData.name}
                                </div>
                                <div className='flex-auto bg-gray-900'>
                                    base hp: {heroData.stats[0].base_stat}
                                </div>
                                <div className='flex-auto bg-gray-900'>
                                    base attack: {heroData.stats[1].base_stat}
                                </div>
                                <div className='flex-auto bg-gray-900'>
                                    base defense: {heroData.stats[2].base_stat}
                                </div>
                                <div className='flex-auto bg-gray-900'>
                                    base special-attack: {heroData.stats[3].base_stat}
                                </div>
                                <div className='flex-auto bg-gray-900'>
                                    base special-defense: {heroData.stats[4].base_stat}
                                </div>
                            </div>
                            <table>
                                <tr className='border-cyan-600 border'>
                                    <td>Description:</td>
                                    <td>{pokedex.flavor_text_entries[7].flavor_text}</td>
                                </tr>
                                <tr className='border-cyan-600 border'>
                                    <td>Genus:</td>
                                    <td>{pokedex.genera[7].genus}</td>
                                </tr>
                                <tr className='border-cyan-600 border'>
                                    <td>Generation:</td>
                                    <td>{pokedex.generation.name}</td>
                                </tr>
                                <tr className='border-cyan-600 border'>
                                    <td>Growth Rate:</td>
                                    <td>{pokedex.growth_rate.name}</td>
                                </tr>
                                <tr className='border-cyan-600 border'>
                                    <td>Abilities:</td>
                                    <td>
                                        <ul>
                                            {heroData.abilities.map((value) => (
                                                <li>{value.ability.name}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                                <tr className='border-cyan-600 border'>
                                    <td>Types:</td>
                                    <td>
                                        <ul>
                                            {heroData.types.map((value) => (
                                                <li>{value.type.name}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DatabasePokemon