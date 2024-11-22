import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import SearchResults from './components/SearchResults'
import Forecast5days from './components/Forecast5days'
import NotFound from './pages/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/search" element={<SearchResults />} />
         <Route path="/forecast5days" element={<Forecast5days />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
