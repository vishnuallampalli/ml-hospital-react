import React, { useContext } from "react"
import { Outlet } from "react-router-dom"
import UserContext from "../../Utils/Context/UserContext"
import Sidebar from "./Sidebar"

const Admin = () => {
  const { sidebarOpen } = useContext(UserContext)
  const sidebarClass = sidebarOpen ? "sidenav-toggled" : ""
  //props.funcFooter(false)
  return (
    <div className={sidebarClass}>
      <div id='layoutSidenav'>
        <div id='layoutSidenav_nav'>
          <Sidebar />
        </div>
        <div id='layoutSidenav_content'>
          <main>
            <div className='container-xl px-4 mt-4'>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Admin
