import React from "react"
import { Outlet } from "react-router-dom"
import TopBar from "./components/topbar"
import ScrollToTop from "./components/scrolltotop"

const LoggedInLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <ScrollToTop />
    </>
  )
}
export default LoggedInLayout
