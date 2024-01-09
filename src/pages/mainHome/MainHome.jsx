import React from 'react';
import './MainHome.css';

const MainHome = () => {
  return (
    <div className="main-home">
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">
            <img src="./src/assets/images/logo.png" alt="Logo" />
          </div>
          <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">Prevention</a>
              <a href="#">Quarantine</a>
              <a href="#">Pages</a>
              <a href="#">About</a>
              <a href="#">Help</a>
              <button href="tracker.html" className="tracker">Tracker</button> {}
            </div>
        </div>
      </nav>
      <div className="main-content">
        <div className="text-content">
          <h1>Download the covid app for get latest update</h1>
          <p>Human coronaviuses are common anda are typically associated with mild illnesses, similar to the common cold.
          The Corona Virus COVID-19 is affecting 210 countries & territories arround the world and 2 international conveyance</p>
          <button className="protect-btn">How to protect</button>
        </div>
        <div className="image-content">
        <img src="./src/assets/images/phones.png"/>

        </div>
      </div>
      <footer className="footer">
        <div className="footer-icons">
          <img src="./src/assets/images/f1.png" />
          <img src="./src/assets/images/f2.png" />
          <img src="./src/assets/images/f3.png" />
          <img src="./src/assets/images/f4.png" />
          <img src="./src/assets/images/f5.png" />
          <img src="./src/assets/images/f1.png" />
        </div>
      </footer>
    </div>
  );
};

export default MainHome;
