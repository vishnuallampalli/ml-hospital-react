import React from "react"
import "./dashboard.css"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, registerables } from "chart.js"

ChartJS.register(...registerables)

const Dashboard = () => {
  const barstackedchartdata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],

    datasets: [
      {
        label: "Cardiology",

        data: [2, 5, 7, 9, 7, 6, 4],

        backgroundColor: "rgb(255, 99, 132)",
      },

      {
        label: "ENT",

        data: [1, 3, 6, 10, 15, 8, 0],

        backgroundColor: "rgb(75, 192, 192)",
      },

      {
        label: "Othopedics",

        data: [4, 5, 9, 1, 6, 3, 0],

        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  }
  const barstackedchartdataGender = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],

    datasets: [
      {
        label: "Male",

        data: [2, 5, 7, 9, 7, 6, 4],

        backgroundColor: "rgb(255, 99, 132)",
      },

      {
        label: "Female",

        data: [1, 3, 6, 10, 15, 8, 0],

        backgroundColor: "rgb(75, 192, 192)",
      },

      {
        label: "Other",

        data: [4, 5, 9, 1, 6, 3, 0],

        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  }
  return (
    <div className='row g-3 analytics'>
      <div className='col-lg-4'>
        <div className='info-box bg-theme-light'>
          <span className='info-box-icon push-bottom'>
            <i className='bi bi-people'></i>
          </span>
          <div className='info-box-content'>
            <span className='info-box-text'>Total Doctors</span>
            <h4>450</h4>
            <div className='progress bg-white'>
              <div
                className='progress-bar bg-dark'
                role='progressbar'
                style={{ width: "25%" }}
                aria-valuenow='25'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
            <span className='progress-description'>
              25% Increase in 28 Days
            </span>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='info-box bg-theme-light'>
          <span className='info-box-icon push-bottom'>
            <i className='bi bi-person'></i>
          </span>
          <div className='info-box-content'>
            <span className='info-box-text'>Total Patients</span>

            <h4>90</h4>
            <div className='progress bg-white'>
              <div
                className='progress-bar bg-dark'
                role='progressbar'
                style={{ width: "40%" }}
                aria-valuenow='40'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
            <span className='progress-description'>
              40% Increase in 28 Days
            </span>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='info-box bg-theme-light'>
          <span className='info-box-icon push-bottom'>
            <i className='bi bi-people'></i>
          </span>

          <div className='info-box-content'>
            <span className='info-box-text'>Patient Per Doctor</span>

            <h4>18</h4>

            <div className='progress bg-white'>
              <div
                className='progress-bar bg-dark'
                role='progressbar'
                style={{ width: "18%" }}
                aria-valuenow='18'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>

            <span className='progress-description'>
              18% Increase in 28 Days
            </span>
          </div>
        </div>
      </div>
      <div className='row g-3 py-3 '>
        <div className='col-md-6 '>
          <div className='card mb-1 p-3'>
            <h4 className=''>Doctors Department OverView</h4>
            <hr />

            <div className='card-body'>
              <Bar
                data={barstackedchartdata}
                options={{
                  plugins: {
                    title: {
                      display: true,
                    },
                  },

                  responsive: true,

                  scales: {
                    x: {
                      stacked: true,
                    },

                    y: {
                      stacked: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='card mb-1  p-3'>
            <h4 className=''>Patient Gender OverView</h4>
            <hr></hr>
            <div className='card-body'>
              <Bar
                data={barstackedchartdataGender}
                options={{
                  plugins: {
                    title: {
                      display: true,
                    },
                  },

                  responsive: true,

                  scales: {
                    x: {
                      stacked: true,
                    },

                    y: {
                      stacked: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
