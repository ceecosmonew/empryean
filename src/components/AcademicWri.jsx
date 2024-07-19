import React from 'react'
import Form4 from './Form4'
import Services from '../assets/images/COSBIG2.png';

function AcademicWri() {
  return (
    <>

<div className="bg-cover mt-5">
            <div className="text-center pt-3 text-light">
                <h2 className="pt-5" data-aos="fade-down-right">Academic Writing</h2>
                <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i> Academic Writing Registration Form</p>
            </div>
        </div>

        <div className="container mt-3">

         

          <div className="row">


            <div className="col-md-6">
<img src={Services} alt="" className='img-fluid' data-aos="fade-up" />
            </div>


            <div className="col-md-6" data-aos="fade-up">
            <Form4/>
            </div>
          </div>
        </div>

        
        
        
        </>
  )
}

export default AcademicWri