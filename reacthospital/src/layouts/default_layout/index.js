import React from "react"
import { Outlet } from "react-router-dom"
import TopBar from "./components/topbar"
import Footer from "./components/footer"
import ScrollToTop from "./components/scrolltotop"

const DefaultLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  )
}
export default DefaultLayout
