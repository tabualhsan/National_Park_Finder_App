import React from 'react'
import { Card } from 'react-bootstrap';

const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <Card >
                <Card.Body>
                    <Card.Img className="card-img-top" src={ info.image}/> 
                    <Card.Title style={{textAlign:'center',fontWeight: 'bold',color:'black'}}> { info.title } </Card.Title>
                    <Card.Text style={{textAlign:'center',fontSize: 11, color:'black'}}>{info.description}</Card.Text>
                    <br></br>
                    <a  style={{backgroundColor:'#060b26',marginTop:5,}} href={info.url} className="btn btn-dark" target="_blank" type="submit">Learn More</a>
                    <a  style={{backgroundColor:'#060b26',marginTop:5,}}  href={info.location} className="btn btn-dark" type="submit">Directions</a>
                </Card.Body>           
            </Card>
        </div>
    );
};

export default LocationInfoBox;