import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { baseURL } from "../../../Utils/Api/Api"
import { getUserData } from "../../../Utils/Utilities/Utilities"

const DoctorRegistration = () => {
  const navigate = useNavigate()
  const [doctorData, setDoctorData] = useState({
    firstname: "",
    lastname: "",
    department: "",
    phoneno: "",
    gender: "",
    address: "",
    email: "",
    password: "",
    exp: "",
  })
  const authToken=getUserData().token;
  const config ={

    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer '+authToken
    },
    withCredentials:"true"

}

  const inputChange = (event) => {
    setDoctorData({ ...doctorData, [event.target.name]: event.target.value })
    //console.log(doctorData)
  }
  const onRegister = (event) => {
    event.preventDefault()

    axios
      .post(baseURL + "doctorRegistration", doctorData,config)
      .then((response) => {
        let status = response.data
        return status === "success"
          ? navigate("/doctorlogin")
          : navigate("/doctorregister")
      })
      .catch((error) => {
        console.log(`error :faild to register : ${error} `)
      })
  }
  const [passwordShown, setPasswordShown] = useState(false)
  const toggleDoctorRegisterPassword = () => {
    setPasswordShown(passwordShown ? false : true)
  }
  return (
    <section className='doctor_register'>
      <div className='container'>
        <div className='row d-flex justify-content-center my-4'>
          <div className='col-lg-8'>
            <div className='card  shadow'>
              <div className='card-header' style={{ background: "0" }}>
                {" "}
                <h4>
                  <span style={{ color: "#EE6F1B" }}>Doctor</span> Registration
                </h4>{" "}
              </div>
              <div className='card-body p-5'>
                <form
                  className='row g-3 was-validated'
                  onSubmit={onRegister}
                  noValidate
                >
                  <div className='col-md-6'>
                    <label htmlFor='fname' className='form-label'>
                      First Name*
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      name='firstname'
                      onChange={inputChange}
                      pattern='[a-zA-Z\s]{4,15}'
                      id='fname'
                      placeholder='Enter Your First Name'
                      aria-describedby='emailHelp'
                      required
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='lname' className='form-label'>
                      Last Name*
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      name='lastname'
                      onChange={inputChange}
                      id='lname'
                      pattern='[A-Za-z]{1,10}'
                      placeholder='Enter Your Last Name'
                      aria-describedby='emailHelp'
                      required
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='email' className='form-label'>
                      Email*
                    </label>
                    <input
                      type='email'
                      name='email'
                      onChange={inputChange}
                      className='form-control'
                      placeholder='Enter Your Email '
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
                      // type={passwordShown ? "text" : "password"}
                      className='form-control'
                      name='password'
                      onChange={inputChange}
                      placeholder='Enter Your Password'
                      id='password'
                      pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                      required
                    />
                    <i
                      onClick={toggleDoctorRegisterPassword}
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
                    <label
                      className='form-label'
                      htmlFor='doctorSpecialization'
                      placeholder='Enter Your Gender'
                    >
                      Specialization*
                    </label>
                    <select
                      className='form-select'
                      name='department'
                      onChange={inputChange}
                      id='doctorSpecialization'
                      required
                    >
                      <option value=''>Select Specialist</option>
                      <option value='ENT'>ENT</option>
                      <option value='Cardiologist'>Cardiologist</option>
                      <option value='Physcologist'>Physcologist</option>
                      <option value='Dermotologist'>Dermotologist</option>
                      <option value='Gynocologist'>Gynocologist</option>
                    </select>
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='exp' className='form-label'>
                      Experience*
                    </label>
                    <input
                      type='number'
                      name='exp'
                      onChange={inputChange}
                      className='form-control'
                      placeholder='Enter Your Experience'
                      id='exp'
                      min={0}
                      minLength={1}
                      maxLength={2}
                      max={80}
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
                      id='doctorGender'
                      name='gender'
                      required
                      onChange={inputChange}
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
                      type='text'
                      name='phoneno'
                      onChange={inputChange}
                      className='form-control'
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
                      name='address'
                      onChange={inputChange}
                      placeholder='Enter Your Address'
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

export default DoctorRegistration
