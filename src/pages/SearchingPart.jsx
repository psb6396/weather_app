import React, { useState } from 'react'

import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

function SearchingPart() {
   const [searchQuery, setSearchQuery] = useState('')
   const handleInputChange = (event) => {
      setSearchQuery(event.target.value)
   }
   const handleSearch = (event) => {
      event.preventDefault()

      if (searchQuery.trim()) {
         navigate(`/search?query=${searchQuery}`) //이동경로 지정
      }
   }

   return (
      <div
         style={{
            width: '100%',
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
               <TextField sx={{ backgroundColor: 'white' }} fullWidth label="영화검색" id="fullWidth" value={searchQuery} onChange={handleInputChange} />

               <Button sx={{ width: 100, height: 56, backgroundColor: 'white' }} variant="outlined" startIcon={<SearchIcon />} type="submit">
                  검색
               </Button>
            </form>
         </div>
      </div>
   )
}

export default SearchingPart()