import React, { useState } from 'react'

function Name() {
  const {name , setName}=useState('');
  const {stag , setStage}=useState('Discovery');

  const handelName =(e)=>{
       setName(e.target.value);
  }
 

  return (
   <div className='nameComp'>
    <div className='name'>
    <label>Name</label>
    <input onChange={handelName} className='name1'/>
    </div>
    <div className='stage'>
       <label>Stage </label >
      <select className='sel name2' value={stag}  onChange={e => setStage(e.target.value)}>
       <option value="volvo" selected className='potion'>Discovery</option>
       <option value="saab">Proposal</option>
       <option value="mercedes">Negotiation</option>
       <option value="audi">Won</option>
       <option value="audi">Lost</option>
      </select>
    </div>
  </div>  
  )
}

export default Name