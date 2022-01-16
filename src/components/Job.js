import React, { useEffect, useState } from 'react'
import './Job.css';

const Job = (props) => {

    const {
        company,
        contract,
        featured,
        id,
        languages,
        level,
        location,
        logo,
        position,
        postedAt,
        role,
        tools
    } = props.data;


let keywords = [role, level, ...languages, ...tools]

const [icon, setIcon] = useState("");

const importSvgs = () => {
    const logoSvg = import(`${logo}`).then((d) => {
        setIcon(d.default);
    })
}

useEffect(()=>{
    importSvgs();
},[logo]);

    return (
        <div className='job-container'>
            <div className='part1'>
                <div className='logo'>
                    <img src={icon} alt={company}></img>
                </div>
                
                <div className='companyName'>
                    {company}
                </div>

                <div className='newFeatured'>
                    {props.data.new && <span className='new'>new!</span>}
                    {props.data.featured && <span className='featured'>featured</span>}
                </div>

                <div className='position'>
                    {position}
                </div>

                <div className='postedAt'>
                    {postedAt}
                </div>

                <div className='contract'>
                    {contract}
                </div>

                <div className='location'>
                    {location}
                </div>
            </div>

            <div className='part2'>
                <div className='stack'>
                   {
                       keywords.map((key, id) => 
                           <button onClick={()=> props.setKeywords(key)} key={id}>
                               {key}
                            </button>
                       )
                   }
                </div>
            </div>
            
        </div>
    )
}

export default Job;
