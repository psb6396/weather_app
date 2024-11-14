import React, { useState } from 'react'

import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

function SearchingPart() {
   const [searchQuery, setSearchQuery] = useState('')
   const handleInputChange = (event) => {
      setSearchQuery(event.target.value)
   }
}
