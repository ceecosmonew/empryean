import React from 'react'

import pic4 from '../assets/images/COSBIG4.png';


// import pic6 from '../assets/images/COSBIG6.png';

function Card2222() {
// an Array of objects
const CardData = [
  
  { image: pic4, title: 'Computer Literacy', content_text: 'Intoduction to Computer Literacy: Computer Hardware and Software, Write the full details here, Write the full details here, Write the full details here, Write the full details here ' },
 
  // Add more card data objects as needed
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
    <a href='/ComLiteracy' className="btn btn-danger">Register Now</a>
      
              </div> 
              </div> 
             
              



))}


</div>  
    </>
  )
}

export default Card2222