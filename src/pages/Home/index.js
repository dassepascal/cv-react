// import cv from 'src/media/cv.pdf';
import Navigation from '../../components/Navigation';

import './style.scss';

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Pascal Dasse</h1>
          <h2> Développeur Front-end</h2>
          <div className="pdf">
            <a href="#" target="_blank" rel="noreferrer">Téléchargement CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}
