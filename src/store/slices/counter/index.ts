import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {CounterInitialState, CounterSliceName} from "./types";

export const initialState: CounterInitialState = {
    value: 0
}

export const countSlice = createSlice({
    name: CounterSliceName,
    initialState,
    reducers: {
        increment: state => {
            state.value +=1
        },
        decrement: state => {
            state.value -=1
        },
        incrementByAmount: (state, action: PayloadAction<number> ) => {
            state.value +=action.payload
        },
    }
})

export const {increment, incrementByAmount, decrement} = countSlice.actions
export default countSlice.reducer

