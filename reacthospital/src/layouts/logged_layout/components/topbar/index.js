import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import UserContext from "../../../../Utils/Context/UserContext"
import "./Topbar.css"

const TopBar = () => {
  const { handleViewSidebar } = useContext(UserContext)

  return (
    <>
      <nav className='topnav navbar navbar-expand shadow  navbar-light bg-white'>
        <div className='container justify-content-between justify-content-sm-start'>
          <NavLink className='navbar-brand pe-3 ps-4 ps-lg-2 me-2 ms-lg-2 me-lg-0 '>
            <img
              src='https://motivitylabs.com/wp-content/uploads/elementor/thumbs/logo-prgkor4cuantgaya7ag8ef6zp2tvgjfpld4fltl3e4.png'
              className=''
              alt='Motivity'
            />
          </NavLink>
          <button
            className='btn order-1 order-lg-0  d-flex align-items-center'
            id='sidebarToggle'
            onClick={handleViewSidebar}
          >
            <i className='bi bi-list'></i>
          </button>
        </div>
      </nav>
    </>
  )
}

export default TopBar
