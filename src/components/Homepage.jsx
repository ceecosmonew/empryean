import React from 'react'
import About from '../assets/images/about1.png'
import ICON1 from '../assets/images/icon1.png'
import ICON2 from '../assets/images/icon2.png'
import ICON3 from '../assets/images/icon3.png'
import Card1 from './Card'
import FORM from './Form'


function HomePage() {
  return (
    <>

<div className="bg-image mt-0" >
<div className="container text-light ">
            <div className="pt-5" data-aos="fade-down-right">
            <h1 className='pt-2' style={{fontSize:'40px',fontWeight:'bold', marginTop:'60px'}}>
            Building Up Technologies & Development of <br></br>Digital Literacy
            </h1>
            <p style={{fontSize:'24px',fontWeight:'700px'}}>Register and get started with our Technology's Tools.</p>
           </div>
        </div>
        <div className="container" >
        <a href="/Courses" className="btn btn-danger" data-aos="fade-up-left">Take Your Course</a>
        </div>  
       </div> 
       




<div className="container rounded img-fluid pt-5">
<div className="text-center" data-aos="fade-up" style={{background: 'green', color: 'white', borderRadius: '5px'}}>
  <h2>Welcome To Prime Africa Technologies</h2>
  <div className="bg-blue mx-auto"></div>
<p>Prime Africa Technology is a partnership between Dadoye Innovations (Management) and First African AI Technologies(Tutoring).</p>
</div>



<div className="container-fluid pt-3">
   <div className="row">

      <div className="col mt-6">
      <img src={About} className="rounded img-fluid mb-5" alt="about" />
          
        
      </div>

      <div className="col-md-6" data-aos="fade-up">
        {/* <p className='text-danger'>TECHNOLOGY COMPANY</p> */}
        <h2 style={{fontSize:'28px'}}>We Provide Full Range Technologies Solution</h2>
        <p className='' style={{textAlign:'justify'}}>We are dedicated to revolutionizing tech training and education in Africa. Our mission is to empower individuals, businesses, and communities with cutting-edge skills and knowledge, bridging the digital divide and unlocking the continent's full potential.
With a passion for innovation and excellence, we deliver top-notch online and offline training programs, resources, and support, tailored to meet the unique needs of African learners. Our expert trainers, industry partners, and state-of-the-art facilities ensure a transformative learning experience, equipping our students with the skills and confidence to succeed in an ever-evolving tech landscape.
At Prime Africa Technologies, we believe in the power of technology to drive positive change and economic growth. We are committed to making high-quality tech education accessible, inclusive, and impactful, shaping the future of Africa's digital economy and beyond.</p>
        <a href="/" className="btn btn-danger">Learn More</a>
        
        </div>

   </div>
   </div></div>


<div className="container pt-5 ">
  <div className="text-center"><p className='text-danger'> TOP LEVEL COURSES </p>
    <h2>Covering All Technologies Field</h2>
    </div>


<Card1/>
<div className="text-center "data-aos="fade-up">

  <a href="/Curriculum" className="btn btn-danger">Click For More Courses</a>
  
</div>
</div>


<div className="bg-warning mt-5" style={{ minHeight: '200px', padding: '20px 0' }}>
     <div className="container">
          <div className="row pt-5 d-flex justify-content-center">
            <div className='col-md-8' data-aos="fade-up">
            <h2>Fostering Digital Literacy</h2>
            <p>Prime Africa Technologies is ready to take you to the next level of Technologies.</p>
            </div>
            <div className="col-md-4 text-md-end text-sm-start" data-aos="fade-up">
               <a href='/Curriculum' className="btn btn-danger">Track Course Info</a> 
            </div>
          </div>
          
        </div>
      </div>
      

  


<div className="container mt-5" >
<div className="row">
 <div className="col-md-6" data-aos="fade-up">
 <h2>WHY CHOOSE US?</h2>

 <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={ICON1} alt="" className='img-fluid' />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>ADD HEADER</h4>
            <p>Write Something conerning the header, Write Something conerning.</p>
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={ICON2} alt="" className='img-fluid' />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>ADD HEADER</h4>
            <p>Write Something conerning the header, Write Something conerning.</p>
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={ICON3} alt=""  className='img-fluid'/>
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>ADD HEADER</h4>
            <p>Write Something conerning the header, Write Something conerning.</p>
              </div>
            </div>
 </div>
<div className="col-md-6" data-aos="fade-up">
<h2>Write to us</h2>
<FORM/>
</div>

</div>
</div>


    </>
    
   
  )
}

export default HomePage