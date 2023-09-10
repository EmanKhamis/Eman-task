import React from 'react'
import { useState } from 'react';

function Client() {
    const {isContactFormVisible, setContactFormVisible} = useState(false);
    const {contacts, setContacts} = useState([]); 
    const DisplayContactForm = () => {
        setContactFormVisible(!isContactFormVisible);
      };
  return (
    <div className='nameComp'>
    <div className='name'>
    <label>Client Budget</label>
    <input className='name1'/>
    </div>
    <div className='stage'>
       <label>Contacts</label>
       <button class="tag name1"  onClick={DisplayContactForm }>
       <span className='sp1'>Mostafa Osman  Mostafa Osman</span>
       <span class="plus name1 ">+</span>
     </button> 
    </div>
  </div>  
  )
}

export default Client