import React from 'react'
import './Navbar.css'

function Navbar(props) {

	const pathName = props?.page;

	const changePage = (pathName) => {
		props.changePage(pathName);
	}

	return (

		<nav className="navbar">

        <ul className="navbar-list">

          <li className="navbar-item" >
            <button 
            className={pathName==='about' ? 'navbar-link active' : 'navbar-link'} data-nav-link onClick={() => changePage('about')}>
              About
            </button>
          </li>

          <li className="navbar-item">
          <button 
            className={pathName==='portfolio' ? 'navbar-link active' : 'navbar-link'} data-nav-link onClick={() => changePage('portfolio')}>
              Portfolio
            </button>
          </li>

          <li className="navbar-item">
          <button 
            className={pathName==='contact' ? 'navbar-link active' : 'navbar-link'} data-nav-link onClick={() => changePage('contact')}>
              Contact
            </button>
          </li>

        </ul>

      </nav>
	)
}

export default Navbar