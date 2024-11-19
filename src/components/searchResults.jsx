import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchResults } from '../features/weather/weatherSlice'

function SearchResults() {
   const [searchParams] = useSearchParams() //쿼리 파라미터 가져오기
   const query = searchParams.get('query') // 쿼리 파라미터 값 추출
   const dispatch = useDispatch()
   const { searchResults, loading, error } = useSelector((state) => state.weathers)
   dispatch(fetchSearchResults({ query }))
   return //리턴을 뭔가 해줘야 뜸.
}

export default SearchResults
