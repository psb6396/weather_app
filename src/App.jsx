import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import SearchResults from './components/SearchResults'
import Forecast5days from './pages/Forecast5days'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/search" element={<SearchResults />} />
         <Route path="/forecast5days" element={<Forecast5days />}></Route>
      </Routes>
   )
}

export default App
