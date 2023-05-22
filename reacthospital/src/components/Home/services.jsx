import React from 'react'
import cardio from '../../assets/cardiology.png'
import gasteo from '../../assets/gastroenterology.png'
import onology from '../../assets/oncology.png'
import neph from '../../assets/nephrology.png'
import neuro from '../../assets/neuro_surgery.png'
import ortho from '../../assets/heart.png'

const Services = () => {
  return (
    <section className='services'>
      <div className='container'>
        <div className='services-title text-center mx-auto mb-5'>
          <h2>Services</h2>
        </div>

        <div className='row d-flex text-center g-4'>
          <div className='col-lg-4 col-md-6'>
            <div className=' service-item bg-theme-light p-5'>
              <img src={cardio} alt='' className='img-fluid mb-4' />
              <h4 className='mb-3' style={{ color: "#EE6F1B" }}>
                Cardiology
              </h4>
              <p className='mb-0'>Heart</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className=' service-item bg-theme-light p-5'>
              <img src={onology} alt='' className='img-fluid mb-4' />
              <h4 className='mb-3' style={{ color: "#EE6F1B" }}>
                Oncology
              </h4>
              <p className='mb-0'>Cancer</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className=' service-item bg-theme-light p-5'>
              <img src={neph} alt='' className='img-fluid mb-4' />
              <h4 className='mb-3' style={{ color: "#EE6F1B" }}>
                Nephrology
              </h4>
              <p className='mb-0'>Kidneys</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className=' service-item bg-theme-light p-5'>
              <img src={ortho} alt='' className='img-fluid mb-4' />
              <h4 className='mb-3' style={{ color: "#EE6F1B" }}>
                Orthopaedics
              </h4>
              <p className='mb-0'>Muscles</p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className=' service-item bg-theme-light p-5'>
              <img src={neuro} alt='' className='img-fluid mb-4' />
              <h4 className='mb-3' style={{ color: "#EE6F1B" }}>
                Neurology
              </h4>
              <p className='mb-0'>Nerves</p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className=' service-item bg-theme-light p-5'>
              <img src={gasteo} alt='' className='img-fluid mb-4' />
              <h4 className='mb-3' style={{ color: "#EE6F1B" }}>
                Gastroenterology
              </h4>
              <p className='mb-0'> Digestive System</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services