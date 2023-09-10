import React from 'react'
import { useState } from 'react';
function Value() {
    const {isContactFormVisible, setContactFormVisible} = useState(false);
    const {contacts, setContacts} = useState([]); 
    const DisplayContactForm = () => {
        setContactFormVisible(!isContactFormVisible);
      };
  return (
    <div className='nameComp'>
    <div className='name'>
    <label>Value</label>
    <input className='name1'/>
    </div>
    <div className='stage'>
       <label>Client</label>
       
       <button class="tag name1"  onClick={DisplayContactForm }>
          <span className='sp1'>Mostafa Osman</span>
          <span class="plus name1 ">+</span>
        </button> 
    </div>
  </div>  
  )
}

export default Value;