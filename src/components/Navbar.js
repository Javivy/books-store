/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const activeStyle = {
    color: '#000',
    fontWeight: 'bold',
  };

  return (
    <div className='desktop-navbar'>
      <div className='navbar-header'>
        <h1 className='navbar-title'>Bookstore CMS</h1>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to='/' className="link-item">Books</NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to='/categories' className='link-item'> Categories</NavLink>
      </div>
      <div>
        <FontAwesomeIcon className='user-icon' icon={faUser}/>
      </div>
    </div>
  );
};

export default Navbar;