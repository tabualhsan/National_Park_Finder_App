import React from 'react'

const Park = ({data, description,title}) => {

return(
    <div className="parks">
        
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
    );
}




export default Park;