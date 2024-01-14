import React from 'react';
import './mainHome.css';
import { useNavigate } from 'react-router-dom';
import time from './src/assets/images/f1.png'; 
import ocean from './src/assets/images/f2.png';
import albero from './src/assets/images/f3.png';
import dora from './src/assets/images/f4.png';
import green from './src/assets/images/f5.png';
import phone from './src/assets/images/phones.png';
import logo from './src/assets/images/logo.png';

const MainHome = () => {
  const navigate = useNavigate();

  const handleTrackerButtonClick = () => {
    navigate('/tracker-1');
  };

  return (
    <div className="main-home font-[poppins]">
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-links">
              <a href="#">Home <i className="fa fa-caret-down"></i></a>
              <a href="#">Prevention</a>
              <a href="#">Quarantine</a>
              <a href="#">Pages <i className="fa fa-caret-down"></i></a>
              <a href="#">About</a>
              <a href="#">Help</a>
              <button className="tracker"  onClick={handleTrackerButtonClick}>Tracker</button> {}
            </div>
        </div>
      </nav>
      <div className="main-content">
        <div className="text-content">
          <h1>Download the covid app for get latest update</h1>
          <p>Human coronaviuses are common anda are typically associated with mild illnesses, similar to the common cold.
          The Corona Virus COVID-19 is affecting 210 countries & territories arround the world and 2 international conveyance</p>
          <button className="protect-btn">HOW TO PROTECT</button>
        </div>
        <div className="image-content">
        <img src={phone}/>

        </div>
      </div>
      <footer className="footer">
        <div className="footer-icons">
          <img src={time} />
          <img src={ocean} />
          <img src={albero} />
          <img src={dora} />
          <img src={green} />
          <img src={time} />
        </div>
      </footer>
    </div>
  );
};

export default MainHome;
