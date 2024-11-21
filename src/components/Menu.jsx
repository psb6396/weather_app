import { NavLink } from 'react-router-dom'
import '../css/footer.css'
import logo from '../img/logo_white_cropped.png'

function Menu() {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <NavLink to="/">
                     <img src={logo} />
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Menu
