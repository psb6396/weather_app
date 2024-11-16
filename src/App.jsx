import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import searchResults from './components/searchResults'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/search" element={<searchResults />} />
      </Routes>
   )
}

export default App
