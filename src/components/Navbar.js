/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
    <div className='desktop-navbar'>
      <div className='navbar-header'>
        <h1 className='navbar-title'>Bookstore CMS</h1>
        <Link to='/' className="link-item">Books</Link>
        <Link to='/categories' className='link-item'> Categories</Link>
      </div>
      <div>
        <FontAwesomeIcon className='user-icon' icon={faUser}/>
      </div>
    </div>
);

export default Navbar;