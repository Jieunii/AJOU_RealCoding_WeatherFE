import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RouterApp from './RouterApp';
import './App.css';

function App() {
  console.log(BrowserRouter);
  return (
    <BrowserRouter>
      <RouterApp/>
    </BrowserRouter>
  );
}

export default App;
