import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchWooferState = createAsyncThunk('/woofer/fetchWooferState', async () => {
    const response = await fetch('/woofer')
    return response.json()
})

export const savePower = createAsyncThunk('/woofer/savePower', async power => {
    const response = await fetch('/woofer/save_power', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({power: power})
          })
          return response.json()
    })

export const saveVolume = createAsyncThunk('/woofer/saveVolume', async volume => {
    const response = await fetch('/woofer/save_volume', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({volume: volume})
            })
            return response.json()
    })

export const saveFrequency = createAsyncThunk('/woofer/saveFrequency', async frequency => {
    const response = await fetch('/woofer/save_frequency', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({frequency: frequency})
            })
            return response.json()
    })

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
    extraReducers:{
        [fetchWooferState.fulfilled]: (state, action) => {
            const fetchedState = action.payload
            for (let key of Object.keys(fetchedState)){state[key] = fetchedState[key]}
        },
        [fetchWooferState.rejected]: (state, action) => {
            console.log('Rejected!')
            console.error(action.error)
        },
        [savePower.fulfilled]: (state, action) => {
            console.log('Power set', action.payload )
        },
        [saveVolume.fulfilled]: (state, action) => {
            console.log('Volume set', action.payload )
        },
        [saveVolume.fulfilled]: (state, action) => {
            console.log('Volume set', action.payload )
        },
    }
})

export const {setPower, setVolume, setFrequency} = wooferSlice.actions

export default wooferSlice.reducer