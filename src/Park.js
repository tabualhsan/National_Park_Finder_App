import React from 'react'
import style from './park.module.css';
const Park = ({ data, image, weather}) => {

return(
    <div className={style.parks}>
        <h1>{data.fullName}</h1>
        <p>{data.description} </p>
        <p className= {style.weather}> Weather: {data.weatherInfo}</p>
        <img className={style.images} src={data.images[0].url} alt=""/>
        


    </div>
       
    );
}




export default Park;