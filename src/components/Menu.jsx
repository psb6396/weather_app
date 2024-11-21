import { NavLink } from 'react-router-dom'
import '../css/footer.css'

function Menu() {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <NavLink to="/" image="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png">
                     {/* <img src="../img/logo_white_cropped" /> */}
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Menu
