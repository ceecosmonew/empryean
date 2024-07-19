import React from 'react'
import Form6 from './Form6'
import Services from '../assets/images/COSBIG4.png';

function ComLiteracy() {
  return (
    <>

<div className="bg-cover mt-5">
            <div className="text-center pt-3 text-light">
                <h2 className="pt-5" data-aos="fade-down-right">Computer Literacy</h2>
                <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Computer Literacy Registration Form</p>
            </div>
        </div>

        <div className="container mt-3">

         

          <div className="row">


            <div className="col-md-6">
<img src={Services} alt="" className='img-fluid' data-aos="fade-up" />
            </div>


            <div className="col-md-6" data-aos="fade-up">
            <Form6/>
            </div>
          </div>
        </div>

        
        
        
        </>
  )
}

export default ComLiteracy