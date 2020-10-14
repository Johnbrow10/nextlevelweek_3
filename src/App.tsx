import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/logo.svg';
function App() {
  return (
    <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="logo Happy"/>

      <main>
        <h1> Leve Felicidade ao Mundo </h1>
        <p> Visite orfanatos e mude o dia de muitas crianças. </p>
      </main>

      <div className="location">
        <strong>São Paulo</strong>
        <span>São Paulo</span>
      </div>

      <a href="" className="enter-app"> &gt; </a>

    </div>
    </div>
    );
  }
  
  export default App;
  