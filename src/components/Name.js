import React, { useState } from 'react'

function Name() {
  const {name , setName}=useState('');
  const {stag , setStage}=useState('');

  const handelName =(e)=>{
       setName(e.target.value);
  }
  const handelStage =(e)=>{
    setStage(e.target.value);
}

  return (
   <div className='nameComp'>
    <div className='name'>
    <label>Name</label>
    <input onChange={handelName}/>
    </div>
    <div className='stage'>
       <label>Stage</label>
      <select className='sel' onChange={handelStage} >
       <option value="volvo" selected className='potion'>Discovery</option>
       <option value="saab">one</option>
       <option value="mercedes">two</option>
       <option value="audi">three</option>
      </select>
    </div>
  </div>  
  )
}

export default Name