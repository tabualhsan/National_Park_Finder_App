import React from 'react'
import style from './park.module.css';
const Park = ({ data }) => {

return(
    <div className="parks">
        <h1>{data.fullName}</h1>
        <p>{data.description}</p>
    </div>
    );
}




export default Park;