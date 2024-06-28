import { createSlice } from "@reduxjs/toolkit";
import tickets from "./Busdetails.json"
// import { store } from "./Store.js";

export const Slice=createSlice({
    name:"bustickets",
    initialState:{
            detail:tickets,
            end:"Chennai",
            end2:"Bangalore",
            count:0
    },
    reducers:{
        handleName:(state,action)=>{
            state.detail.bus=action.payload
        },
        handleBus:(state,action)=>{
            state.detail.bus2=action.payload
        },
        handleCount:(state,action)=>{
            state.count=action.payload
        }
    }

})

export default Slice.reducer
export const{handleName,handleBus,handleCount}=Slice.actions