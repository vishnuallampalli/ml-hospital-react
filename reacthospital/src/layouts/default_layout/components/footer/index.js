import React from "react"
import { Link } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css"
//import UserContext from "../../../../Utils/Context/UserContext"

const Footer = () => {
  //const { isAuth } = useContext(UserContext)

  return (
    <>
      <footer className='footer mt-5 pt-5'>
        <div className='container py-5'>
          <div className='row g-5'>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className='logoandicons'>
                <Link to='/' className='text-decoration-none'>
                  <img
                    className='footerlogo img-fluid w-75 py-3'
                    src='https://motivitylabs.com/wp-content/uploads/elementor/thumbs/logo-prgkor4cuantgaya7ag8ef6zp2tvgjfpld4fltl3e4.png'
                    alt='Motivity'
                  />
                </Link>
                <div className='socialmediaicons'>
                  <span className='link' style={{ cursor: "pointer" }}>
                    {" "}
                    <i
                      className='socialicons bi bi-facebook '
                      style={{ padding: "5px", fontSize: "25px" }}
                    ></i>
                  </span>
                  <span className='link' style={{ cursor: "pointer" }}>
                    {" "}
                    <i
                      className='socialicons bi bi-linkedin '
                      style={{ padding: "5px", fontSize: "25px" }}
                    ></i>
                  </span>
                  <span className='link' style={{ cursor: "pointer" }}>
                    {" "}
                    <i
                      className='socialicons bi bi-twitter '
                      style={{ padding: "5px", fontSize: "25px" }}
                    ></i>
                  </span>
                  <span className='link' style={{ cursor: "pointer" }}>
                    {" "}
                    <i
                      className='socialicons bi bi-instagram '
                      style={{ padding: "5px", fontSize: "25px" }}
                    ></i>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12 '>
              <h4>Quick Links</h4>
              <ul className='quiklinks list-unstyled'>
                <li>
                  <Link to='home' className='text-decoration-none text-dark'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/' className='text-decoration-none text-dark'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to='/' className='text-decoration-none text-dark'>
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link to='/' className='text-decoration-none text-dark'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className='addressbar'>
                <h4>Address</h4>
                <address>
                  Dallas Center, 6th & 7th Floor,<br></br>
                  Knowledge City Rd ,<br></br>
                  Rai Durg, Hyderabad,<br></br>
                  Telangana 500032.<br></br>
                  India
                </address>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <div className='followus'>
                <h4>Follow Us</h4>
                <ul className='list-unstyled '>
                  <li className='mobileicon bi bi-telephone-fill '>
                    <span className='mobileicon ms-2'> +91 40 4651 5454</span>
                  </li>
                  <li className=' mobileicon bi bi-telephone-fill '>
                    <span className='mobileicon ms-2 '> +91 40 4651 541</span>
                  </li>
                  <li className='mailicon bi bi-envelope-fill '>
                    <span className='mobileicon ms-2'>
                      <Link
                        to='mail'
                        className='text-decoration-none  text-dark  '
                      >
                        {" "}
                        info@motivitylabs.com
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid copy-right border-top'>
          <div className='row py-4'>
            <div className='col-lg-6  text-lg-start text-center'>
              <p className='mb-0'>
                Developed and maintained by
                <Link
                  to='https://motivitylabs.com/'
                  className='text-dark'
                  target='_blank'
                >
                  &nbsp;MotivityLabs
                </Link>
              </p>
            </div>

            <div className='col-lg-6  text-lg-end text-center'>
              <p className='copyright mb-0'>
                MotivityLabs | All Rights Reserved © 2022.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
