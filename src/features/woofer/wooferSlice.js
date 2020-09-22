import {createSlice} from '@reduxjs/toolkit'


const wooferSlice = createSlice({
    name: 'woofer',
    initialState: {power:false, volume:0, frequency:40},
    reducers:{
        setPower: (state, action) => { state.power = action.payload },
        setVolume: (state, action) => { state.volume = action.payload },
        setFrequency: (state, action) => {
            state.frequency = action.payload
        },
    },
})

export const {setPower, setVolume, setFrequency} = wooferSlice.actions

export default wooferSlice.reducer