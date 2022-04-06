import actions from "./contacts-action";
import { createReducer } from "@reduxjs/toolkit";



const contactReduser=createReducer([],{
    
    [actions.add]:(state,{payload})=>{
        state.push(payload)
    }
,
    [actions.remove]: (state,{payload})=>        state.filter(item=>item.id !== payload),

})


export default contactReduser