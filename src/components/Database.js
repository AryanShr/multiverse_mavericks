import React, { useState } from 'react'

function Database() {
    const [showData,setshowData] = useState(false)
    const handleSubmit = ()=>{
        setshowData(true)
    }
  return (
    <div>
        {!showData?<form className='text-center items-center pt-64' onSubmit={handleSubmit}>
            <div className='mx-auto flex flex-col w-[30%] bg-black '>
                <label className='p-8 '>Enter Charachter Name</label>
                <input className='m-8 text-black rounded-lg p-4' placeholder='Type Here...'/>
                <button type='submit' class="m-8 bg-indigo-500 hover:bg-indigo-700 rounded-full p-2 shadow-lg font-semibold text-white">Search</button>
            </div>
        </form>
        :
        <div>
            <div className='h-[80%] absolute top-20 left-24 w-[90%] bg-black items-center'>
                <div className='flex h-[100%]'>
                <div className='w-[30%] bg-slate-600 flex flex-col'>
                    <div className='h-[70%]'>
                        Picture
                    </div>
                    <div className='flex-auto bg-gray-900'>
                        Name
                    </div>
                </div>
                <div className='w-[100%]'>
                    Information
                </div>
                </div>
            </div>
        </div>
        }
    </div>
  )
}

export default Database