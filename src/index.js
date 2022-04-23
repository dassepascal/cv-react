import { StrictMode } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/components/App';

const rootReactElement = (
  <StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </StrictMode>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
