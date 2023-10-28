import React from 'react'
import { Link } from 'react-router-dom'
import { CartProvider, useCart } from 'react-use-cart'

function NavBar() {
  const { totalItems } = useCart();
  return (
    <CartProvider>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand m-0" to="/">
              <h2 className='text-brown'>حلواني براونيز</h2>
            </Link>
            <ul className="navbar-nav mb-lg-0  ">
              <li className="nav-item">
                <Link className="nav-link" to="/oriental">حلويات شرقية</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gateax">حلويات غربية</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bakery">مخبوزات</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/yamesh">ياميش ومكسرات</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/elmoled">حلاوة المولد</Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center icons ">
            <Link className="me-3" to="/cart"> <span className='ml-1 total'>{totalItems}</span>
              <i className="fa-solid fa-cart-plus text-brown"></i>
            </Link>

            <Link className="me-3" to="/search">
              <i className="fa-solid fa-magnifying-glass text-brown"></i>
            </Link>

            <Link className="me-3" to="/user">
              <i className="fa-solid fa-user text-brown"></i>
            </Link>
          </div>


        </div>
      </nav>
    </CartProvider>
  )
}


export default NavBar