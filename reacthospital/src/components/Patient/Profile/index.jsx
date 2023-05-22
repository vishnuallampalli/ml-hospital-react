import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { baseURL } from "../../../Utils/Api/Api"
import { getUserData } from "../../../Utils/Utilities/Utilities"
import { userDataStore } from "../../../Utils/Utilities/Utilities"

const Profile = () => {
  const Profile = getUserData()

  const navigate = useNavigate()
  const [editPatient, setEditPatient] = useState({
          id: Profile.id,
          firstname: Profile.firstName,
          email:Profile.emailId,
         phoneNo: Profile.phoneNo,
         age: Profile.patient_age,
         address: Profile.address,
  })

  const inputChange = (event) => {
    setEditPatient({ ...editPatient, [event.target.name]: event.target.value })
  }
  const config ={
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer '+Profile.token
    },withCredentials:"true"

}
  const onUpdate = (event) => {
    event.preventDefault()

    axios.post(baseURL + "updatePatient", editPatient,config).then((response) => {
      if (response.data != null) {
        
        navigate("/patient/viewprofile")
      } else {
        console.log("failed to update")
      }
    })
  }

  return (
    <>
      <div className='edit_profile'>
        <div className='row d-flex justify-content-center my-4'>
          <div className='col-lg-9'>
            <div className='card  shadow'>
              <div className='card-header' style={{ background: "0" }}>
                {" "}
                <h4>
                  <span style={{ color: "#EE6F1B" }}>Edit</span> Profile
                </h4>{" "}
              </div>
              <div className='card-body p-5'>
                <form className='row g-3' onSubmit={onUpdate}>
                  <div className='col-md-6'>
                    <label htmlFor='ePatientName' className='form-label'>
                      Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='firstname'
                      value={editPatient.firstname}
                      placeholder = {Profile.firstname}
                      onInput={inputChange}
                      name='firstname'
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='ePatientEmail' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='ePatientEmail'
                      value={editPatient.email}
                      onInput={inputChange}
                      name='email'
                      readOnly ='readonly'
                    />
                  </div>

                  <div className='col-md-6'>
                    <label htmlFor='ePatientMobileNo' className='form-label'>
                      Mobile no
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      id='ePatientMobileNo'
                      placeholder='enter mobile no'
                      value={editPatient.phoneNo}
                      onInput={inputChange}
                      name='phoneNo'
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='ePatientAge' className='form-label'>
                      Age
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      id='age'
                      placeholder='25'
                      value={editPatient.age}
                      onInput={inputChange}
                      name='age'
                    />
                  </div>

                  <div className='col-md-12'>
                    <label htmlFor='eAddress' className='form-label'>
                      {" "}
                      Address
                    </label>
                    <textarea
                      className='form-control'
                      placeholder='Enter Your Address'
                      name='address'
                      value={editPatient.address}
                      onInput={inputChange}
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
                      Update
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

export default Profile
