import axios from "axios"
import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { baseURL } from "../../../Utils/Api/Api"

const PatientRegistration = () => {
  const navigate = useNavigate()

  const [patientdata, setPatientData] = useState({
    patientName: "",

    patient_age: "",

    patientAddress: "",

    email: "",

    patient_gender: "",

    phoneNo: "",

    password: "",
  })
  const inputHandler = (event) => {
    setPatientData({ ...patientdata, [event.target.name]: event.target.value })
  }

  const registerPatient = (event) => {
    event.preventDefault()

    axios
      .post(baseURL + "patientRegister", patientdata,{
        withCredentials:"true"
       })
      .then((response) => {
        let status = response.data
        return status === "success"
          ? navigate("/patientlogin")
          : navigate("/patientregister")
      })
      .catch((error) => {})
  }
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePatientRegisterPassword = () => {
    setPasswordShown(passwordShown ? false : true)
  }

  return (
    <section className='patient_register'>
      <div className='container'>
        <div className='row d-flex justify-content-center my-4'>
          <div className='col-lg-8'>
            <div className='card  shadow'>
              <div className='card-header' style={{ background: "0" }}>
                {" "}
                <h4>
                  <span style={{ color: "#EE6F1B" }}>Patient</span> Registration
                </h4>{" "}
              </div>
              <div className='card-body p-5'>
                <form
                  onSubmit={registerPatient}
                  className=' was-validated row g-3'
                  noValidate
                >
                  <div className='col-md-6'>
                    <label htmlFor='name' className='form-label'>
                      Name*
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      name='patientName'
                      onChange={inputHandler}
                      placeholder='Enter Your Name'
                      aria-describedby='emailHelp'
                      pattern='[a-zA-Z\s]{4,20}'
                      required
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='email' className='form-label'>
                      Email*
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Enter Your Email '
                      name='email'
                      onChange={inputHandler}
                      id='email'
                      pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                      required
                    />
                  </div>
                  <div className='col-md-6 position-relative'>
                    <label htmlFor='password' className='form-label'>
                      Password*
                    </label>
                    <input
                      type={passwordShown ? "text" : "password"}
                      className='form-control'
                      placeholder='Enter Your Password'
                      name='password'
                      onChange={inputHandler}
                      id='password'
                      pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                      required
                    />
                    <i
                      onClick={togglePatientRegisterPassword}
                      className={` ${
                        passwordShown ? "bi bi-eye" : "bi bi-eye-slash"
                      }`}
                      style={{
                        cursor: "pointer",

                        position: "absolute",

                        right: "12%",

                        bottom: "10%",
                      }}
                    ></i>
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='age' className='form-label'>
                      Age*
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      name='patient_age'
                      onChange={inputHandler}
                      size='40'
                      placeholder='Enter Your Age'
                      id='age'
                      min={1}
                      minLength={1}
                      maxLength={2}
                      max={99}
                      required
                    />
                  </div>
                  <div className='col-md-6'>
                    <label
                      className='form-label'
                      htmlFor='gender'
                      placeholder='Enter Your Gender'
                    >
                      Gender*
                    </label>
                    <select
                      className='form-select'
                      name='patient_gender'
                      onChange={inputHandler}
                      id='gender'
                      required
                    >
                      <option value=''>Select Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='others'>Others</option>
                    </select>
                  </div>

                  <div className='col-md-6'>
                    <label htmlFor='mobileno' className='form-label'>
                      Mobile No*
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      name='phoneNo'
                      onChange={inputHandler}
                      placeholder='Enter Your Mobile Number'
                      id='mobile'
                      pattern='[1-9]{1}[0-9]{9}'
                      required
                    />
                  </div>
                  <div className='col-md-12'>
                    <label htmlFor='address' className='form-label'>
                      {" "}
                      Address
                    </label>
                    <textarea
                      className='form-control'
                      placeholder='Enter Your Address'
                      name='patientAddress'
                      onChange={inputHandler}
                      id='address'
                    ></textarea>
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
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientRegistration
