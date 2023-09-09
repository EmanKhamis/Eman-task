import React from 'react'
import Calendar from 'react-calendar';
import { useState } from 'react';

function Due() {
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className='nameComp'>
    <div className='name'>
    <label>Proposal Submission Date</label>
    <button onClick={() => setShowCalendar(!showCalendar)} className='btnpro'> <img src="././Field.png" alt="My Image" /> </button>
    {showCalendar && <Calendar onChange={setDate} value={date} />}
    </div>
    <div className='stage'>
       <label>Tags</label>
      <select className='sel' >
       <option value="volvo" selected className='potion'>Discovery</option>
       <option value="saab">one</option>
       <option value="mercedes">two</option>
       <option value="audi">three</option>
      </select>
    </div>
  </div>  
  )
}

export default Due