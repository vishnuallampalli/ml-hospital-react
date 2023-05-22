import React, { useState, useEffect } from "react"
import axios from "axios"
import { baseURL } from "../../../Utils/Api/Api"
import MaleDoc from "../../../assets/MaleDoc.png"
import FemaleDoc from "../../../assets/FemaleDoc.png"
import LoadingSpinner from "../../shared-components/Loading"
import { getUserData } from "../../../Utils/Utilities/Utilities"

const DoctorList = () => {
  const [doctorsList, setDoctorsList] = useState([])
  const [filterParam, setFilterParam] = useState("All")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const authToken=getUserData().token;
  const config ={

    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer '+authToken
    },
    withCredentials:"true"

}

  useEffect(() => {
    setLoading(true)
    getDoctorList()
    setLoading(false)
  }, [])

  const getDoctorList = () => {
    axios
      .post(baseURL + "doctorslists",{},config)
      .then((response) => {
        let alldoctorsdata = []
        if (response.data && response.data.length) {
          alldoctorsdata = response.data
        }
        setDoctorsList(alldoctorsdata)
      })
      .catch((error) => console.error(`Error:${error}`))
  }

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className='doctors_list'>
      <div className='row g-4'>
        <div className='col-lg-12'>
          <div className='d-flex justify-content-end'>
            <div className='select'>
              <select
                className='form-select form-select-lg mb-3'
                aria-label='.form-select-lg example'
                value={filterParam}
                onChange={(e) => setFilterParam(e.currentTarget.value)}
                defaultValue='All'
              >
                <option value='All' selected={true}>
                  All
                </option>
                <option value='Cardiologist'>Cardiologist</option>
                <option value='Dermotologist'>Dermotologist</option>
                <option value='ENT'>ENT</option>
                <option value='Gynocologist'>Gynocologist</option>
                <option value='Physcologist'>Physcologist</option>
              </select>
              <span className='focus'></span>
            </div>
          </div>
        </div>
        {doctorsList &&
          doctorsList.length > 0 &&
          doctorsList
            .filter(({ department }) =>
              filterParam !== "All" ? department === filterParam : doctorsList
            )
            .map((doctor, index) => {
              return (
                <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                  <div className='card d-flex align-items-center pt-3 text-center profile-card'>
                    {doctor.gender === "female" ? (
                      <img
                        className='img-fluid rounded-circle'
                        src={FemaleDoc}
                        alt='not found'
                      />
                    ) : (
                      <img
                        className='img-fluid rounded-circle'
                        src={MaleDoc}
                        alt='not found'
                      />
                    )}
                    <div className='card-body'>
                      <h5 className='card-title text-capitalize'>
                        Dr {doctor.firstname + " " + doctor.lastname}
                      </h5>
                      <p className='card-text'>{doctor.department}</p>
                    </div>
                  </div>
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default DoctorList
