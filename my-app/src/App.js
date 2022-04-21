import React from 'react';

import './App.css';
import MainContent from "./components/MainContent/MainContent";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Input from "./components/UI/Input";
import ModalAdd from "./components/Modal/ModalAdd";


function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <h1>Product</h1>
          <MainContent/>
        </div>

      </Provider>
  );
}

export default App;
