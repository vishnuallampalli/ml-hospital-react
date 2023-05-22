import React, { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import UserContext from "../../../Utils/Context/UserContext"
import { getUserData } from "../../../Utils/Utilities/Utilities"
import "./sidebar.css"
import MaleDoc from "../../../assets/MaleDoc.png"
import FemaleDoc from "../../../assets/FemaleDoc.png"
import RemoveCookie from "../../../Utils/Hooks/removeCookie"
import Cookies from "js-cookie"

const Sidebar = () => {
  const doctorData = getUserData()
  const navigate = useNavigate()
  const { setIsAuth } = useContext(UserContext)
  const onLogout = () => {
    RemoveCookie('token')
    RemoveCookie('XSRF-TOKEN')
   
    localStorage.clear()
    setIsAuth(false)
    navigate("")
  }

  return (
    <>
      <nav className='sidenav shadow-right sidenav-light'>
        <div className='sidenav-menu'>
          <div className='profile text-center doc-profile'>
            {doctorData.gender === "female" ? (
              <img
                className='img-fluid  rounded-circle'
                src={FemaleDoc}
                alt='not found'
              />
            ) : (
              <img
                className='img-fluid  rounded-circle'
                src={MaleDoc}
                alt='not found'
              />
            )}

            <div className='my-3'>
              <h4>Dr. {doctorData.firstName} {doctorData.lastName}</h4>
              <p className='text-muted'>{doctorData.department}</p>
            </div>
          </div>
          <div className='nav'>
            <NavLink className='nav-link' to='/doctor/dashboard'>
              <div className='nav-link-icon'>
                <i className='bi bi-house-door-fill'></i>
              </div>
              <span className='nav-link-text'>Dashboard</span>
            </NavLink>
            <NavLink className='nav-link' to='/doctor/appointmentreq'>
              <div className='nav-link-icon'>
                <i className='bi bi-calendar-plus'></i>
              </div>
              <span className='nav-link-text'>Appointment Queue</span>
            </NavLink>

            <NavLink className='nav-link ' to='/doctor/appointment'>
              <div className='nav-link-icon'>
                <i className='bi bi-card-list'></i>
              </div>
              <span className='nav-link-text'>Appointments</span>
            </NavLink>

            <NavLink className='nav-link ' to='/doctor/analytics'>
              <div className='nav-link-icon'>
                <i className='bi bi-bar-chart'></i>
              </div>
              <span className='nav-link-text'>Analytics</span>
            </NavLink>

            <NavLink className='nav-link ' to='/doctor/profile'>
              <div className='nav-link-icon'>
                <i className='bi bi-pencil-square'></i>
              </div>
              <span className='nav-link-text'>Settings</span>
            </NavLink>

            <NavLink className='nav-link ' to='/doctor/ChangePassword'>
              <div className='nav-link-icon'>
                <i className='bi bi-lock'></i>
              </div>
              <span className='nav-link-text'>Change Password</span>
            </NavLink>

            <NavLink className='nav-link ' to='/doctor/help'>
              <div className='nav-link-icon'>
                <i className='bi bi-question-circle'></i>
              </div>
              <span className='nav-link-text'>Help</span>
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
