import React, {Component, useEffect, useState} from 'react';
import Park from './Park';
import './App.css';
import logo from './images/logo.png';
import Header from './Header';
import states from 'states-us';
import SelectUSState from 'react-select-us-states';
import Navbarselect from './Navbarselect';
import Home from './Home';
import Filter from './Filter';
import UsStates from './UsStates';
import Submenu from './SubMenu';
import { Navbar, NavLink, NavDropdown, Form, Button, FormControl, Nav, Collection} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from './Map';
import Loader from './Loader'


import DropdownButton from 'react-bootstrap/DropdownButton'
import { Container } from 'react-bootstrap';

const App = () => {

  // const api_key = 'EW43splo4ni8vWJ6oN2cJunf49yeRxy6IFk4aOTb';
  const api_key = 'iBIDgu279HOLibT9B72MGBhW3NOT8PIbD92dfSIr';
  const [search, setSearch] = useState('');
  const [parks, setParks] = useState([]);
  const [displayParks, setDisplayParks] = useState([]);
  const [location, setLocation] = useState([])
  const [loading, setLoading] = useState(false)
 

  useEffect(() => {
    const fetchEvents = async () => {
      
        setLoading(true)
        const res = await fetch(`https://developer.nps.gov/api/v1/parks?api_key=${api_key}&limit=500`) 
        const json  = await res.json()

        setLocation(json.data)
        setLoading(false)
      }

      fetchEvents()
      console.log(setLocation);
      
    }, []) 

    

  useEffect(() => {
    getParks();
  }, []);

  const getParks = async () => {
    const response = await fetch(`https://developer.nps.gov/api/v1/parks?api_key=${api_key}&limit=500`)
    const json = await response.json();
    console.log(json);
    setParks(json.data);
    setDisplayParks(json.data);
    
  };

  const updatedSearch = e =>{
    setSearch(e.target.value);
  };

  
  const filterParks = searchString => {

    setDisplayParks(parks.filter(park => park.fullName.toLowerCase().includes(searchString.toLowerCase())))

  }
  const getSearch = e =>{

    e.preventDefault();
    filterParks(search)

  };
  
// search by state 
  

  const onSelectChange = stateCode =>{

    console.log(stateCode);

    setDisplayParks(parks.filter(park => park.states === stateCode))
  };

  
 
 
  return ( 
  <div className="App" > 
    <Navbar bg="light" variant="dark"

      fixed="top">
      <Navbar.Brand>
        <img src={logo} 
          alt=""
          width="70"
          height="70"
          className="d-inline-block align-top"/>
          {'  '}
      </Navbar.Brand>  
      <Form inline onSubmit={getSearch} className="search-form">
        <FormControl type='text' placeholder="Search Park" value={search} onChange={updatedSearch} className="mr-sm-2"/>
        <Button className="search-button" variant="outline-light" type="submit"> Search</Button>
      </Form>
      <Form>
        Select a state: <SelectUSState id="state" className="selectedState" type='text' onChange={onSelectChange}/>
      </Form>
      </Navbar>

     


    <div className="content">


    {!loading ? <Map location={location}/> :  <Loader /> }
    </div>

        <div className="park-description">
    
          {displayParks.map((park,idx,images, weatherInfo, states, url, latLong) => (
            <Park 
            key={idx}
            data={park} 
            image={park.images[0]?.url}
            weather={park.weatherInfo}
            state={park.states}
            park_url={park.url}
            direction={park.latLong}

            />
            
          ))}
      
       
  
      </div>
    </div>


    
  );
 };


export default App;