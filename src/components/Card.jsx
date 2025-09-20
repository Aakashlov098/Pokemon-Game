import React, { useContext, useEffect } from 'react'
import PokeContext from './context/PokeContext'
import { fetchPokemon } from './context/PokeService'
import loadingpoke from '../assets/loading-animation.gif'
const Card = () => {
  const {pokemon,dispatch,visibility,score,chances,wincount,loosecount,visibilityLevel} = useContext(PokeContext)
  const getPokemon = async()=>{
   const data =  await fetchPokemon();  
   setTimeout(()=>{
     dispatch({
      type : "GET_POKEMON",
      payload : data
    })
    dispatch({
      type : "TOGGLE_VISIBILITY"
    })
   },1200)
  }

  useEffect(()=>{
    getPokemon();
  },[score,chances])

  if(score ===1000){
  return(
     <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center">
     <h1 className="text-center text-red-500 font-bold text-4xl animate-bounce">You Won The Game🥇</h1>
     </div>
  ) 
}
  if(chances ===0){
  return(

     <div className="border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
      {/* <h1 className='text-3xl font-bold my-3'> Win {wincount}</h1>
      <h1 className='text-3xl font-bold my-3'>Loose  {loosecount}</h1> */}
     <h1 className="text-center text-red-500 font-bold text-4xl animate-bounce">You Loose The Game😔</h1>
     </div>
  ) 
}

if(!pokemon){
  return(
     <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center">
      <img className='h-64 md:52'  src="https://i.pinimg.com/originals/8a/4a/72/8a4a7213b43f4ec4f99db406be655f9e.gif" />
    </div>
  ) 
}
  return (
    
    <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center">
      <img className={!visibility ? `h-64 md:52 brightness-${visibilityLevel}` : 'h-64 md:52'}  src={pokemon?.imageURL} alt="POKE_IMAGE" draggable="false"/>
    </div>
  )
}

export default Card
