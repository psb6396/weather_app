import { fetchforecast5days } from '../features/weather/weatherSlice'
import WeatherCard from '../components/WeatherCard'

import { useSearchParams } from 'react-router-dom'

function Forecast5days() {
   return <WeatherCard />
}

export default Forecast5days
