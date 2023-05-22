import React, { createContext, useState } from "react"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const UserContext = createContext({
  setIsLoader: (con) => {},
  messageAlert: (message, type) => {},
  setIsAuth: () => {},
  isAuth: String,
  sidebarOpen: String,
  setSideBarOpen: () => {},
  handleViewSidebar: () => {},
})

export const UserProvider = ({ children }) => {
  const [isLoader, setIsLoader] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const messageAlert = (message, type = "success") => {
    toast[type](message)
  }
  const [sidebarOpen, setSideBarOpen] = useState(false)
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen)
  }
  return (
    <UserContext.Provider
      value={{
        setIsLoader: setIsLoader,
        messageAlert: messageAlert,
        setIsAuth: setIsAuth,
        isAuth: isAuth,
        handleViewSidebar: handleViewSidebar,
        setSideBarOpen: setSideBarOpen,
        sidebarOpen: sidebarOpen,
      }}
    >
      <Backdrop sx={{ color: "#fff", zIndex: 9999 }} open={isLoader}>
        <CircularProgress color='inherit' />
      </Backdrop>
      <ToastContainer />
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
