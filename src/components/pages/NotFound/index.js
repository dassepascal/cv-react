import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Notfound() {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Désolé cette page n'existepas !</h3>
        <NavLink exact to="/">
          <i className="fas fa-home" />
          <span>Accueil</span>
        </NavLink>

      </div>
    </div>
  );
}
