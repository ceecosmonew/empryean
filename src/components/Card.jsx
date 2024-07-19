import React from 'react'
import pic1 from '../assets/images/COS11.png';
import pic2 from '../assets/images/COS2.png';
import pic3 from '../assets/images/COS3.png';

function Card() {
// an Array of objects
const CardData = [
  { image: pic1, title: 'Web Development', content_text: 'Intoduction to Web Development, importance of UI/UX Design...'},
  { image: pic2, title: 'Academic Writing', content_text: 'Intoduction to Academic Writing with its Types...' },
  { image: pic3, title: 'Data Analysis', content_text: 'Intoduction to Data Analysis and Data Analysis Visualization...' },
  // Add more card data objects as needed
];

 
  return (
    <>
<div className="container-fluid">
<div className="row">
{CardData.map((Card, index) => (
 
<div className="col-md-4 mb-3 " data-aos="fade-up">

<div className="card">

  <img src={Card.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title ">{Card.title}</h4>
    <p className="card-text">{Card.content_text}
    <a href="/Curriculum" className="text-danger" style={{textDecoration:'none'}}>Read more</a></p>
              
            
              </div> 
              </div>
              </div>



))}

</div>
</div>  
    </>
  )
}

export default Card