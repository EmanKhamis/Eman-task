import React from 'react'
import Calendar from 'react-calendar';
import { useState } from 'react';
function Proposal() {
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const {newIncoming , setNewIncoming} =useState('Incoming');

  return (
    <div className='nameComp'>
    <div className='name'>
    <label>Proposal Submission Date</label>
    <button onClick={() => setShowCalendar(!showCalendar)} className='btnpro'> <img src="././Field.png" alt="My Image" /> </button>
    {showCalendar && <Calendar onChange={setDate} value={date} />}
    </div>
    <div className='stage'>
       <label>Incoming/Outgoing</label>
      <select className='sel' value={newIncoming}  onChange={e => setNewIncoming(e.target.value)}>
       <option value="volvo" selected className='potion'>Incoming</option>
       <option value="saab">Incoming</option>
       <option value="mercedes">Outgoing</option>
       
      </select>
    </div>
  </div>  
  )
}

export default Proposal