import React from 'react'
import Card2 from './Card2'
import Card22 from './Card22'
import Card222 from './Card222'
import Card2222 from './Card2222'
import Services from '../assets/images/COSBIG6.png';

// import Services from './assets/images/services.png';

function Curriulum() {
    
  return (
    <>
        <div className="bg-cover mt-5">
            <div className="text-center pt-3 text-light">
                <h2 className="pt-5" data-aos="fade-down-right">Curriculum</h2>
                <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i> Curriculum</p>
            </div>
        </div>

        <div className="container mt-5">
        <div className="row pt-2">
        <div className="col-md-3 md-3" data-aos="fade-up">
          <Card2/>
   </div>

   <div className="col-md-3 mt-5">
          <Card22/>
   </div>

   <div className="col-md-3 mt-5">
          <Card222/>
   </div>


   <div className="col-md-3 mt-5">
          <Card2222/>
   </div>


   </div>

          <div className="row pt-5">
            <div className="col-md-6">
<img src={Services} alt="" className='img-fluid' data-aos="fade-up" />
            </div>
            <div className="col-md-6" data-aos="fade-up">
            <h2>THE COMPLETE SOLUTION TO TECHNOLOGIES</h2>
                    <div className='bg-red'></div>
                    <div className="pt-3" data-aos="fade-up">
                        <p>We are dedicated to revolutionizing tech training and education in Africa. Our mission is to empower individuals, businesses, and communities with cutting-edge skills and knowledge, bridging the digital divide and unlocking the continent's full potential.</p>
                    </div>
            </div>
          </div>
        </div>

       </>
  )
}

export default Curriulum