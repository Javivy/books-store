import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='desktop-navbar'>
      <h1 className='navbar-title'>Bookstore</h1>
      <Link to='/' className="link-item">Books</Link> |
      <Link to='/categories'> Categories</Link>
    </div>
  )
}

export default Navbar;