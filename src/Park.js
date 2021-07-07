import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from 'react-bootstrap';

const Park = ({ data }) => {

return (
<div className= "card-deck">

    <Card  style={{width:'18rem'}} >
    <Card.Img 
            src={data.images[0]?.url} 
            className="card-img-top" 
            alt={data.fullName}
            />
        <Card.Title style={{textAlign:'center',fontWeight: 'bold'}}> {data.fullName}</Card.Title>
        <Card.Text style={{textAlign:'center'}}className="mb-2 text-muted"> State Location: {data.states} </Card.Text>
        <Card.Body >
            
            <Card.Text  style={{textAlign:'center',fontSize: 11, fontWeight:'bold'}}>{data.description}</Card.Text>
        </Card.Body>    
        <Card.Footer>
            <a  href={data.url} className="footer button-primary">
        <i className="fa fa-chevron-right"></i> Learn more
      </a>
             {/* <a  style={{width:250 ,backgroundColor:'#060b26',marginTop:20,}}  href={data.location} className="btn btn-dark" type="submit">Directions</a> */}
        </Card.Footer>
    </Card>
    </div>
    
 
    )  
};

export default Park;

