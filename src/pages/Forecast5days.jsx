import { fetchforecast5days } from '../features/weather/weatherSlice'
import WeatherCard from '../components/WeatherCard'
import { useDispatch, useSelector } from 'react-redux'

import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

function Forecast5days() {
   const [Params] = useSearchParams()
   const query = Params.get('query')
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchforecast5days({ query }))
   }, [dispatch, query])
   const { forecasts, loading, error } = useSelector((state) => state.weathers)

   return <WeatherCard forecasts={forecasts} />
}

export default Forecast5days
