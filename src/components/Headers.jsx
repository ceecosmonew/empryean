import React from 'react'
import LOGO from '../assets/images/Logonocolo.png'

function Headers() {
  return (
    <>

{/* bg-body-tertiary */}
{/* style={{ height: '70px'}}  */}
<nav  className="navbar navbar-expand-lg fixed-top" style={{background: '#001F3F'}}>
  <div className="container" >
    <a className=" navbar-brand " href="/"> <img src={LOGO} width="232" height="50"  className="rounded img-fluid" style={{marginTop: '-15px'}} /></a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent " aria-expanded="false" aria-label="Toggle navigation ">
      
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* <div className="nav-links text-center"style={{ marginRight: '150px'}} > */}
      
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav mx-auto" >
     {/* style={{color: 'antiquewhite'}} */}
        <li className="nav-item " >
          <a className="nav-link"  aria-current="page" href="/">Home</a>
        </li>
      
         <li className="nav-item">
          <a className="nav-link" href="/Curriculum">Our Curriculum</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href='/Contact'>Meet The Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/Faqs'>FAQs</a>
        </li>


        {/* <li className="nav-item">
          <a className="nav-link" href='/Tracking'>Tracking</a>
        </li> */}

       

      </ul>
     
     
      <a href='/Curriculum' className="btn btn-danger" type="submit">Register</a>
      
    </div>
    
    
  </div>
</nav>
      
    </>
  )
}

export default Headers