import React from 'react';

import fb from '../assets/facebook-black.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={fb} alt="facebook logo" />
        <div>
          <span>My profile</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
