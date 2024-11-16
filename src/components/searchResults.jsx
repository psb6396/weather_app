import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function SearchResults() {
   const [searchParams] = useSearchParams() //쿼리 파라미터 가져오기
   const query = searchParams.get('query') // 쿼리 파라미터 값 추출

   const dispatch = useDispatch()
   dispatch(fetchSearchResults({}))
   return
}

export default SearchResults