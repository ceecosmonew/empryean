import React,  { useState }  from 'react'
import axios from 'axios'
function Form() {

    //Course data mapping
    const courseData = {
      'course1': 'N85000',
      'course2': 'N4000',
      'course3': 'N1000',
    
  };


  const cos = 'You chose:';
 

  //The form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course_name: '',
    course_price: '',
    message: ''
});



//State to manage the selected course and price
const [selectedCourse, setSelectedCourse] = useState('');
const [coursePrice, setCoursePrice] = useState(null);




//handler for input change
const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      
      const course = e.target.value;
      setSelectedCourse(course);
      setCoursePrice(courseData[course] || null);
      //Update price based on selectecd course
   

      //error message
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    };


    const validateForm = () => {
      const errors = {};
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      }
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Invalid email format';
      }
      if (!formData.subject.trim()) {
          errors.subject = 'Subject is required';
      }else if (formData.subject.length < 5){
        errors.subject = 'Text is too small,More text required'
      }
      if (!formData.message.trim()) {
        errors.message = 'Message is required';
      } else if (formData.message.length < 10){
        errors.message = 'Text is too small, More text required'
      }
       // You can add more validation rules for other fields as needed
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };



    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (validateForm()) {
    //     // Process form submission
    //     alert('Message sent Successfully')
        
    //     console.log(formData);
    //     // Redirect to another page
    //     window.location.href = '/Contact';
    //   }
    // };
  




    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validateForm()) {

        try{
          

          const response = await axios.post('http://localhost:8000/contact/postcontact/', formData);
          console.log('Form submitted:', response.data);
          //Assuming the form submission was successful, you can handle it here
           // Process form submission
        alert('Message sent Successfully');
        
        //page reload
        window.location.reload();
        } catch (error) {
          console.error('Error submitting Form:', error);
          //Handle error accordingly


           // console.log(formData);
        // Redirect to another page
        //page reload
        // window.location.href = '/Contact';
        }
       
        
        
      }
    };



    
  return (
    <>
<form action="" onSubmit={handleSubmit}>
<div className="d-flex mt-3">
<div className="flex-grow-1 me-2">
<input type="text" name='name' value={formData.name}  placeholder='Name' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange}/> 
{errors.name && <div className='invalid-feedback'>{errors.name}</div>}
</div>
<div className="flex-grow-1 ms-2">

<input type="email" name='email' value={formData.email}  className={`form-control ${errors.email && 'is-invalid'}`} placeholder='Email' onChange={handleChange}/> 
{errors.email && <div className='invalid-feedback'>{errors.email}</div>}
</div>
</div>



<div className="d-flex mt-3">
<div className="flex-grow-1 me-2">
<input type="text" name='phone' value={formData.phone} placeholder='Phone (Optional)' className='form-control' onChange={handleChange}/> 
</div>
<div className="flex-grow-1 ms-2">

{/* <label htmlFor="coure" className={`form-control ${errors.name && 'is-invalid'}`}>Select a Course Name</label> */}

<select  id="course" value={selectedCourse} className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange}><option value="">Choose a Course Name</option>
<option type="radio" value="course1">Compute</option>
<option value="course2">Compute2</option>
<option value="course3">Compute3</option>

</select>


</div>


{/* <input type="text" name='subject'  value={formData.subject} placeholder='Your Course' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange}/> 

{errors.subject && <div className='invalid-feedback'>{errors.subject}</div>}
</div> */}



</div>

<div className="flex-grow-1">

{coursePrice !== null && (
<input type="text" name='course_price'  value={`Course Price: ${coursePrice}`} className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange}/> 

// {errors.subject && <div className='invalid-feedback'>{errors.subject}</div>}
)}


</div>

<textarea id="" cols="30" rows="10" className={`form-control mt-3 ${errors.name && 'is-invalid'}`} onChange={handleChange}  name="message"  value={formData.message}  placeholder='Enter your Message'></textarea>
{errors.message && <div className='invalid-feedback'>{errors.message}</div>}


<button className="btn btn-danger mt-2">Submit</button>
</form>






    </>
  )
}

export default Form
