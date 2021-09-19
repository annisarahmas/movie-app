import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './utils/store';

import Home from './pages/Home';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <div className="container-fluid movie-app">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
