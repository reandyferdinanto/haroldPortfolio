import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import App from '@containers/App';
import Language from '@containers/Language';

import store, { persistor } from './configureStore';

import '@styles/core.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Language>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Language>
    </PersistGate>
  </Provider>
);
