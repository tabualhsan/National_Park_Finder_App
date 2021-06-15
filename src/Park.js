import React from 'react'
import style from './park.module.css';
import { Container,Row, Col, Card, Image, CardDeck, CardColumns} from 'react-bootstrap';
const Park = ({ data, image, weather,state, park_url}) => {

return(
<div className="national-park-card">
<Container className='card-columns' style={{display: "inline-block"}}  >
    <Row md={6}>
        <Col md={6} >
        <CardColumns>
            <Card  style={{ display:"flex-box", width: '20rem' }} className="mb-3">
            <Card.Body className={style.parks}>
            <Image 
            src={data.images[0]?.url} 
            className="card-img-top" 
            alt={data.fullName}
            fluid/>
            <Card.Title style={{textAlign:'center',fontWeight: 'bold'}}> {data.fullName}</Card.Title>
            <h6> State Location: {data.states}</h6>
            <Card.Text style={{textAlign:'center',fontSize: 11}}>{data.description}</Card.Text>
            <Card.Footer>
            <Card.Text style={{fontSize:9, fontWeight:'bold'}}className="text-muted"> Website: {data.url}</Card.Text>
            </Card.Footer>
            {/* <p className= {style.weather}> Weather: {data.weatherInfo}</p> */}
            </Card.Body> 
            </Card>
        </CardColumns>
        </Col>
    </Row>  
</Container>
</div>
    );
}




export default Park;