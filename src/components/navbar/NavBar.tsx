import './NavBar.css';

function Navbar() {
  return (
    <div className='navbar-container'>
      <nav>
        <div>
          <a className="title" href="#title"><p>COMPANY</p></a>
        </div>
        <div className="navbar-right">
          <a href="#account"><i className="material-icons">person</i></a>
          <a href="#cart"><i className="material-icons">shopping_cart</i></a>
        </div>
	    </nav>
    </div>

  );
}

export default Navbar;
