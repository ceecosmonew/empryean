import React from 'react'
import Form5 from './Form5'
import Services from '../assets/images/COSBIG3.png';

function DataAna() {
  return (
    <>

<div className="bg-cover mt-5">
            <div className="text-center pt-3 text-light">
                <h2 className="pt-5" data-aos="fade-down-right">Data Analysis</h2>
                <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i> Data Analysis Registration Form</p>
            </div>
        </div>

        <div className="container mt-3">

         

          <div className="row">


            <div className="col-md-6">
<img src={Services} alt="" className='img-fluid' data-aos="fade-up" />
            </div>


            <div className="col-md-6" data-aos="fade-up">
            <Form5/>
            </div>
          </div>
        </div>

        
        
        
        </>
  )
}

export default DataAna