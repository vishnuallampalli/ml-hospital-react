import React, { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import UserContext from "../../../Utils/Context/UserContext"
import { getUserData } from "../../../Utils/Utilities/Utilities"
import patientImg from "../../../assets/patient-img.png"
import "./sidebar.css"
import RemoveCookie from "../../../Utils/Hooks/removeCookie"
import Cookies from "js-cookie"
const Sidebar = () => {
  const { setIsAuth } = useContext(UserContext)
  const patientData = getUserData()
  const navigate = useNavigate()
  const onLogout = () => {
    RemoveCookie('token')
    RemoveCookie('XSRF-TOKEN')
    localStorage.clear()
    setIsAuth(false)
    navigate("")
  }
  return (
    <>
      <nav className='sidenav shadow-right sidenav-light sidenav-patient'>
        <div className='sidenav-menu'>
          <div className='profile text-center doc-profile'>
            <img
              className='img-fluid rounded-circle'
              src={patientImg}
              alt='not found'
            />

            <div className='my-3'>
              <h4> {patientData.firstName}</h4>
              <p className='text-muted text-capitalize'>
                {patientData.patientAddress}
              </p>
            </div>
          </div>
          <div className='nav'>
            <NavLink className='nav-link' to='/patient/applyappointment'>
              <div className='nav-link-icon'>
                <i className='bi bi-calendar-check-fill'></i>
              </div>
              <span className='nav-link-text'>Consultation</span>
            </NavLink>
            <NavLink className='nav-link' to='/patient/viewstatus'>
              <div className='nav-link-icon'>
                <i className='bi bi-list'></i>
              </div>
              <span className='nav-link-text'>View Status</span>
            </NavLink>

            <NavLink className='nav-link ' to='/patient/doctorList'>
              <div className='nav-link-icon'>
                <i className='bi bi-list'></i>
              </div>
              <span className='nav-link-text'>Doctor List</span>
            </NavLink>

            <NavLink className='nav-link ' to='/patient/patientpayment'>
              <div className='nav-link-icon'>
                <i className='bi bi-wallet2'></i>
              </div>
              <span className='nav-link-text'>Payments</span>
            </NavLink>

            <NavLink className='nav-link ' to='/patient/patienthistory'>
              <div className='nav-link-icon'>
                <i className='bi bi-clock-history'></i>
              </div>
              <span className='nav-link-text'>Patient History</span>
            </NavLink>

            <NavLink className='nav-link ' to='/patient/analytics'>
              <div className='nav-link-icon'>
                <i className='bi bi-bar-chart'></i>
              </div>
              <span className='nav-link-text'>Analytics</span>
            </NavLink>

            <NavLink className='nav-link ' to='/patient/viewprofile'>
              <div className='nav-link-icon'>
                <i className='bi bi-person'></i>
              </div>
              <span className='nav-link-text'>View Profile</span>
            </NavLink>

            <NavLink className='nav-link ' to='/patient/profile'>
              <div className='nav-link-icon'>
                <i className='bi bi-pencil-square'></i>
              </div>
              <span className='nav-link-text'>Settings</span>
            </NavLink>

            <NavLink className='nav-link ' to='/patient/changepassword'>
              <div className='nav-link-icon'>
                <i className='bi bi-lock'></i>
              </div>
              <span className='nav-link-text'>Change Password</span>
            </NavLink>

            <NavLink className='nav-link ' to='/patient/help'>
              <div className='nav-link-icon'>
                <i className='bi bi-question-circle'></i>
              </div>
              <span className='nav-link-text'>Help</span>
            </NavLink>

            <NavLink className='nav-link ' to='/patient/chat'>
              <div className='nav-link-icon'>
                <i className='bi bi-chat'></i>
              </div>
              <span className='nav-link-text'> Chat</span>
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
