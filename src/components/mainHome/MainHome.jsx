import React from 'react';

const MainHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-700 to-blue-900 text-white">
      <nav className="bg-white text-blue-900 px-6 py-4 w-full">
        <div className="flex items-center justify-between">
          <div>
            <img src="./src/assets/images/logo.png" alt="Logo" />
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Prevention</a>
            <a href="#" className="hover:underline">Quarantine</a>
            <a href="#" className="hover:underline">Pages</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="tracker.html" className="bg-blue-900 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition-colors">Tracker</a>
          </div>
        </div>
      </nav>
      <div className="px-6 py-4">
        <h1 className="text-5xl font-bold mb-4">Download the covid app for get latest update</h1>
        <p className="mb-4">Human coronaviuses are common anda are typically associated with mild illnesses, similar to the common cold.
        The Corona Virus COVID-19 is affecting 210 countries & territories arround the world and 2 international conveyance</p>
        <button className="bg-blue-900 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition-colors mb-4">How to protect</button>
        <img src="../assets./images/phones.png" alt="Your description" className="mx-auto"/>
      </div>
      <footer className="bg-white text-blue-900 px-6 py-4 w-full flex justify-center items-center">
        <div className="space-x-4">
          <img src="icon1.png" alt="Icon 1" />
          <img src="icon2.png" alt="Icon 2" />
          <img src="icon3.png" alt="Icon 3" />
          <img src="icon4.png" alt="Icon 4" />
          <img src="icon5.png" alt="Icon 5" />
          <img src="icon6.png" alt="Icon 6" />
        </div>
      </footer>
    </div>
  );
};

export default MainHome;

