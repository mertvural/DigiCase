import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';


export const FilmContext = React.createContext();


ReactDOM.render(
  <FilmContext.Provider value={[]}>
    <App />
  </FilmContext.Provider>,
  document.getElementById('root')
);