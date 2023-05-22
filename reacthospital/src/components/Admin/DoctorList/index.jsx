import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { baseURL } from "../../../Utils/Api/Api"
import Table from "@mui/material/Table"
import { getUserData } from "../../../Utils/Utilities/Utilities"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"
import NotFound from "../../shared-components/NotFound"
import * as FileSaver from "file-saver"
import XLSX from "sheetjs-style"

const DoctorList = () => {
  const sam=JSON.parse( localStorage.getItem("csrftoken"));
  const [doctorsList, setDoctorsList] = useState([])
  const authToken=getUserData().token;
  const [filter, setFilter] = useState([]);

  const config ={

    headers:{
      
        Authorization: 'Bearer '+authToken
       
    },
    withCredentials:"true"

}
  useEffect(() => {

    axios
      .post(baseURL + "doctorslists",{},config)
      .then((response) => {
        let alldoctorsdata = []

        if (response.data && response.data.length) {
          alldoctorsdata = response.data
        }

        setDoctorsList(alldoctorsdata)
        setFilter(alldoctorsdata)
        //doctorsList = response.data;
        localStorage.setItem("doctorsList", JSON.stringify(alldoctorsdata))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  //filter functionality

  const requestSearch = (serchedValue)=>{
    const filteredRows = doctorsList.filter((row)=>{
      return row.email.toString().toLowerCase().includes(serchedValue.toString().toLowerCase())
    });
    if(serchedValue.length<1)
    {
      console.log(filter)
      setFilter(doctorsList)
    }
    else{
      console.log(filter)
      setFilter(filteredRows)
    }

  }
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - doctorsList.length) : 0

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
    ["Name", "Department", "Experience", "Email", "PhoneNumber"],
  ]

  const tableData = filter.map((row) => ({

    name: row.firstname +" "+ row.lastname,

    department: row.department,

    experience: row.exp,

    email: row.email,

    phoneno: row.phoneno,
  }))

  const exportToCSV = async (fileName) => {
    const ws = XLSX.utils.json_to_sheet(tableData)

    XLSX.utils.sheet_add_aoa(ws, Headings, { originv: "A1" })

    const wb = { Sheets: { data: ws }, SheetNames: ["data"] }

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" })

    const data = new Blob([excelBuffer], { type: fileType })

    FileSaver.saveAs(data, "doctorlist" + fileExtension)
  }

  return (
    <>
      <div className='appointment_req mt-4'>
        <div className='card mb-4 '>
          <div className='card-body  d-sm-block'>
            <div className='row '>
              <div className='col-md-12 '>
                <h4 className='pt-3 pb-1'>
                  <span style={{ color: "#EE6F1B" }}>Doctor </span>List
                </h4>
              </div>
            </div>
            
{/* search input box */}
            <div className="input-group">  
               <div className="form-outline">
                <i className='bi bi-search'></i>
                <input id="search-focus" type="search" className="form-control"
                        onChange={(e) => requestSearch(e.target.value)}  placeholder='search'></input>
               </div> 
            </div>
 {/* search input box */}
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
                        <TableCell align='left'> Name</TableCell>
                        <TableCell align='left'> Department</TableCell>
                        <TableCell align='left'>Experience</TableCell>
                        <TableCell align='left'> Email</TableCell>
                        <TableCell align='left'> PhoneNumber</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(rowsPerPage > 0
                        ? filter.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                        : filter
                      ).map((doctor) => (
                        <TableRow key={doctor.id}>
                          <TableCell align='left' scope='row'>
                            Dr. {doctor.firstname} {doctor.lastname}
                          </TableCell>
                          <TableCell align='left'>
                            {doctor.department}
                          </TableCell>
                          <TableCell align='left'>{doctor.exp}</TableCell>
                          <TableCell align='left'>{doctor.email}</TableCell>
                          <TableCell align='left'>{doctor.phoneno}</TableCell>
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
                          count={doctorsList.length}
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

export default DoctorList
