import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { SearchResults } from '../../components/SearchResults'
import { searchWeather } from '../../api/weatherApi'

export const fetchSearchResults = createAsyncThunk('weathers/fetchSearchResults', async ({ query }) => {
   const response = await searchWeather(query)
   return response
})

const weathersSlice = createSlice({
   name: 'weathers',
   initialState: {
      loading: false,
      weathers: [],
      SearchResults: [],
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
            console.log(action)
         })
         //실패상태
         .addCase(fetchSearchResults.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weathersSlice.reducer
