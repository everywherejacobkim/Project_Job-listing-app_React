import React from 'react';
import './App.css';
import data from './data.json';
import Jobs from './components/Jobs';


function App() {
  return (
    <div className="App">

        <div className='header'>
           <h1>SEARCH YOUR JOB TODAY</h1>
        </div>

        <div className='jobPost'>
          <Jobs data={data}/>
        </div>
    




    </div>
  );
} 

export default App;
