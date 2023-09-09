import React from 'react'
import { useState } from 'react';

function Asignee() {
  const {asignee , setaAsignee} = useState('');
  const {company , setCompany} = useState('');

  const handelAsignee =(e)=>{
    setaAsignee(e.target.value);
  }
  const handelCompany =(e)=>{
    setaAsignee(e.target.value);
}
  return (
    <div className='nameComp'>
    <div className='name'>
      <label>Asignee</label>
      <select className='sel' >
      <option value="volvo" selected className='potion'> <img src="././man.png" alt="My Image" /> Mostafa Osman </option>
      <option value="saab">Mostafa Osman</option>
      <option value="mercedes">Mostafa Osman</option>
      <option value="audi">Mostafa Osman</option>
     </select>
    </div>
    <div className='stage'>
       <label>Company</label>
      <select className='sel' >
       <option value="Holding Company" selected className='potion'>Holding Company</option>
       <option value="Company X" selected className='potion'> Company X</option>
       <option value="Company Y" selected className='potion'>Company Y</option>
       <option value="vCompany Z" selected className='potion'>Company Z</option>
      </select>
    </div>
  </div>  
  )
}

export default Asignee