import './App.css';
import Name from './components/Name';
import Asignee from './components/Asignee';
import Value from './components/Value';
import Client from './components/Client';
import Proposal from './components/Proposal';
import Due from './components/Due';
import File from './components/File';
import Contacts from './components/Contacts';
import Team from './components/Team';

function App() {
  return (
    <div style={{ backgroundColor: '#F1F5F9' }} className='cont3'>
    <div className="App">
    <div className='container1'>
     <div  className='container2'>
     <div className='OpportunityIcon'>
      <img src="briefcase-01.png" alt="My Image" />
      Opportunity Details
      </div>
      <button><img src="save-01.png" alt="My Image" />Save Opportunity</button>
      </div>
      
      <Name/>
      <Asignee/>
      <Value/>
      <Client/>
      <Proposal/>
      <Due/>
      </div>
      
       
       </div>
       <File/>
       <Contacts/>
       <Team/>
    </div>
  );
}

export default App;
