import React from 'react';
import './App.css';
import data from './data.json';
import Jobs from './components/Jobs';


function App() {
  return (
    <div className="App">

        <div className='header'>

        </div>

        <Jobs data={data}/>




    </div>
  );
} 

export default App;
