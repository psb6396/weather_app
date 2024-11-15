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
}
