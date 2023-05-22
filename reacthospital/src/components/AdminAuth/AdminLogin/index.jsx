import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import login from "../../../assets/login.png"
import axios from "axios"
import { baseURL } from "../../../Utils/Api/Api"
import { getUserData, userDataStore } from "../../../Utils/Utilities/Utilities"
//import { getUserData } from "../../../Utils/Utilities/Utilities"
import UserContext from "../../../Utils/Context/UserContext"
import SetCookie from "../../../Utils/Hooks/setCookie"
import RemoveCookie from "../../../Utils/Hooks/removeCookie"

const AdminLogin = () => {
  const [valid, setValid] = useState(false)
  const { setIsAuth, isAuth, messageAlert, setIsLoader } =
    useContext(UserContext)
  const navigate = useNavigate()
  const [admin, setAdmin] = useState({ emailId: "", password: "" })

  const onLogin = async (event) => {
    event.preventDefault()
    setIsLoader(true)
    const sam=JSON.parse( localStorage.getItem("csrftoken"))


    try {
      const response = await axios.post(`${baseURL}adminlogin`, {
        emailId: admin.emailId,
        password: admin.password,
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
        //const adminobj = getUserData()
        setIsAuth(true)
        // console.log(getUserData().csrf_Token);
        localStorage.setItem("MY_APP_STATE_ADMIN", JSON.stringify(isAuth))
        navigate("/admin/dashboard")
        /* return adminobj.emailId === admin.emailId
          ? navigate("/admin/dashboard")
          : setValid(true) */
      } else {
        setValid(true)
        // setIsLoader(false)
      }
    } catch (error) {
      console.log(error)
      setIsLoader(false)
      messageAlert(error.response.data.error, "error")

    }
  }

  const handleChange = (event) => {
    setAdmin({ ...admin, [event.target.name]: event.target.value })
  }
  const [passwordShown, setPasswordShown] = useState(false)

  /* const toggleAdminLoginPassword = () => {
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
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 bg-white py-0 py-lg-2'>
                      <div className='p-4 p-md-5 flex-grow-1'>
                        <h2 className='text-center'>
                          <span
                            style={{ color: "#EE6F1B", marginRight: "0.5rem" }}
                          >
                            Admin
                          </span>
                          Login
                        </h2>
                        <form
                          className='mt-4 was-validated'
                          onSubmit={onLogin}
                          noValidate
                        >
                          <div className='mb-3'>
                            <label htmlFor='adminEmail' className='form-label'>
                              Email*
                            </label>
                            <input
                              type='email'
                              className='form-control'
                              id='adminEmail'
                              placeholder='Enter Your Email'
                              aria-describedby='emailHelp'
                              name='emailId'
                              onChange={handleChange}
                              pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                              required
                            />

                            <div className='invalid-feedback'>
                              Please enter email.
                            </div>
                          </div>
                          <div className='mb-3 position-relative'>
                            <label
                              htmlFor='adminPassword'
                              className='form-label'
                            >
                              Password*
                            </label>
                            <input
                              type={passwordShown ? "text" : "password"}
                              className='form-control'
                              placeholder='Enter Your Password'
                              id='adminPassword'
                              name='password'
                              onChange={handleChange}
                              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                              required
                            />

                            <div className='invalid-feedback'>
                              Please enter password.
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

export default AdminLogin
