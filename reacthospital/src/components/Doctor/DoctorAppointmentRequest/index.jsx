import React, { useState, useEffect } from "react"
import axios from "axios"
import { baseURL } from "../../../Utils/Api/Api"
import { getUserData } from "../../../Utils/Utilities/Utilities"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"
import NotFound from "../../shared-components/NotFound"
import * as FileSaver from "file-saver"
import XLSX from "sheetjs-style"

const DoctorAppointmentRequest = () => {
  const [patientData, setPatientData] = useState([])
  const [filter,setFilter]=useState([])

  let doctor = getUserData()
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
    axios
      .post(baseURL + "showPendingAppointments", doctor,config)
      .then((response) => {
        let allpatientData = []

        if (response.data && response.data.length) {
          allpatientData = response.data
        }

        setPatientData(allpatientData)
        setFilter(allpatientData)
        let appointmentList = response.data
        localStorage.setItem("appointmentList", JSON.stringify(appointmentList))
      })
      .catch(() => {})
  }, [])
  const handleAccept = (appointmentId, doctorId) => {
    const data= { appointmentId: appointmentId, doctorId: doctorId };
    axios
      .post(baseURL + "acceptAppointments", data,config)
      .then((response) => {
        setPatientData(response.data)
      })
      .catch(() => {})
  }
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - patientData.length) : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"

  const fileExtension = ".xlsx"

  const Headings = [
    ["Patient Name", "Patient Age", "Health Issue", " Mobile No", "Action"],
  ]
  const tableData = patientData.map((row) => ({
    patientname: row.patientName,
    patientAge: row.patientAge,
    disease: row.problem,
    mobileNumber: row.patientPhoneNo,
    status: row.status,
  }))
  const exportToCSV = async (fileName) => {
    const ws = XLSX.utils.json_to_sheet(tableData)
    XLSX.utils.sheet_add_aoa(ws, Headings, { originv: "A1" })
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] }
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" })
    const data = new Blob([excelBuffer], { type: fileType })
    FileSaver.saveAs(data, "DoctorAppointmentRequest" + fileExtension)
  }
//search functionality start
  const requestSearch=(searchedValue)=>{
    const filteredRows =patientData.filter((patient)=>{
      return patient.patientName.toString().toLowerCase().includes(searchedValue.toString().toLowerCase())
    });
    if(searchedValue.length<1)
    {
      setFilter(patientData)
    }
    else{
      setFilter(filteredRows)
    }
    

  }
  //search functionality start


  return (
    <>
      <div className='appointment_req mt-4'>
        <div className='card mb-4 '>
          <div className='card-body  d-sm-block'>
            <div className='row '>
              <div className='col-md-12 '>
                <h4 className='pt-3 pb-1'>
                  <span style={{ color: "#EE6F1B" }}>Appointment </span>Queue
                </h4>
              </div>
            </div>
                  {/* search input box  start*/}
                  <div className="input-group">  
               <div className="form-outline">
                <i className='bi bi-search'></i>
                <input id="search-focus" type="search" className="form-control"
                        onChange={(e) => requestSearch(e.target.value)}  placeholder='search'></input>
                      
               </div> 
            </div>
 {/* search input box end*/}
            {filter && filter.length > 0 ? (
              <>
                <div className='d-flex justify-content-end'>
                  <button onClick={exportToCSV} className='btn btn-dark'>
                    Export
                  </button>
                </div>
                <div className='table-responsive'>
                  <Table
                    sx={{ minWidth: 500, marginTop: "10px" }}
                    aria-label='custom pagination table'
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>Patient Name</TableCell>
                        <TableCell align='left'>Patient Age</TableCell>
                        <TableCell align='left'>Health Issue</TableCell>
                        <TableCell align='left'>Mobile No</TableCell>
                        <TableCell align='left'>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(rowsPerPage > 0
                        ? filter.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                        : filter
                      ).map((appointment) => (
                        <TableRow key={appointment.appointmentId}>
                          <TableCell align='left' scope='row'>
                            {appointment.patientName}
                          </TableCell>
                          <TableCell align='left'>
                            {appointment.patientAge}
                          </TableCell>
                          <TableCell align='left'>
                            {appointment.problem}
                          </TableCell>
                          <TableCell align='left'>
                            {appointment.patientPhoneNo}
                          </TableCell>
                          <TableCell align='left'>
                            <button
                              onClick={() => {
                                handleAccept(
                                  appointment.appointmentId,
                                  doctor.id
                                )
                              }}
                              className='btn btn-success '
                            >
                              {" "}
                              Accept
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}

                      {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          rowsPerPageOptions={[
                            5,
                            10,
                            25,
                            { label: "All", value: -1 },
                          ]}
                          count={patientData.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            inputProps: {
                              "aria-label": "rows per page",
                            },
                            native: true,
                          }}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </TableRow>
                    </TableFooter>
                  </Table>
                </div>
              </>
            ) : (
              <NotFound />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorAppointmentRequest
