import React, { useState,useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

function SearchingPart({ SearchResults }) {
   const [searchQuery, setSearchQuery] = useState('')
   const handleInputChange = (event) => {
      setSearchQuery(event.target.value)
   }
   const navigate = useNavigate()
   const handleSearch = useCallback((event) => {
      event.preventDefault() //지혼자 새로고침되는것을 막아줌.

      if (searchQuery.trim()) {
         navigate(`/search?query=${searchQuery}`) //이동경로 지정
      }
   },[searchQuery,navigate])

   console.log(SearchResults)

   return (
      <div>
         <div
            style={{
               display: 'inline-block',
               position: 'relative',
               // left: '200px',
               // top: '100px',
               width: '400px',
               height: '400px',
               backgroundColor: 'gray',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
            }}
         >
            <div className="search">
               <h1 className="header_msg">지역을 검색하세요</h1>

               <form className="search_form" onSubmit={handleSearch}>
                  <TextField sx={{ backgroundColor: 'white' }} width="100px" label="지역검색" id="fullWidth" value={searchQuery} onChange={handleInputChange} />

                  <Button sx={{ width: 100, height: 56, backgroundColor: 'white' }} variant="outlined" startIcon={<SearchIcon />} type="submit">
                     검색
                  </Button>
               </form>
            </div>
         </div>
         <div
            style={{
               // display: 'inline-block',
               // position: 'relative',
               // left: '600px',
               // top: '10px',
               width: '400px',
               height: '400px',
               backgroundColor: 'gray',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
            }}
         >
            {SearchResults ? (<p>{SearchResults.id}</p>) : <p>null</p>}
         </div>
      </div>
   )
}

export default SearchingPart
