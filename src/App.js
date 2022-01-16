import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Jobs from './components/Jobs';
import Header from './components/Header';

function App() {

  const [filterKeywords, setFilterKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if(filterKeywords.includes(data)){
      setFilterKeywords([...filterKeywords, data]);
    }
  }

  return (
    <div className="App">

        <div className='header'>
           <h1>SEARCH YOUR JOB TODAY</h1>
        </div>

        <div>
          {
            filterKeywords.length > 0 && <Header keywords={filterKeywords} />
          }
         
        </div>

        <div className='jobPost'>
          <Jobs data={data} setKeywords={addFilterKeywords}/>
        </div>
    




    </div>
  );
} 

export default App;
