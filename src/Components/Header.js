import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';

function Header() {
  const {cartItems} = useSelector(state => state.cart)

  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="/">LOGO.</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent ">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item mx-5 my-4">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item my-4">
          <Link className="nav-link cart" to="/cart"><FiShoppingCart/>
          <p>{cartItems.length}</p>
          </Link>
        </li>
 
    
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
