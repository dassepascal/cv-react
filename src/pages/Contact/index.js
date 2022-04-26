import { CopyToClipboard } from 'react-copy-to-clipboard';
import Navigation from '../../components/Navigation';
import './style.scss';

export default function Contact() {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header">
          <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt" />
                <span>Pluneret</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt" />
                <CopyToClipboard text="0651932479">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert('Téléphone copié !');
                    }}
                  > 06 51 93 24 79
                  </span>
                </CopyToClipboard>
              </li>
              <li>
                <i className="fas fa-envelope" />
                <CopyToClipboard text="pascaldasse56@gmail.com">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert('Email copié !');
                    }}
                  > pascaldasse56@gmail.com
                  </span>
                </CopyToClipboard>
              </li>
            </ul>
          </div>
          <div className="socialNetWork">
            <ul>

              <a className="lien" href="#" target="_blank" rel="noopener noreferrer">
                <h4>LinkedIn</h4>
                <i className="fab fa-linkedin " />
              </a>

              <a className="lien" href="#" target="_blank" rel="noopener noreferrer">
                <h4>Github</h4>
                <i className="fab fa-github" />
              </a>

              <a className="lien" href="#" target="_blank" rel="noopener noreferrer">
                <h4>Twitter</h4>
                <i className="fab fa-twitter " />
              </a>

              <a className="lien" href="#" target="_blank" rel="noopener noreferrer">
                <h4>CodePen</h4>
                <i className="fab fa-codepen " />
              </a>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
