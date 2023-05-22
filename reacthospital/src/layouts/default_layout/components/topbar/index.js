import React, { useRef } from "react"
import { NavLink } from "react-router-dom"
import "./Topbar.css"

const TopBar = () => {
  const navButton = useRef(null)
  const linksContainerRef = useRef(null)

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-white shadow-sm fixed-top'>
        <div className='container'>
          <NavLink
            className='navbar-brand pe-3 ps-4 ps-lg-2 me-2 ms-lg-2 me-lg-0 '
            to='/'
          >
            <img
              src='https://motivitylabs.com/wp-content/uploads/elementor/thumbs/logo-prgkor4cuantgaya7ag8ef6zp2tvgjfpld4fltl3e4.png'
              className=''
              alt='Motivity'
            />
          </NavLink>

          <button
            className='navbar-toggler'
            ref={navButton}
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div
            className='offcanvas offcanvas-start'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
          >
            <div className='offcanvas-header'>
              <img
                src='https://motivitylabs.com/wp-content/uploads/elementor/thumbs/logo-prgkor4cuantgaya7ag8ef6zp2tvgjfpld4fltl3e4.png'
                className=''
                alt='Motivity'
              />
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <hr className='d-block d-lg-none' />
            <div className='offcanvas-body'>
              <div
                className='navbar-collapse'
                id='navbarNavDropdown'
                ref={linksContainerRef}
              >
                <ul className='navbar-nav mx-auto'>
                  <li className='nav-item  mx-2' data-bs-dismiss='offcanvas'>
                    <NavLink className='nav-link text-dark fw-bold' to=''>
                      How it works
                    </NavLink>
                  </li>
                  <li className='nav-item mx-2' data-bs-dismiss='offcanvas'>
                    <NavLink className='nav-link text-dark fw-bold ' to=''>
                      Insurance Carriers
                    </NavLink>
                  </li>
                </ul>
                <div className='d-flex align-items-start align-items-lg-center  '>
                  <div className='d-none d-lg-block '>
                    <a
                      style={{ color: "#EE6F1B" }}
                      href='/'
                      className='text-decoration-none fw-bold'
                    >
                      989-989-9898
                    </a>
                  </div>
                  <div className='dropdown mx-0 mx-lg-4'>
                    <button
                      className='btn dropdown-toggle fw-bold px-2'
                      type='button'
                      id='dropdownMenuClickableOutside'
                      data-bs-toggle='dropdown'
                      data-bs-auto-close='inside'
                      aria-expanded='false'
                    >
                      Login
                    </button>
                    <ul
                      className='dropdown-menu shadow'
                      aria-labelledby='dropdownMenuClickableOutside'
                    >
                      <li data-bs-dismiss='offcanvas'>
                        <NavLink className='dropdown-item' to='/doctorlogin'>
                          Doctor
                        </NavLink>
                      </li>
                      <li data-bs-dismiss='offcanvas'>
                        <NavLink className='dropdown-item' to='/patientlogin'>
                          Patient
                        </NavLink>
                      </li>
                      <li data-bs-dismiss='offcanvas'>
                        <NavLink className='dropdown-item ' to='/adminlogin'>
                          Admin
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default TopBar
