import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Index from './jsx';

import { Cube } from 'react-preloaders';
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Index />
        <Cube />
      </div>
    </Provider>
  );
}

export default App;
