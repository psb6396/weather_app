import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const AUTH_KEY = '03c616aa70f85c101b270460950af59e'

const weatherApi = axios.create({
   baseURL: BASE_URL,
   params: {
      appid: AUTH_KEY,
      units: 'metric', //켈빈 단위에서 섭씨로 바꿔주기 단위
   },
})

//공통 API 호출 함수
const fetchFromApi = async (url, params = {}) => {
   try {
      const response = await weatherApi.get(url, { params })
      return response
   } catch (error) {
      console.error(`API 요청 오류: ${error.message}`)
      throw error
   }
}

//현재날씨 가져오기
export const searchCurrentWeather = (cityname) => {
   return fetchFromApi('/weather', {
      q: cityname,
   })
}

//5일치 날씨 가져오기
export const forecast5days = (cityname) => {
   return fetchFromApi('/forecast', {
      q: cityname,
   })
}
