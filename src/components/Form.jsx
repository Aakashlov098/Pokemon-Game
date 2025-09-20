const pokemonNames = [
  "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard",
  "Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree",
  "Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata",
  "Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu",
  "Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂",
  "Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales",
  "Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume",
  "Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth",
  "Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine",
  "Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop",
  "Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool",
  "Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke",
  "Slowbro","Magnemite","Magneton","Farfetch’d","Doduo","Dodrio","Seel",
  "Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter",
  "Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode",
  "Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan",
  "Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela",
  "Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie",
  "Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros",
  "Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon",
  "Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl",
  "Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite",
  "Mewtwo","Mew","Chikorita","Bayleef","Meganium","Cyndaquil","Quilava",
  "Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret",
  "Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat",
  "Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Togetic",
  "Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill",
  "Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff","Aipom",
  "Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon",
  "Murkrow","Slowking","Misdreavus","Unown","Wobbuffet","Girafarig",
  "Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull",
  "Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring",
  "Slugma","Magcargo","Swinub","Piloswine","Corsola","Remoraid","Octillery",
  "Delibird","Mantine","Skarmory","Houndour","Houndoom","Kingdra","Phanpy",
  "Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop",
  "Smoochum","Elekid","Magby","Miltank","Blissey","Raikou","Entei","Suicune",
  "Larvitar","Pupitar","Tyranitar","Lugia","Ho-oh","Celebi","Treecko",
  "Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp",
  "Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple",
  "Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo",
  "Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper",
  "Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom",
  "Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja","Whismur",
  "Loudred","Exploud","Makuhita","Hariyama","Azurill","Nosepass","Skitty",
  "Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite",
  "Medicham","Electrike","Manectric","Plusle","Minun","Volbeat","Illumise",
  "Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord"
];
import React, { useContext, useEffect, useState } from 'react'
import PokeContext from './context/PokeContext'
  

const Form = () => {
  // const [answer,setAnswer] = useState("")
  const {pokemon,dispatch,score,chances} = useContext(PokeContext)

  const [options,setOptions] = useState([]);

  useEffect(()=>{
    if(!pokemon?.name)return;
    const wrong = [];
    while(wrong.length<3){
      const name = pokemonNames[Math.floor(Math.random()*pokemonNames.length)];
      if(name !== pokemon.name && !wrong.includes(name)){
          wrong.push(name)
      }
    }
    const all = [...wrong,pokemon.name];
    all.sort(()=>Math.random() - 0.5 );
    setOptions(all);
    // console.log(all)
  },[pokemon])


  const handleClick = (name)=>{

    if(name.toLowerCase() === pokemon.name){
      dispatch({
        type : "INCRESE_SCORE"
      })
       dispatch({
      type : "TOGGLE_VISIBILITY"
    })
       dispatch({
      type : "WIN_COUNT"
    })
   
    }
    else{
      dispatch({
        type : "DECRESE_SCORE" 
      })
       dispatch({
      type : "TOGGLE_VISIBILITY"
    })
       dispatch({
      type : "LOOSE_COUNT"
    })
    }
    
  }
  if(score===1000 || chances===0){
    return(
         <div className="flex items-center justify-center my-3">
      <button onClick={()=> window.location.href = "/"} className='bg-[#1E93AB] p-1.5 w-full cursor-pointer my-3 text-black font-semibold text-xl'>Play Again</button>
     </div>
    )
  }
  return (
   <div className="border border-gray-300 my-4 p-4 rounded-md">
      {/* <input value={answer} onChange={(e)=>setAnswer(e.target.value)} className='border border-gray-400 p-2 w-full' type="text" placeholder='Enter Pokemon Name' required /> */}
      <div className='grid grid-cols-2 gap-3'>
    {
        options.map((opt,i)=> ( 
          <button key={i}  onClick={()=> handleClick(opt)} className={opt === pokemon.name ? 'bg-[#1E93AB] border border-gray-300 p-1.5 w-full cursor-pointer my-1 text-black font-semibold text-xl  active:bg-green-500' :'bg-[#1E93AB] border border-gray-300 p-1.5 w-full cursor-pointer my-1 text-black font-semibold text-xl active:bg-red-500'}>
            {opt.toUpperCase()}
          </button>
        ))  
    }

      </div>
    </div>
  )
}

export default Form
