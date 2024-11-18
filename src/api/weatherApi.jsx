import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const AUTH_KEY = '03c616aa70f85c101b270460950af59e'

const weatherApi = axios.create({
   baseURL: BASE_URL,
   params: {
      appid: AUTH_KEY,
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
