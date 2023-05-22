import React, { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import login from "../../../assets/login.png"
import axios from "axios"
import { baseURL } from "../../../Utils/Api/Api"
import { userDataStore } from "../../../Utils/Utilities/Utilities"
//import { getUserData } from "../../../Utils/Utilities/Utilities"
import UserContext from "../../../Utils/Context/UserContext"
import RemoveCookie from "../../../Utils/Hooks/removeCookie"
import SetCookie from "../../../Utils/Hooks/setCookie"

const Patientlogin = () => {
  const { messageAlert, setIsAuth, isAuth, setIsLoader } =
    useContext(UserContext)
  const navigate = useNavigate()
  const [patient, setPatient] = useState({ email: "", password: "" })
  const [valid, setValid] = useState(false)

  const onLogin = async (event) => {
    event.preventDefault()
    setIsLoader(true)

    try {
      const response = await axios.post(`${baseURL}patientlogin`, {
        email: patient.email,
        password: patient.password,
      },{
        withCredentials:"true"
       })

      if (
        response &&
        "data" in response &&
        response["data"] 
      ) {
        setIsLoader(false)
        userDataStore(response.data)
        RemoveCookie('token')
        SetCookie('token',response.data.token)
        //const patientobj = getUserData()
        setIsAuth(true)
        localStorage.setItem("MY_APP_STATE_PATIENT", JSON.stringify(isAuth))
        navigate("/patient/viewstatus")
        /* return patientobj.password === patient.password
          ? navigate("/patient/viewstatus")
          : setValid(true) */
      } else {
        setValid(true)
        setIsLoader(false)
      }
    } catch (error) {
      console.log(error)
      setIsLoader(false)
      messageAlert(error.response.data.error, "error")

    }
  }

  const handleChange = (event) => {
    setPatient({ ...patient, [event.target.name]: event.target.value })
  }

  const [passwordShown, setPasswordShown] = useState(false)
  /*  const toggleLoginPatientPassword = () => {
    setPasswordShown(passwordShown ? false : true)
  } */
  return (
    <>
      <section className='doc-login px-2'>
        <div className='container'>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-lg-9 col-md-12 col-sm-12 col-12'>
              <div className='card'>
                <div className='card-body p-0'>
                  <div
                    className='row h-100 g-0 d-flex align-items-center'
                    style={{ backgroundColor: "rgba(255, 232, 217,0.5)" }}
                  >
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                      <img src={login} className='img-fluid p-5' alt='' />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 bg-white'>
                      <div className='p-4 p-md-5 flex-grow-1'>
                        <h2 className='text-center'>
                          <span
                            style={{ color: "#EE6F1B", marginRight: "0.5rem" }}
                          >
                            Patient
                          </span>
                          Login
                        </h2>
                        <form
                          onSubmit={onLogin}
                          className='mt-4 was-validated'
                          noValidate
                        >
                          <div className='mb-3'>
                            <label
                              htmlFor='patientEmail'
                              className='form-label'
                            >
                              Email*
                            </label>
                            <input
                              type='email'
                              className='form-control'
                              id='patientEmail'
                              placeholder='Enter Your Email'
                              aria-describedby='emailHelp'
                              name='email'
                              onChange={handleChange}
                              pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                              required
                            />

                            <div className='invalid-feedback'>
                              Please enter email
                            </div>
                          </div>
                          <div className='mb-3 position-relative'>
                            <label
                              htmlFor='patientPassword'
                              className='form-label'
                            >
                              Password*
                            </label>
                            <input
                              type={passwordShown ? "text" : "password"}
                              className='form-control'
                              placeholder='Enter Your Password'
                              id='patientPassword'
                              name='password'
                              onChange={handleChange}
                              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                              required
                            />

                            <div className='invalid-feedback'>
                              Please enter password
                            </div>
                          </div>
                          {valid ? (
                            <>
                              <div className='text-center py-2 mt-5'>
                                <h6 style={{ color: "#D8000C" }}>
                                  {" "}
                                  Invalid username Or password{" "}
                                </h6>
                              </div>
                              <div className='d-grid col-6 mx-auto mt-2 mb-3'>
                                <button
                                  type='submit'
                                  className='btn text-white '
                                  style={{
                                    backgroundColor: "#EE6F1B",
                                    borderColor: "#EE6F1B",
                                  }}
                                >
                                  Login
                                </button>
                                <NavLink
                                  className='text-center text-decoration-none py-2'
                                  style={{ color: "#EE6F1B" }}
                                  to='/patientregister'
                                >
                                  Sign Up
                                </NavLink>
                              </div>
                            </>
                          ) : (
                            <div className='d-grid col-6 mx-auto mt-5 mb-3'>
                              <button
                                type='submit'
                                className='btn text-white '
                                style={{
                                  backgroundColor: "#EE6F1B",
                                  borderColor: "#EE6F1B",
                                }}
                              >
                                Login
                              </button>
                              <NavLink
                                className='text-center text-decoration-none py-2'
                                style={{ color: "#EE6F1B" }}
                                to='/patientregister'
                              >
                                Sign Up
                              </NavLink>
                            </div>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Patientlogin
