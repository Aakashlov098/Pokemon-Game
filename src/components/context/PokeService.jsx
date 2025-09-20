export const fetchPokemon = async ()=>{
    let random = Math.floor(Math.random() * 249 + 1)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    let data  = await response.json()
    return{
        name : data.name,
        imageURL : data.sprites.other.dream_world.front_default
    }
}
