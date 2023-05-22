import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../../Utils/Api/Api";
import UserContext from "../../../Utils/Context/UserContext";
import RemoveCookie from "../../../Utils/Hooks/removeCookie";
import { getUserData, userDataStore } from "../../../Utils/Utilities/Utilities";

const ChangePassword = () => {
  const navigate=useNavigate();
  const profile =getUserData();
  const { setIsAuth, isAuth, messageAlert, setIsLoader } =
    useContext(UserContext)
  const[changePassword,setChangePassword]=useState({
    currentPassword:'',
    newPatientPassword:'',
    confrmPatientPassword:''
  })
 
 const inputChange=(event)=>{
  event.preventDefault();
  setChangePassword({...changePassword,[event.target.name]:event.target.value})
 
  }
  const config ={

    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer '+profile.token
    },withCredentials:"true"

}
  const onPasswordChange=(event)=>{
    event.preventDefault()

      if(changePassword.newPatientPassword===changePassword.confrmPatientPassword)
      {
        const data={newPassword:changePassword.newPatientPassword,currentPassword:changePassword.currentPassword,id:profile.id}
        console.log(data)
        axios.post(baseURL+"patientPasswordChange",data,config)
        .then((response)=>{
          if(response.status===202 || response.data==="success")
          { localStorage.clear();
            messageAlert(response.data)
            
           RemoveCookie('token')
           setIsAuth(false)
           navigate("/patientlogin")}}).catch(error=>{
         
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
                    <label htmlFor="editPatientPassword" className="form-label">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Current Password"
                      id="editPatientPassword"
                      name="currentPassword"
                      onChange={inputChange}
                   required />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="newPatientPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your New Password"
                      id="newPatientPassword"
                      name="newPatientPassword"
                      onChange={inputChange}
                    required/>
                  </div>
                  <div className="col-md-12">
                    <label
                      htmlFor="confrmPatientPassword"
                      className="form-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Confirm Password"
                      id="confrmPatientPassword"
                      name="confrmPatientPassword"
                      onChange={inputChange}
                    required/>
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
  );
};

export default ChangePassword;
