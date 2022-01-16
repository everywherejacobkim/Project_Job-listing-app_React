import React from "react";

const Header = ({keywords}) => {
    return(
        <div className="header-container">
            {
                keywords.map((key,id)=>{
                    {
                        return <button key={id}>{key}</button>
                    }
                    
                })
            }
        </div>
    );
}

export default Header;