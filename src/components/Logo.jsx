import React from 'react';
import logo from '../assets/G3_logo.png';

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="G3 Core Logo" className="h-12 w-auto mr-2" />
      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary dark:from-neon-primary dark:to-neon-secondary text-transparent bg-clip-text">
        G3 Core
      </span>
    </div>
  );
};

export default Logo; 