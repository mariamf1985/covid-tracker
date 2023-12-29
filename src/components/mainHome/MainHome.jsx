import React from 'react';

const MainHome = () => {
  return (
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
  );
};

export default MainHome;
