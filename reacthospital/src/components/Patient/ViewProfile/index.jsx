import React from "react"
import { getUserData } from "../../../Utils/Utilities/Utilities"

const ViewProfile = () => {
  let patient = getUserData()
  return (
    <>
      <div className='analytics mt-4 '>
        <div className='row g-3 d-flex justify-content-center align-items-center'>
          <div className='col-lg-12'>
            <div className='card'>
              <div className='card-header' style={{ backgroundColor: "#fff" }}>
                <h4 className='pt-3 pb-1 '>
                  <span style={{ color: "#EE6F1B" }}>Profile</span>
                </h4>
              </div>
              <div className='card-body bg-white'>
                <div className='row justify-content-center my-4'>
                  <div className='col-lg-8'>
                    <div className='table-responsive'>
                      <table className='table table-bordered'>
                        <tbody>
                          <tr>
                            <td>Patient id</td>
                            <td>{patient.id}</td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td>{patient.emailId}</td>
                          </tr>
                          <tr>
                            <td>Age</td>
                            <td>{patient.age}</td>
                          </tr>
                          <tr>
                            <td>Gender</td>
                            <td>{patient.gender}</td>
                          </tr>
                          <tr>
                            <td>Mobile No</td>
                            <td>{patient.phoneNo}</td>
                          </tr>
                          <tr>
                            <td>Address</td>
                            <td className='text-capitalize'>
                              {patient.address}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-4'>
                    <div
                      className='info-box bg-theme-light'
                      style={{ boxShadow: "none" }}
                    >
                      <span className='info-box-icon push-bottom mt-0'>
                        <i className='bi bi-people'></i>
                      </span>
                      <div className='info-box-content'>
                        <span className='info-box-text'>Height</span>
                        <h5>175 cm</h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div
                      className='info-box bg-theme-light'
                      style={{ boxShadow: "none" }}
                    >
                      <span className='info-box-icon push-bottom mt-0'>
                        <i className='bi bi-people'></i>
                      </span>
                      <div className='info-box-content'>
                        <span className='info-box-text'>Weight</span>
                        <h5> 56 kg</h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div
                      className='info-box bg-theme-light'
                      style={{ boxShadow: "none" }}
                    >
                      <span className='info-box-icon push-bottom mt-0'>
                        <i className='bi bi-people'></i>
                      </span>
                      <div className='info-box-content'>
                        <span className='info-box-text'>BMI</span>
                        <h5> 18.3 kg/m2</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewProfile
