import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";

function Myheaderpage() {
  return (
   <header className='fixed-top'>
    <div className="px-3 py-2 text-bg-dark border-bottom cusheader">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
           logo
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" className="nav-link text-secondary">
              <span className='cush'><FaHome/></span>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
              <span className='cush'><FaTachometerAlt/></span>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
              <span className='cush'><FaHome/></span>
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
              <span className='cush'><FaHome/></span>
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
              <span className='cush'><FaHome/></span>
                Customers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
   </header>
  )
}

export default Myheaderpage