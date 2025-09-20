const PokeReducer = (state,action) =>{

    switch (action.type) {
        case "GET_POKEMON":
            return{
                ...state,
                pokemon : action.payload
            }
        
            case "INCRESE_SCORE" :
                return{
                    ...state,
                    score : state.score + 100
                }
            case "DECRESE_SCORE" :
                return{
                    ...state,
                    chances : state.chances - 1
                }
            case "TOGGLE_VISIBILITY" :
                return{
                    ...state,
                    visibility : state.visibility ? false : true
                }
            case "WIN_COUNT" :
                return{
                    ...state,
                    wincount : state.wincount + 1
                }
            case "LOOSE_COUNT" :
                return{
                    ...state,
                    loosecount : state.loosecount + 1
                }
            case "VISIBILITY_LEVEL" :
                return{
                    ...state,
                    visibilityLevel : action.payload
                }
                
        default:
            
    }

}

export default PokeReducer


