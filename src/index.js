import { StrictMode } from 'react';
import ReactDom from 'react-dom';

import App from 'src/components/App';

const rootReactElement = (
  <StrictMode>

    <App />

  </StrictMode>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
