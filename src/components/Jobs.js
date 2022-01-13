import React from 'react';
import Job from './Job';

 const Jobs = ({data, setKeywords})=>{
    console.log(data);
    return (
        <div className='jobs'>
            {data.map(data => {
                return <Job data={data} setKeywords={setKeywords}/>
            })}
           
        </div>
    )
}


export default Jobs
