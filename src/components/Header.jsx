//import React from 'react';

import {transparentLogo} from "../assets";

const Header = () => {
  return (
    <div className= "fixed top-2 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#dashboard">
                    <img src={transparentLogo} width={200} height={80} alt="Color ardhi" />
                </a>

      </div>
    </div>
  )
}

export default Header;
