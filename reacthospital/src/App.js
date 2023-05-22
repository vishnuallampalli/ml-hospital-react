import React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/default_layout"
import HomePage from "./components/Home/home"
import DoctorLogin from "./components/DoctorAuth/DoctorLogin"

import PatientLogin from "./components/PatientAuth/PatientLogin"
import PatientRegister from "./components/PatientAuth/PatientRegister"
import LoggedInLayout from "./layouts/logged_layout"
import Doctor from "./components/Doctor"
import DoctorDashboard from "./components/Doctor/DoctorDashboard"
import DoctorAppointmentRequest from "./components/Doctor/DoctorAppointmentRequest"
import DoctorAppointment from "./components/Doctor/DoctorAppointment"
import Patient from "./components/Patient"
import PatientApplyAppointment from "./components/Patient/ApplyAppointment"
import PatientViewStatus from "./components/Patient/ViewStatus"
import Error from "./components/Error"
import DoctorAnalytics from "./components/Doctor/DoctorAnalytics"
import PatientAnalytics from "./components/Patient/PatientAnalytics"
import PatientProfile from "./components/Patient/Profile"
import PatientChangePassword from "./components/Patient/ChangePassword"
import DoctorProfile from "./components/Doctor/Profile"
import PatientHistory from "./components/Patient/PatientHistory"
import PatientViewProfile from "./components/Patient/ViewProfile"
import DoctorChangePassword from "./components/Doctor/ChangePassword"
import AdminLogin from "./components/AdminAuth/AdminLogin"
import Admin from "./components/Admin"
import AdminDashboard from "./components/Admin/Dashboard"
import AdminDoctorList from "./components/Admin/DoctorList"
import AdminPatientList from "./components/Admin/PatientList"
import DoctorHelp from "./components/Doctor/DoctorHelp"
import PatientHelp from "./components/Patient/PatientHelp"
import Payment from "./components/Patient/Payment"
import PatientDoctorList from "./components/Patient/DoctorsList"
import Chat from "./components/Patient/Chat"
import DoctorRegistration from "./components/Admin/DoctorRegister"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path='adminlogin' element={<AdminLogin />} />

          <Route path='doctorlogin' element={<DoctorLogin />} />
        

          <Route path='patientlogin' element={<PatientLogin />} />
          <Route path='patientregister' element={<PatientRegister />} />

          <Route path='*' element={<Error />} />
        </Route>
        <Route path='/' element={<LoggedInLayout />}>
          <Route path='admin' element={<Admin />}>
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='doctorlist' element={<AdminDoctorList />} />
            <Route path='patientlist' element={<AdminPatientList />} />
            <Route path='doctorregister' element={ <DoctorRegistration/>} />
          </Route>
          <Route path='doctor' element={<Doctor />}>
            <Route path='dashboard' element={<DoctorDashboard />} />
            <Route
              path='appointmentreq'
              element={<DoctorAppointmentRequest />}
            />

            <Route path='appointment' element={<DoctorAppointment />} />
            <Route path='analytics' element={<DoctorAnalytics />} />
            <Route path='profile' element={<DoctorProfile />} />

            <Route path='changepassword' element={<DoctorChangePassword />} />
            <Route path='help' element={<DoctorHelp />} />
          </Route>
          <Route path='patient' element={<Patient />}>
            <Route
              path='applyappointment'
              element={<PatientApplyAppointment />}
            />

            <Route path='viewstatus' element={<PatientViewStatus />} />
            <Route path='analytics' element={<PatientAnalytics />} />
            <Route path='patienthistory' element={<PatientHistory />} />
            <Route path='profile' element={<PatientProfile />} />
            <Route path='viewprofile' element={<PatientViewProfile />} />
            <Route path='changepassword' element={<PatientChangePassword />} />
            <Route path='help' element={<PatientHelp />} />
            <Route path='chat' element={<Chat />} />
            <Route path='patientpayment' element={<Payment />} />
            <Route path='doctorList' element={<PatientDoctorList />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
