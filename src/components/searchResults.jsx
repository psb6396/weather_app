import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchResults } from '../features/weather/weatherSlice'
import SearchingPart from './SearchingPart'
import Main from '../pages/Main'
import { useEffect } from 'react'

function SearchResults() {
   const [searchParams] = useSearchParams() //쿼리 파라미터 가져오기
   const query = searchParams.get('query') // 쿼리 파라미터 값 추출
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchSearchResults({ query }))
   }, [dispatch, query])
   const { SearchResults, loading, error } = useSelector((state) => state.weathers)
   // return <SearchingPart SearchResults={SearchResults} />
   return <Main SearchResults={SearchResults} />
}

export default SearchResults
