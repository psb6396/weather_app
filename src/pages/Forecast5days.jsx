import { fetchforecast5days } from '../features/weather/weatherSlice'
import WeatherCard from '../components/WeatherCard'
import { useDispatch, useSelector } from 'react-redux'

import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

var forecasts_list = []
function Forecast5days() {
   const [Params] = useSearchParams()
   const query = Params.get('query')
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchforecast5days({ query }))
   }, [dispatch, query])
   const { forecasts, loading, error } = useSelector((state) => state.weathers)

   forecasts_list = forecasts.list
   //    console.log(forecasts_list)
   //    useEffect(() => {
   //       console.log(Array.isArray(forecasts_list))
   //    }, [forecasts_list, forecasts])
   //    if (forecasts_list !== undefined) {
   //       forecasts_list.forEach((forecast) => {
   //          console.log(forecast.dt_txt)
   //       })
   //    }
   // console.log(forecasts_list)
   return (
      <>
         {forecasts_list ? (
            <div>
               <WeatherCard forecasts_list={forecasts_list} name={forecasts.city.name}></WeatherCard>
               {/* <p>forecasts_list가 전달됨.</p> */}
            </div>
         ) : (
            <p>forecasts_list가 전달되지 않음.</p>
         )}
      </>
   )
}
// 리턴값에 null이 넘어가지 않게끔 장치 만들기
export default Forecast5days
