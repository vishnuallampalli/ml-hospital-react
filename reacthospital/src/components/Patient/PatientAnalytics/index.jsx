import React from "react"
import { Bar, Line } from "react-chartjs-2"
import "./analytics.css"
import heartrate from "../../../assets/heartrate.png"
import bloodpressure from "../../../assets/bloodpressure.png"
import body from "../../../assets/body-temperature.jpg"

import { Chart as ChartJS, registerables } from "chart.js"
ChartJS.register(...registerables)

const PatientAnalytics = () => {
  const barstackedchartdata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],

    datasets: [
      {
        label: "inhale",

        data: [2, 5, 7, 9, 7, 6, 4],

        backgroundColor: "#EE6F1B",
      },

      {
        label: "exhale",

        data: [1, 3, 6, 10, 15, 8, 5],

        backgroundColor: "#ffe8d9",
      },

      {
        label: "counts per minutes",

        data: [4, 5, 9, 1, 6, 3, 5],

        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  }

  const glucose = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Normal Level",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "#ffe8d9",
      },
      {
        label: "Hypoglycemia",
        data: [33, 25, 35, 51, 54, 76],
        fill: true,
        backgroundColor: "#EE6F1B",
        border: "green",
      },
    ],
  }
  return (
    <>
      <div className='analytics mt-4 '>
        <div className='row g-3 d-flex align-items-center'>
          <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
            <div className='card bg-theme-light p-2'>
              <div className='card-body d-flex  align-items-center'>
                <div className='card-icon me-3'>
                  <img src={bloodpressure} alt='' className='img-fluid mb-4' />
                </div>
                <div className='card-content'>
                  <p className='mb-0'>Blood Pressure</p>
                  <h4 className='mb-0'>120/60</h4>
                  <p className='mb-0'>mm/Hg</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
            <div className='card bg-theme-light p-2'>
              <div className='card-body d-flex  align-items-center'>
                <div className='card-icon me-3'>
                  <img src={heartrate} alt='' className='img-fluid mb-4' />
                </div>
                <div className='card-content'>
                  <p className='mb-0'>Heart Rate</p>
                  <h4 className='mb-0'>60</h4>
                  <p className='mb-0'>bpm</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
            <div className='card bg-theme-light p-2'>
              <div className='card-body d-flex  align-items-center'>
                <div className='card-icon me-3'>
                  <img
                    src={body}
                    alt=''
                    className='img-fluid mb-4 rounded-circle'
                  />
                </div>
                <div className='card-content'>
                  <p className='mb-0'>Body Temp</p>
                  <h4 className='mb-0'>36.5</h4>
                  <p className='mb-0'>
                    <sup>o</sup>C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row g-3 py-5 '>
          <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
            <div className='card mb-1 p-4'>
              <h4>Respiratory Level</h4>
              <hr />
              <div className='card-body p-2'>
                <Bar
                  data={barstackedchartdata}
                  options={{
                    plugins: {
                      title: {
                        display: true,
                      },
                    },

                    responsive: true,
                  }}
                />
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
            <div className='card mb-1 p-4'>
              <h4>Glucose Level</h4>
              <hr />
              <div className='card-body p-2'>
                <Line
                  data={glucose}
                  options={{
                    plugins: {
                      title: {
                        display: true,
                      },
                    },

                    responsive: true,
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

export default PatientAnalytics
