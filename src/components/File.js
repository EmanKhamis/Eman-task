import React from 'react'
import { useForm } from 'react-hook-form';
function File() {
    
    const { register, handleSubmit  } = useForm();

    const onSubmit = data => {
       
        console.log(data);
      
    };
   
  

    
  return (
    <div>
    <div  className='cont2'>
    <div className='OpportunityIcon2'>
    <img src="././paperclip.png" alt="My Image" className='img1'/>
    <span>Files</span>
     </div>
     <form onSubmit={handleSubmit(onSubmit)}>
     <button className='btn2'  >
     <div className='place'>
     <img src="././plus.png" alt="My Image" className='img3'/> 
     <p>Add Files</p>
     </div>
     </button>
     </form>
     </div>

     <div  className='cont4'>
     <img src="././No Files Uploaded.png" alt="My Image" className='img0'/>
      </div>

     </div>
  )
}

export default File