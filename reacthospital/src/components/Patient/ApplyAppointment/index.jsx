import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserData } from "../../../Utils/Utilities/Utilities"
import { baseURL } from "../../../Utils/Api/Api"
import axios from "axios"

const ApplyAppointment = () => {
  const navigate = useNavigate()
  const currentPatient = getUserData()
  const [appointment, setAppointment] = useState({
    problem: "",
    patientName: currentPatient.firstName,
    patientPhoneNo: currentPatient.phoneNo,
    patientGender: currentPatient.gender,
    patientemail:currentPatient.emailId,
    patientId: currentPatient.id,
    patientAge:currentPatient.age
  })
  const authToken=getUserData().token;
  const config ={

    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer '+authToken
    },withCredentials:"true"

}
  const changeHandle = (event) => {
    setAppointment({ ...appointment, [event.target.name]: event.target.value })
  }

  const onApply = (event) => {
    event.preventDefault()
    axios
      .post(`${baseURL}insertAppointment`, appointment,config)
      .then((response) => {
        localStorage.setItem("aphistory", JSON.stringify(response.data))

        //const ap = JSON.parse(localStorage.getItem("aphistory"))

        let status = response.data
        return status === "success"
          ? navigate("/patient/viewstatus")
          : navigate("/patient/applyappointment")
      })
      .catch((error) => {
        console.log("appointment insert  " + error)
      })
  }

  return (
    <>
      <div className='book_apppointment'>
        <div className='row d-flex justify-content-center my-4'>
          <div className='col-lg-9'>
            <div className='card  shadow'>
              <div className='card-header' style={{ background: "0" }}>
                {" "}
                <h4>
                  <span style={{ color: "#EE6F1B" }}>Book</span> Appointment
                </h4>{" "}
              </div>
              <div className='card-body p-5'>
                <form className='row g-3' onSubmit={onApply}>
                  <div className='col-md-12'>
                    <label htmlFor='patientName' className='form-label'>
                      Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='patientName'
                      value={currentPatient.firstName}
                      name='patientName'
                      readOnly
                      disabled
                    />
                  </div>
                  <div className='col-md-12'>
                    <label htmlFor='patientEmail' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='patientEmail'
                      value={currentPatient.emailId}
                      name='email'
                      readOnly
                      disabled
                    />
                  </div>

                  <div className='col-md-12'>
                    <label htmlFor='patientMobileNo' className='form-label'>
                      Mobile no
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      id='patientMobileNo'
                      placeholder='1234 Main St'
                      value={currentPatient.phoneNo}
                      name='patientPhoneNo'
                      readOnly
                      disabled
                    />
                  </div>

                  <div className='col-md-12'>
                    <label htmlFor='patientGender' className='form-label'>
                      Gender
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='patientGender'
                      value={currentPatient.gender}
                      name='patientGender'
                      readOnly
                      disabled
                    />
                  </div>
                  <div className='col-md-12'>
                    <label
                      className='form-label'
                      htmlFor='doctorSpecialization'
                    >
                      Specialist*
                    </label>
                    <select
                      className='form-select'
                      id='doctorSpecialization'
                      name='problem'
                      onChange={changeHandle}
                      required
                    >
                      <option selected>Select Specialist</option>
                      <option value='ENT'>ENT</option>
                      <option value='Cardiologist'>Cardiologist</option>
                      <option value='Physcologist'>Physcologist</option>
                      <option value='Dermotologist'>Dermotologist</option>
                      <option value='Gynocologist'>Gynocologist</option>
                    </select>
                  </div>

                  <div className='col-6 d-grid mx-auto mt-5 mb-3'>
                    <button
                      type='submit'
                      className='btn text-white'
                      style={{
                        backgroundColor: "#EE6F1B",
                        borderColor: "#EE6F1B",
                      }}
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ApplyAppointment
