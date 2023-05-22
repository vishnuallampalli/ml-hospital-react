import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../../Utils/Api/Api';
import UserContext from '../../../Utils/Context/UserContext';
import RemoveCookie from '../../../Utils/Hooks/removeCookie';
import { getUserData } from '../../../Utils/Utilities/Utilities'

const ChangePassword = () => {
  const navigate=useNavigate();
  const { setIsAuth, isAuth, messageAlert, setIsLoader } =
    useContext(UserContext)
  const docProfile = getUserData();
    const[changePassword,setChangePassword]=useState({
    currentPassword:'',
    newDoctorPassword:'',
    confrmDoctorPassword:''
  })
 
 const inputChange=(event)=>{
  event.preventDefault();
  setChangePassword({...changePassword,[event.target.name]:event.target.value})
 
  }

  const config ={

    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer '+docProfile.token
    },
    withCredentials:"true"

}
  const onPasswordChange=(event)=>{
    event.preventDefault()

   console.log(changePassword)
   
   const data={newPassword:changePassword.newDoctorPassword,currentPassword:changePassword.currentPassword,id:docProfile.id}
      if(changePassword.newDoctorPassword===changePassword.confrmDoctorPassword)
      {
        axios.post(baseURL+"doctorPasswordChange",data,config)
        .then((response)=>{
         if(response.status===202 || response.data==="success")
         { localStorage.clear();
        
          messageAlert(response.data)
          RemoveCookie('token')
          setIsAuth(false)
          navigate("/doctorlogin")}}
         ).catch(error=>{
         
          console.log(error)
          setIsLoader(false)
          messageAlert(error.response.data.error, "error")

         })
      }
      else{
        console.log("password must same")
      }

  }
  return (
     <>
      <div className="change_password">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-lg-8">
            <div className="card  shadow">
              <div className="card-header" style={{ background: "0" }}>
                {" "}
                <h4>
                  <span style={{ color: "#EE6F1B" }}>Change</span> Password
                </h4>{" "}
              </div>
              <div className="card-body p-5">
                <form className="row g-3" onSubmit={onPasswordChange}>
                  <div className="col-md-12">
                    <label htmlFor="editDoctorPassword" className="form-label">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Current Password"
                      id="editDoctorPassword"
                      name="currentPassword"
                      onChange={inputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="newDoctorPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your New Password"
                      id="newDoctorPassword"
                      name="newDoctorPassword"
                      onChange={inputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label
                      htmlFor="confrmDoctorPassword"
                      className="form-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Confirm Password"
                      id="confrmDoctorPassword"
                      name="confrmDoctorPassword"
                      onChange={inputChange}
                    />
                  </div>

                  <div className="col-6 d-grid mx-auto mt-5 mb-3">
                    <button
                      type="submit"
                      className="btn text-white"
                      style={{
                        backgroundColor: "#EE6F1B",
                        borderColor: "#EE6F1B",
                      }}
                    >
                      Submit
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

export default ChangePassword
