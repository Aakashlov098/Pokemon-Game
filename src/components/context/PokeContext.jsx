import { children, createContext, useReducer } from "react";
import PokeReducer from "./PokeReducer";

const PokeContext = createContext()

export const PokeProvider = ({children})=>{

    const initialState = {
        score : 0,
        chances : 3,
        pokemon : null,
        visibility : false,
        wincount : 0,
        loosecount : 0,
        visibilityLevel : 0
    }
    const [state,dispatch] = useReducer(PokeReducer,initialState)
    return(
        <PokeContext.Provider value={{...state,dispatch}}>
            {children}
        </PokeContext.Provider>
    )
}
    



export default PokeContext