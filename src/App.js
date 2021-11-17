import React, {useState} from 'react';

import "./App.css";

import Modal from './components/Modal';
import Rules from './components/Rules';
import DecodingBoard from './components/DecodingBoard';
import CodePegs from './components/CodePegs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Modal/>
      <img className="logo" src="/assets/images/Logo.png" alt="logo" />
      <Rules />
      <div className="main-section">
        <DecodingBoard/>
        <CodePegs/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
