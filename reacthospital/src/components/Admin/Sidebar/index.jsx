import React, { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { getUserData } from "../../../Utils/Utilities/Utilities"
import UserContext from "../../../Utils/Context/UserContext"
import AdminImage from "../../../assets/Placeholder_Person.jpg"
import "./sidebar.css"
import RemoveCookie from "../../../Utils/Hooks/removeCookie"
import Cookies from "js-cookie"
const Sidebar = () => {
  const adminobj = getUserData()
  const navigate = useNavigate()
  const { setIsAuth } = useContext(UserContext)

  const onLogout = () => {
    localStorage.clear()
    setIsAuth(false)
    RemoveCookie('XSRF-TOKEN')
    RemoveCookie('token')
    navigate("")
  }
  return (
    <>
      <nav className='sidenav shadow-right sidenav-light sidenav-admin'>
        <div className='sidenav-menu'>
          <div className='profile text-center doc-profile'>
            <img
              className='img-fluid  rounded-circle'
              src={AdminImage}
              alt='not found'
            />

            <div className='my-3'>
              <h4>
                {adminobj.name} {adminobj.lastName}
              </h4>
            </div>
          </div>
          <div className='nav'>
            <NavLink className='nav-link' to='/admin/dashboard'>
              <div className='nav-link-icon'>
                <i className='bi bi-house-door-fill'></i>
              </div>
              <span className='nav-link-text'>Dashboard</span>
            </NavLink>
            <NavLink className='nav-link' to='/admin/doctorlist'>
              <div className='nav-link-icon'>
                <i className='bi bi-calendar-plus'></i>
              </div>
              <span className='nav-link-text'>Doctor List</span>
            </NavLink>

            <NavLink className='nav-link ' to='/admin/patientlist'>
              <div className='nav-link-icon'>
                <i className='bi bi-card-list'></i>
              </div>
              <span className='nav-link-text'>Patient List</span>
            </NavLink>
            <NavLink className='nav-link ' to='/admin/doctorregister'>
              <div className='nav-link-icon'>
                <i className='bi bi-card-list'></i>
              </div>
              <span className='nav-link-text'>Doctor Register</span>
            </NavLink>
            <NavLink className='nav-link' to='/' onClick={onLogout}>
              <div className='nav-link-icon'>
                <i className='bi bi-box-arrow-right'></i>
              </div>
              <span className='nav-link-text'>Logout</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
