import React from 'react'
import style from './park.module.css';
import { Container,Row, Col, Card, Image} from 'react-bootstrap';
const Park = ({ data, image, weather,state}) => {

return(
<div className="national-park-card">
<Container >
    <Row >
        <Col >
            <Card className="mb-3">
            <Card.Body className={style.parks}>
            <Image 
            src={data.images[0]?.url} 
            className="card-img-top" 
            alt={data.fullName}
            fluid/>
            <Card.Title>{data.fullName}</Card.Title>
            <h4> State Location: {data.states}</h4>
            <Card.Text>{data.description}</Card.Text>
            {/* <p className= {style.weather}> Weather: {data.weatherInfo}</p> */}
            </Card.Body> 
            </Card>
        </Col>
    </Row>  
</Container>
</div>
    );
}




export default Park;