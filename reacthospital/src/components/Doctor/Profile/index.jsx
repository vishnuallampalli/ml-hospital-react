import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { baseURL } from "../../../Utils/Api/Api"
import { getUserData, userDataStore } from "../../../Utils/Utilities/Utilities"

const Profile = () => {
  const docProfile = getUserData()
  const navigate = useNavigate()
  const [editDoctorData, setEditDoctorData] = useState({
    id: docProfile.id,
    firstname: docProfile.firstName,
    lastname: docProfile.lastName,
    department: docProfile.department,
    phoneNo: docProfile.phoneNo,
    address: docProfile.address,
    email: docProfile.emailId,
    exp: docProfile.exp,
  })
  const inputChange = (event) => {
    setEditDoctorData({
      ...editDoctorData,
      [event.target.name]: event.target.value,
    })
  }

  const onUpdate = (event) => {
    event.preventDefault()
    const config ={
      headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: 'Bearer '+docProfile.token
      },
      withCredentials:"true"
  
  }
  
    axios.post(baseURL + "updateDoctor", editDoctorData,config).then((response) => {
      if (response.data != null) {

        navigate("/doctor/dashboard")
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
                    <label htmlFor='eDoctorFirstName' className='form-label'>
                      First Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='eDoctorFirstName'
                      value={editDoctorData.firstname}
                      onInput={inputChange}
                      name='firstname'
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='eDoctorLastName' className='form-label'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='eDoctorLastName'
                      value={editDoctorData.lastname}
                      onInput={inputChange}
                      name='lastname'
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='eDoctorEmail' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='eDoctorEmail'
                      onInput={inputChange}
                      value={editDoctorData.email}
                      name='email'
                      readOnly = 'readonly'
                    />
                  </div>

                  <div className='col-md-6'>
                    <label htmlFor='eDoctorPhoneNo' className='form-label'>
                      Mobile no
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      id='eDoctorPhoneNo'
                      placeholder='1234 Main St'
                      value={editDoctorData.phoneNo}
                      onInput={inputChange}
                      name='phoneNo'
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='eDoctorExp' className='form-label'>
                      Exiperience
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      id='eDoctorExp'
                      value={editDoctorData.exp}
                      onInput={inputChange}
                      name='exp'
                    />
                  </div>

                  <div className='col-md-6'>
                    <label
                      className='form-label'
                      htmlFor='doctorSpecialization'
                      placeholder='Enter Your Gender'
                    >
                      Specialization
                    </label>
                    <input
                      className='form-select'
                      name='department'
                      value={editDoctorData.department}
                      onInput={inputChange}
                      readOnly ='readonly'
                      
                      // onChange={inputChange}
                      id='doctorSpecialization'
                      required
                    >
                      </input>
                      {/* <option value=''>{editDoctorData.department}</option>
                      <option value='ENT'>ENT</option>
                      <option value='Cardiologist'>Cardiologist</option>
                      <option value='Physcologist'>Physcologist</option>
                      <option value='Dermotologist'>Dermotologist</option>
                      <option value='Gynocologist'>Gynocologist</option>
                    </select> */}
                  </div>
                  <div className='col-md-12'>
                    <label htmlFor='eDoctorAddress' className='form-label'>
                      {" "}
                      Address
                    </label>
                    <textarea
                      className='form-control'
                      placeholder='Enter Your Address'
                      name='address'
                      value={editDoctorData.address}
                      onInput={inputChange}
                      id='eDoctorAddress'
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
