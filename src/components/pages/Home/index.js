import Navigation from '../../Navigation';
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
            <a href="./media/CV.pdf" target="_blank">Téléchargement CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}
