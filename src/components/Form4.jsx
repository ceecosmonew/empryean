import React,  { useState }  from 'react'
import axios from 'axios'
function Form4() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    AcademicWri: '',
    message: ''
});

//error message
const [errors, setErrors] = useState({});

    const handleChange = (e) => {
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

<input type="text" name='AcademicWri'  value='Course: Academic Writing' className='form-control'/> 

</div>

</div>

<div className="flex-grow-1 mt-3">
<h5>Tuition Fee for this Course:</h5>
<input type="" name='emailmm' value='N37,500'  className='form-control'/> 
</div>

<textarea id="" cols="30" rows="10" className={`form-control mt-3 ${errors.name && 'is-invalid'}`} onChange={handleChange}  name="message"  value={formData.message}  placeholder='Write down a message'></textarea>
{errors.message && <div className='invalid-feedback'>{errors.message}</div>}


<button className="btn btn-danger mt-2">Pay Now</button>
</form>






    </>
  )
}

export default Form4