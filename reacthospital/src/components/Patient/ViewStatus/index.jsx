import React, { useState, useEffect } from "react"
import axios from "axios"
import { baseURL } from "../../../Utils/Api/Api"
import "./viewStatus.css"
import LoadingSpinner from "../../shared-components/Loading"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"
import NotFound from "../../shared-components/NotFound"
import { getUserData } from "../../../Utils/Utilities/Utilities"
import * as FileSaver from "file-saver"
import XLSX from "sheetjs-style"

const ViewStatus = () => {
  const currentPatient = getUserData()
  const id = currentPatient.patientId
  const [appiontmentstatus, setappiontmentstatus] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [filter,setFilter]=useState([])

  useEffect(() => {
    setLoading(true)
    getStatus()
    setLoading(false)
  }, [])

  const getStatus = (e) => {
   
    
    axios
      .get(`${baseURL}showStatus`,{
        params: { id: currentPatient.id },
       
        headers:{'Authorization': 'Bearer ' + currentPatient.token},withCredentials:"true"}
      )
      .then((response) => {
        let viewData = []
        if (response.data && response.data.length) {
          viewData = response.data
        }
        setappiontmentstatus(viewData)
        setFilter(viewData);
      })
      .catch((error) => console.error(`Error:${error}`))
  }

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - appiontmentstatus.length)
      : 0

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
    [
      "Appointment Id",
      "Patient Name",
      "Disease",
      "Doctor Name",
      "Dr PhoneNumber",
      "Status",
    ],
  ]
  const tableData = appiontmentstatus.map((row) => ({
    AppointmentId: row.appointmentId,
    patientName: row.patientName,
    disease: row.problem,
    doctorName: row.doctorName,
    drphoneNo: row.doctorPhoneNo,
    status: row.status,
  }))
  const  
  exportToCSV = async (fileName) => {
    const ws = XLSX.utils.json_to_sheet(tableData)
    XLSX.utils.sheet_add_aoa(ws, Headings, { originv: "A1" })
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] }
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" })
    const data = new Blob([excelBuffer], { type: fileType })
    FileSaver.saveAs(data, "ViewStatus" + fileExtension)
  }
  //search functionality starts

  const requestSearch=(searchedValue)=>{
    const filteredRows =appiontmentstatus.filter((appointment)=>{
    
      return appointment.status.toString().toLowerCase().includes(searchedValue.toString().toLowerCase())
    })
    if(searchedValue<1)
    {
      setFilter(appiontmentstatus)
    }
    else{
      setFilter(filteredRows)
    }
  }
  //search functionality ends

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className='view_status mt-4 '>
      <div className='card mb-4 '>
        <div className='card-body  d-sm-block'>
          <div className='row '>
            <div className='col-md-12 '>
              <h4 className='pt-3 pb-1 '>
                <span style={{ color: "#EE6F1B" }}>Appointment</span> Status{" "}
              </h4>
            </div>
          </div>
            {/* search input box  start*/}
            <div className="input-group">  
               <div className="form-outline">
               
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
                  sx={{ minWidth: 500, fontWeight: "bold" }}
                  aria-label='custom pagination table'
                >
                  <TableHead>
                    <TableRow sx={{ fontWeight: "bold" }}>
                      <TableCell align='left'>Patient Name</TableCell>
                      <TableCell align='left'>Disease</TableCell>
                      <TableCell align='left'>Dr Name</TableCell>
                      <TableCell align='left'>Dr Mobile No</TableCell>
                      <TableCell align='left'>Status</TableCell>
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
                          {appointment.problem}
                        </TableCell>
                        <TableCell align='left'>
                          {appointment.doctorName ? (
                            appointment.doctorName
                          ) : (
                            <>-</>
                          )}
                        </TableCell>
                        <TableCell align='left'>
                          {appointment.doctorPhoneNo ? (
                            appointment.doctorPhoneNo
                          ) : (
                            <>-</>
                          )}
                        </TableCell>

                        <TableCell align='left'>
                          {" "}
                          <span
                            style={{
                              color: "#EE6F1B",
                              fontWeight: "bold",
                              border: "2px solid #EE6F1B",
                              padding: "3px",
                              borderRadius: "10px",
                            }}
                          >
                            {appointment.status}
                          </span>
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
                        count={appiontmentstatus.length}
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
  )
}
export default ViewStatus
