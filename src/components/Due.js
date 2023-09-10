import React from 'react'
import Calendar from 'react-calendar';
import { useState } from 'react';

function Due() {
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className='nameComp'>
    <div className='name'>
    <label>Due Date</label>
    <button onClick={() => setShowCalendar(!showCalendar)} className='btnpro'> <img src="././Field.png" alt="My Image" /> </button>
    {showCalendar && <Calendar onChange={setDate} value={date} />}
    </div>
    <div className='stage'>
       <label>Tags</label>
       <div class="tag name1 mm">
       <span className='sp1'><h5>Tag1</h5> </span>
       <span class="plus name1 ">+</span>
     </div> 
    </div>
  </div>  
  )
}

export default Due