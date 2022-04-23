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
            <NavLink activeClassName="active" exact to="/">

              <i className="fas fa-home" />

              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fa-solid fa-mountain" />

              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images" />
              <span>Porfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book" />
              <span>Contact</span>
            </NavLink>
          </li>

        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin " /></a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter " /></a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen " /></a>
          </li>
        </ul>
      </div>
      <div className="signature">
        <p>fromScratch - 2022</p>
      </div>
    </div>
  );
}
