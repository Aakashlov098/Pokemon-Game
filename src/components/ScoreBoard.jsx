import React, { useContext } from 'react'
import Pokeball from '../assets/pokeball.png'
import PokeContext from './context/PokeContext';
const ScoreBoard = () => {

  const {score,chances} = useContext(PokeContext)
  let Chances = chances;
  return (
     <div className='flex items-center justify-between my-4'>
      <p className='font-semibold text-gray-500 text-[1.2rem]'>Score : {score}</p>
      <div className='flex'>
      {
        Chances === 3 ? (
          <>
            <img className='h-8' src={Pokeball} alt="image-pokeball" />
            <img className='h-8' src={Pokeball} alt="image-pokeball" />
            <img className='h-8' src={Pokeball} alt="image-pokeball" />
            
          </>
        ) : Chances === 2 ?(
          <>
            <img className='h-8' src={Pokeball} alt="image-pokeball" />
            <img className='h-8' src={Pokeball} alt="image-pokeball" />
            
            </>
        ) : Chances === 1 ?(
          <>
            <img className='h-8' src={Pokeball} alt="image-pokeball" />
          </>
        ) : (
          <>
          </>
        )

}
      </div>
    </div>
)
}
export default ScoreBoard
