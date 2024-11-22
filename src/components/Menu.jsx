import { NavLink } from 'react-router-dom'
import '../css/Menu.css'
import logo from '../img/logo_white_cropped.png'

function Menu() {
   return (
      <nav>
         <ul>
            <li>
               <NavLink to="/">
                  <img src={logo} />
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}

export default Menu
