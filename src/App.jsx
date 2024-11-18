import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import SearchResults from './components/SearchResults'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/search" element={<SearchResults />} />
      </Routes>
   )
}

export default App
