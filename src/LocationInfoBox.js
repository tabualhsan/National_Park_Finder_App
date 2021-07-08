import React, { useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
// import { Collapse } from "reactstrap";



const LocationInfoBox = ({ info }) => {

    // const [locationInfo, setLocationInfo] = useState(false)

    // const [collapse, setCollapse] = useState()
    // const [isCollapse, setIsCollapse] = useState(collapse);

    // const [icon, setIcon] = useState("fa fa-chevron-down");
    // const toggle = collapse => {
    //     setIsCollapse(collapse);
    //     setIcon(state => {
    //       return state === "fa fa-chevron-down"
    //         ? "fa fa-chevron-right"
    //         : "fa fa-chevron-down";
    //     });
    //   };
    // const close = () => {
    //     setLocationInfo(prev => !prev);
    //   };


    //   useEffect(() => {
    //     toggle(!collapse);
    //   }, [collapse]);
    return (
        <div className="location-info">
            <Card  >
            <Card.Body>
                <Card.Img className="card-img-top" src={ info.image}/> 
                <Card.Title style={{textAlign:'center',fontWeight: 'bold',color:'black'}}> { info.title } </Card.Title>
                {/* <div>
                    <button
                        type="button"
                        className="coll-panel-btn btn-primary btn-block text-left"
                        onClick={() => toggle()}
                    >
                        <i className={icon} /> 
                    </button> */}
               {/* <Collapse isOpen={isCollapse} isClose={isCollapse}> */}
                <Card.Text style={{textAlign:'center',fontSize: 11, color:'black'}}>{info.description}</Card.Text>
                {/* </Collapse> */}
                {/* </div> */}
                <br></br>
                <a  style={{backgroundColor:'#060b26'}} href={info.url} className=" learn btn btn-dark" target="_blank" type="submit">Learn More</a>
                {/* <a  style={{backgroundColor:'#060b26',marginTop:5,}}  href={info.location} className="direction btn btn-dark " type="submit">Directions</a>
               */}
            </Card.Body>
            </Card>
        
        </div>
    
    )
}

export default LocationInfoBox