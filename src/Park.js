import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Google from './Google';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { Container, Card, Image, CardDeck, CardColumns} from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage, MDBCardGroup, MDBRow, MDBCol} from 'mdb-react-ui-kit'

const Park = ({ data, image, weather, state, park_url,idx, direction}) => {

return(

<div className="card">
<CardDeck>
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
        <a  style={{width:250 ,backgroundColor:'#060b26',marginTop:20,}}  className="btn btn-dark" type="submit">Directions</a>
            </Card.Body>    
    </Card>
</CardDeck>
</div>
    );
}


    {/* <MDBCol sm='6'>
    <MDBCol sm="4">
    <MDBCard className='mb-3' height={'100%'}>
        <MDBCardBody>
        <MDBCardImage src={data.images[0]?.url} position='top' alt='...' />
        <MDBCardTitle style={{textAlign:'center',fontWeight: 'bold'}}>{data.fullName}</MDBCardTitle>
        <MDBCardText style={{textAlign:'center',fontSize: 11}}>
        {data.description}
        {/* <GoogleMap defaultZoom={10} defaultCenter={data.direction}/> */}
        // </MDBCardText>
    //     <a  style={{width:150 ,backgroundColor:'#060b26',marginTop:20,}} href={data.url} className="btn btn-dark" type="submit">Learn More</a>
    //     <a  style={{width:150 ,backgroundColor:'#060b26',marginTop:20,}}  className="btn btn-dark" type="submit">Google Maps</a>
    //     </MDBCardBody>
    // </MDBCard>
    // </MDBCol>
    // </MDBCol> */}



export default Park;


{/* <Card  className="card-style" style={{ width: '15rem' }} className="mb-3">
<Card.Body className={style.parks}>
<Card.Img 
src={data.images[0]?.url} 
className="card-img-top" 
alt={data.fullName}
/>
<Card.Title style={{textAlign:'center',fontWeight: 'bold'}}> {data.fullName}</Card.Title>
<h6> State Location: {data.states}</h6>
<Card.Text style={{textAlign:'center',fontSize: 11}}>{data.description}</Card.Text>
<a href={data.url} class="btn btn-dark" type="submit">Learn More</a>
{/* <Card.Footer>
<Card.Text style={{fontSize:9, fontWeight:'bold'}}className="text-muted"> Website: {data.url}</Card.Text>
</Card.Footer> */}
{/* <p className= {style.weather}> Weather: {data.weatherInfo}</p> */}
// </Card.Body> 
// </Card> */}