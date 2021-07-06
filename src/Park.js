import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from 'react-bootstrap';

const Park = ({ data }) => {

    return (
    
    <Card style={{width:'18rem'}} >
        <Card.Body >
            <Card.Img 
            src={data.images[0]?.url} 
            className="card-img-top" 
            alt={data.fullName}
            />
            <Card.Title style={{textAlign:'center',fontWeight: 'bold'}}> {data.fullName}</Card.Title>
            <h8> State Location: {data.states}</h8>
            <Card.Text style={{textAlign:'center',fontSize: 11}}>{data.description}</Card.Text>
            <a  style={{width:250 ,backgroundColor:'#060b26',marginTop:20,}} href={data.url} className="btn btn-dark" type="submit">Learn More</a>
            <a  style={{width:250 ,backgroundColor:'#060b26',marginTop:20,}}  href={data.location} className="btn btn-dark" type="submit">Directions</a>
        </Card.Body>    
    </Card>
    
    )  
};

export default Park;

