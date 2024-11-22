import SearchingPart from '../components/SearchingPart'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

function Main({ SearchResults }) {
   return (
      <div>
         <Menu />
         <SearchingPart SearchResults={SearchResults} />
         <Footer />
      </div>
   )
}

export default Main
