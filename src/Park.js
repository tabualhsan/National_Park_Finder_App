import React from 'react'

const Park = ({ data }) => {

return(
    <div className="parks">
        <h1>{data.fullName}</h1>
        <p>{data.description}</p>
    </div>
    );
}




export default Park;