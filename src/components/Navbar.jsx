import React, { useContext, useState } from 'react'
import PokeContext from './context/PokeContext'

const Navbar = () => {
  const {dispatch} = useContext(PokeContext)
  
  const [newlevel,setLevel] = useState("")
  const handleVisibility = (e)=>{
    const newlevel = e.target.value
    setLevel(newlevel)
    dispatch({
    type : "VISIBILITY_LEVEL",
    payload : newlevel
  })
  }
 
  
  return (
     <nav className='bg-[#E62727] py-4 '>
     <div className='md:flex justify-between px-11'>
       <h1 className='text-center mb-5 font-bold   md:font-bold text-3xl text-[#F3F2EC]'>Pokegame</h1>
       
        <div className='flex items-center gap-3'>
          <label htmlFor='level' className='font-bold text-3xl text-[#F3F2EC]'>Select Level </label>
          <select onChange={handleVisibility} className='border border-gray-300 p-1.5 text-[#F3F2EC] bg-[#E62727] rounded-md' name="" id="level">
          <option value="" >SELECT OPTIONS</option>
          <option value="75" >ESAY</option>
          <option value="50">MEDIUM</option>
          <option value="0">HARD</option>
          </select>
        </div>
     </div>
    </nav>
  )
}

export default Navbar
