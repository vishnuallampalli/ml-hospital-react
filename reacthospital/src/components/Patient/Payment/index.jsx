import React, { useState } from "react"

const Payment = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <div className='book_apppointment'>
        <div className='row d-flex justify-content-center my-4'>
          <div className='col-lg-9'>
            <div className='card  shadow'>
              <div className='card-header' style={{ background: "0" }}>
                {" "}
                <h4>
                  <span style={{ color: "#EE6F1B" }}></span>Payments{" "}
                </h4>{" "}
              </div>
              <div className='card-body p-5'>
                <form className='row g-3'>
                  <div className='col-md-12'>
                    <label htmlFor='patientName' className='form-label'>
                      Patient Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='patientName'
                      name='patientName'
                    />
                  </div>
                  <div className='col-md-12'>
                    <label htmlFor='patientId' className='form-label'>
                      Patient Id
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='patientId'
                      name='patientId'
                    />
                  </div>
                  <div className='col-md-12'>
                    <label htmlFor='doctorName' className='form-label'>
                      Doctor Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='doctorName'
                      name='doctorName'
                    />
                  </div>
                  <div className='col-md-12'>
                    <label htmlFor='paymentDate' className='form-label'>
                      Payment Date
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      id='paymentDate'
                      name='paymentDate'
                    />
                  </div>

                  <div className='col-md-12'>
                    <label htmlFor='totalAmount' className='form-label'>
                      Consultation Fee
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      id='totalAmount'
                      name='totalAmount'
                    />
                  </div>

                  <div className='col-md-12'>
                    <label htmlFor='discount' className='form-label'>
                      Discount
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      id='discount'
                      name='discount'
                    />
                  </div>

                  <div className='col-md-12'>
                    <label htmlFor='payment_method' className='form-label'>
                      Payment Method
                    </label>
                    <select
                      className='form-select'
                      id='payment_method'
                      name='payment_method'
                      required
                    >
                      <option selected>Select</option>
                      <option value='cash'>Cash</option>
                      <option value='cheque'>Cheque</option>
                      <option value='debitcard'>Debit Card</option>
                      <option value='creditcard'> Credit Card</option>
                      <option value='netbanking'>Netbanking</option>
                    </select>
                  </div>
                  <div className='mb-3 form-check'>
                    <input
                      type='checkbox'
                      onClick={handleOnChange}
                      className='form-check-input'
                      id='exampleCheck1'
                    />
                    <label className='form-check-label' htmlFor='exampleCheck1'>
                      Are You Insured
                    </label>

                    {isChecked && (
                      <div className='row mt-3'>
                        <div className='col-lg-12'>
                          <div className='card  shadow'>
                            <div
                              className='card-header'
                              style={{ background: "0" }}
                            >
                              {" "}
                              <h4>
                                <span style={{ color: "#EE6F1B" }}></span>
                                Insurance Details{" "}
                              </h4>{" "}
                            </div>
                            <div className='card-body p-5'>
                              <div className='col-md-12 mb-3'>
                                <label
                                  className='form-label'
                                  htmlFor='insurance_companies_list'
                                >
                                  Insurance Company
                                </label>
                                <select
                                  className='form-select'
                                  id='insurance_companies_list'
                                  name='insurance_companies_list'
                                  required
                                >
                                  <option selected>
                                    Select Your Insurance Company
                                  </option>
                                  <option value='Apollo Munich Health Insurance Company'>
                                    Apollo Munich Health Insurance Company
                                  </option>
                                  <option value='Policy Bachat'>
                                    Policy Bachat
                                  </option>
                                  <option value='United India Insurance'>
                                    United India Insurance
                                  </option>
                                  <option value='Care Health Insurancet'>
                                    {" "}
                                    Care Health Insurancet
                                  </option>
                                  <option value='Other'>Other</option>
                                </select>
                              </div>

                              <div className='col-md-12'>
                                <label
                                  htmlFor='insuranceid'
                                  className='form-label'
                                >
                                  Insurence Id
                                </label>
                                <input
                                  type='text'
                                  className='form-control'
                                  id='insuranceid'
                                  name='insuranceid'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
                      Pay
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

export default Payment
