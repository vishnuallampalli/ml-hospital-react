import React from "react"
import { Line, Bar } from "react-chartjs-2"
import "./analytics.css"
import { Chart as ChartJS, registerables } from "chart.js"
ChartJS.register(...registerables)

const DoctorAnalytics = () => {
  const linechartdata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],

    datasets: [
      {
        label: "2021",

        data: [2, 5, 7, 9, 7, 6, 4],

        borderColor: "rgb(255, 99, 132)",

        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },

      {
        label: "2022",

        data: [1, 3, 6, 10, 15, 8, 0],

        borderColor: "rgb(53, 162, 235)",

        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }
  const barstackedchartdata = {
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
    ],
  }
  return (
    <>
      <div className='analytics mt-4 '>
        <div className='row g-3'>
          <div className='col-lg-4'>
            <div className='info-box bg-theme-light'>
              <span className='info-box-icon push-bottom'>
                <i className='bi bi-people'></i>
              </span>
              <div className='info-box-content'>
                <span className='info-box-text'>Appointments</span>
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
                <span className='info-box-text'>New Patients</span>
                {/* <span className='info-box-number'>90</span> */}
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
                <i className='bi bi-scissors'></i>
              </span>
              <div className='info-box-content'>
                <span className='info-box-text'>Surgeries</span>
                <h4>10</h4>

                <div className='progress bg-white'>
                  <div
                    className='progress-bar bg-dark'
                    role='progressbar'
                    style={{ width: "10%" }}
                    aria-valuenow='10'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
                <span className='progress-description'>
                  10% Increase in 28 Days
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='row g-4 py-3 '>
          <div className='col-md-12'>
            <div className='card mb-1 '>
              <div className='card-body'>
                <Line
                  data={linechartdata}
                  options={{
                    responsive: true,

                    plugins: {
                      legend: {
                        /* position: 'top' as const, */

                        display: true,

                        position: "bottom",
                      },

                      title: {
                        display: true,

                        text: "Patient Count",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card info-box'>
              <h4>Patient Visits from Countries</h4>
              <hr />

              <div className='info-box-content ms-0 pb-0'>
                <div className='d-flex justify-content-between'>
                  <h5>6350</h5>
                  <span className='progress-description py-2'>
                    From India 58%
                  </span>
                </div>
                <div className='progress' style={{ height: "0.5rem" }}>
                  <div
                    className='progress-bar bg-theme'
                    role='progressbar'
                    style={{ width: "58%", height: "0.5rem" }}
                    aria-valuenow='58'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>

              <div className='info-box-content ms-0 pb-0'>
                <div className='d-flex justify-content-between'>
                  <h5>3250</h5>
                  <span className='progress-description py-2'>
                    From UAE 90%
                  </span>
                </div>

                <div className='progress' style={{ height: "0.5rem" }}>
                  <div
                    className='progress-bar bg-theme'
                    role='progressbar'
                    style={{ width: "90%", height: "0.5rem" }}
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>

              <div className='info-box-content ms-0 pb-0'>
                <div className='d-flex justify-content-between'>
                  <h5>1250</h5>
                  <span className='progress-description py-2'>
                    From Australia 70%
                  </span>
                </div>

                <div className='progress' style={{ height: "0.5rem" }}>
                  <div
                    className='progress-bar bg-theme'
                    role='progressbar'
                    style={{ width: "70%", height: "0.5rem" }}
                    aria-valuenow='70'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
              <div className='info-box-content ms-0 pb-0'>
                <div className='d-flex justify-content-between'>
                  <h5>2050</h5>
                  <span className='progress-description py-2'>
                    From USA 50%
                  </span>
                </div>

                <div className='progress' style={{ height: "0.5rem" }}>
                  <div
                    className='progress-bar bg-theme'
                    role='progressbar'
                    style={{ width: "50%", height: "0.5rem" }}
                    aria-valuenow='50'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card mb-1 p-3'>
              <h4>Patient Overview</h4>
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
        </div>
      </div>
    </>
  )
}

export default DoctorAnalytics
