import React from 'react'
import pic1 from '../assets/images/COSBIG1.png';



// import pic6 from '../assets/images/COSBIG6.png';

function Card2() {
// an Array of objects
const CardData = [
  { image: pic1, title: 'Web Development', content_text: 'Intoduction to Web Development, importance of UI/UX Design. Write the full details here, Write the full details'},
  
];

  return (
    <>
<div className="container-fluid">

{CardData.map((Card2, index) => (

<div className="card">
  <img src={Card2.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title ">{Card2.title}</h4>
    <p className="card-text">{Card2.content_text}

   
    {/* <a href="/Service" className="text-danger" style={{textDecoration:'none'}}>Read more</a>  */}
    
    
    </p>
    <a href='/WebDev' className="btn btn-danger">Register Now</a>
      
              </div> 
              </div> 
            
              



))}


</div>  
    </>
  )
}

export default Card2