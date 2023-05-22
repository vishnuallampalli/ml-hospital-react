import React from "react"

const DoctorHelp = () => {
  return (
    <>
      <div className='help'>
        <div className='row d-flex justify-content-center my-4'>
          <div className='col-lg-9'>
            <div className='card  shadow'>
              <div className='card-header ' style={{ background: "0" }}>
                {" "}
                <h4>How can we help?</h4>{" "}
              </div>
              <div className='card-body p-5'>
                <form className='row g-3'>
                  <div className='col-md-12'>
                    <label htmlFor='problemName' className='form-label'>
                      Describe the problem you're having
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='problemName'
                      name='problemName'
                      placeholder='Enter Problem'
                    />
                  </div>
                  <div className='col-md-12'>
                    <label htmlFor='problemDescription' className='form-label'>
                      {" "}
                      Give us the details
                    </label>
                    <textarea
                      className='form-control'
                      name='problemDescription'
                      id='problemDescription'
                    ></textarea>
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='name' className='form-label'>
                      Your Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      name='name'
                      id='name'
                      placeholder='Enter Your  Name'
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='email' className='form-label'>
                      Your Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      placeholder='Enter Your Email '
                      id='email'
                    />
                  </div>

                  <div className='col-6 d-grid mx-auto mt-5 mb-3'>
                    <button
                      type='submit'
                      className='btn text-white'
                      style={{
                        backgroundColor: "#EE6F1B",
                        borderColor: "#EE6F1B",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorHelp
