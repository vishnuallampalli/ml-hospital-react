import React from 'react'
import about from '../../assets/about.png'

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='about-title text-center'>
          <h2>About Us</h2>
        </div>
        <div className='row d-flex justify-content-center align-items-center mt-5'>
          <div className=' col-lg-5 col-md-6 col-sm-6 col-12 mb-3'>
            <img
              className='img-fluid d-block mx-auto rounded-3'
              src={about}
              alt='aboutus'
            />
          </div>
          <div className='col-lg-7 col-md-6 col-sm-6 col-12 mb-2'>
            <h3 className='mb-4'>
              Welcome to{" "}
              <strong style={{ color: "#EE6F1B" }}>MotivityLabs</strong>
            </h3>

            <p className='mb-2 p-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium earum sequi delectus necessitatibus harum. Natus,
              illo voluptate? Quia at odio tempore obcaecati neque accusantium
              minima, cumque, eum quae perspiciatis eos modi nemo.
            </p>

            <ul style={{ listStyleType: "none", paddingLeft: "10px" }}>
              <li className='mt-2'>
                <i className='bi bi-check-circle-fill me-2'></i>Lorem ipsum
                dolor sit amet
              </li>
              <li className='mt-2 '>
                <i className='bi bi-check-circle-fill me-2'></i>Consectetur
                adipisicing elit, sed do
              </li>
              <li className='mt-2 '>
                <i className='bi bi-check-circle-fill me-2'></i>Eiusmod tempor
                incididunt ut labore
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About