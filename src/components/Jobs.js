import React from 'react';
import Job from './Job';

 const Jobs = ({data})=>{
    console.log(data);
    return (
        <div className='jobs'>
            {data.map(data => {
                return <Job data={data}/>
            })}
           
        </div>
    )
}


export default Jobs
