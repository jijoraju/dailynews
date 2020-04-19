import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <a className='navbar-brand' href='/'>
        <i className='fa fa-newspaper-o' aria-hidden='true'></i>
        &nbsp; Daily News
      </a>
    </nav>
  );
};

export default Navbar;
