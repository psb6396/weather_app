import React, { useState, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Menu from './Menu'
import '../css/SearchingPart.css'

function SearchingPart({ SearchResults }) {
   const [searchQuery, setSearchQuery] = useState('')
   const handleInputChange = (event) => {
      setSearchQuery(event.target.value)
   }
   const navigate = useNavigate()
   const handleSearch = useCallback(
      (event) => {
         event.preventDefault() //지혼자 새로고침되는것을 막아줌.

         if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`) //이동경로 지정
         }
      },
      [searchQuery, navigate]
   )

   // console.log(SearchResults)

   return (
      <>
         <Menu />
         <div class="container">
            <div
               class="search"
               style={{
                  width: '400px',
                  height: '400px',
                  backgroundColor: 'gray',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
               }}
            >
               <div className="searchingpart">
                  <h2 className="header_msg">지역을 검색하세요(영어로만)</h2>

                  <form className="search_form" onSubmit={handleSearch}>
                     <TextField sx={{ backgroundColor: 'white' }} width="100px" label="지역검색" id="fullWidth" value={searchQuery} onChange={handleInputChange} />

                     <Button sx={{ width: 100, height: 56, backgroundColor: 'white' }} variant="outlined" startIcon={<SearchIcon />} type="submit">
                        검색
                     </Button>
                  </form>
               </div>
            </div>
            <div
               class="searchresults"
               style={{
                  width: '400px',
                  height: '400px',
                  backgroundColor: 'gray',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
               }}
            >
               {SearchResults ? (
                  <p>
                     <h3>
                        {SearchResults.name}의 현재날씨 :
                        {SearchResults.weather.map((element) => (
                           <>{element.description}</>
                        ))}
                     </h3>
                     <p>온도 : {SearchResults.main.temp}도</p>
                     <p>체감온도 : {SearchResults.main.feels_like}도</p>
                     <p>습도 : {SearchResults.main.humidity}</p>

                     <Link className="forecastlink" to={`/forecast5days?query=${SearchResults.name}`}>{`${SearchResults.name}의 5일치 날씨`}</Link>
                  </p>
               ) : (
                  <p>null</p>
               )}
            </div>
         </div>
      </>
   )
}

export default SearchingPart
