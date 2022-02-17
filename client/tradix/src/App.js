import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Index from './jsx';

import { Cube } from 'react-preloaders';
import { Provider } from 'react-redux'
import store from './redux/store'
import Loader from './jsx/element/loader';
import ErrorPopup from './jsx/element/error-popup';


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Index />
        {/* <Loader /> */}
        <ErrorPopup />
        <Cube color={'#1652f0'} />
      </div>
    </Provider>
  );
}

export default App;
