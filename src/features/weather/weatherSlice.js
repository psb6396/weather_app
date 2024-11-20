import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { searchCurrentWeather, forecast5days } from '../../api/weatherApi'

export const fetchSearchResults = createAsyncThunk('weathers/fetchSearchResults', async ({ query }) => {
   const response = await searchCurrentWeather(query)
   return response.data
})

export const fetchforecast5days = createAsyncThunk('weathers/fetchforecast5days', async ({ query }) => {
   const response = await forecast5days(query)
   return response.data
})

const weathersSlice = createSlice({
   name: 'weathers',
   initialState: {
      forecasts: [],
      loading: false,
      weathers: [],
      SearchResults: null,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      //대기상태
      builder
         .addCase(fetchSearchResults.pending, (state) => {
            state.loading = true
            state.error = null //새로운 요청 시 에러 초기화
         })
         //성공상태
         .addCase(fetchSearchResults.fulfilled, (state, action) => {
            state.loading = false
            state.SearchResults = action.payload
         })
         //실패상태
         .addCase(fetchSearchResults.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchforecast5days.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchforecast5days.fulfilled, (state, action) => {
            state.loading = false
            state.forecasts = action.payload
         })
         .addCase(fetchforecast5days.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weathersSlice.reducer
