import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSearchResults = createAsyncThunk('weathers/fetchSearchResults', async ({ query }) => {
    const response = await searchWeather(query)
    return response.data????
})
