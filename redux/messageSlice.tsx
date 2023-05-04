import {PayloadAction, createSlice,} from '@reduxjs/toolkit'

const messageSlicse=createSlice({
    name:"message",
    initialState:{
    message:"initial message"},
    reducers:{
        setMessage(state, action:PayloadAction<string>){
            state.message=action.payload
        }
    }
})
export const {setMessage}=messageSlicse.actions;
export default messageSlicse.reducer//thisw can be impooerted with abny name 