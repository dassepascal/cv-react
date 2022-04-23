import './style.scss';
import { NavLink } from 'react-router-dom';
import portrait from '../media/portrait.jpg';

export default function Navigation() {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src={portrait} alt="portrait" />
          <h3>Dasse Pascal</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassname="navactive">

              <i className="fas fa-home" />

              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassname="navactive">
              <i className="fa-solid fa-mountain" />

              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassname="navactive">
              <i className="fas fa-images" />
              <span>Porfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassname="navactive">
              <i className="fas fa-address-book" />
              <span>Contact</span>
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
}
