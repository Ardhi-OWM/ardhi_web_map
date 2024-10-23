//import React from 'react';

import { navigation } from "../constants";
import { transparentLogo } from "../assets";


const Header = () => {
  console.log("Current Pathname:", window.location.pathname);

  return (
    <div className="fixed top-1 left-0 w-full z-50 p-1 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
         {/* Logo Section */}
        <a className="block w-[12rem] xl:mr-8" href="/dashboard">
          <img src={transparentLogo} width={200} height={80} alt="Color ardhi" />
        </a>
        <div className="flex justify-end w-full">
          <nav className="flex space-x-4">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`block relative border-b border-current rounded-lg px-3 mx-5 text-[15px] tracking-wide"
                ${window.location.pathname === item.href
                    ? "border-current"
                    : "border-transparent hover:border-current"
                  }`}
              >     
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
 

}

export default Header;
