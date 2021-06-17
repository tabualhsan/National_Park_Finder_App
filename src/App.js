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
// import Navbar from './components/Navbar';
import { Navbar, NavLink, NavDropdown, Form, Button, FormControl,Nav, Collection} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import MainPage from "index";

// import Button from 'react-bootstrap/Button'
// import { Dropdown } from 'semantic-ui-react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Container } from 'react-bootstrap';

const App = () => {

  // const api_key = 'EW43splo4ni8vWJ6oN2cJunf49yeRxy6IFk4aOTb';
  const api_key = 'iBIDgu279HOLibT9B72MGBhW3NOT8PIbD92dfSIr';
  const [search, setSearch] = useState('');
  const [parks, setParks] = useState([]);
  const [displayParks, setDisplayParks] = useState([]);
 


  useEffect(() => {
    getParks();
  }, []);

  const getParks = async () => {
    const response = await fetch(`https://developer.nps.gov/api/v1/parks?api_key=${api_key}&limit=500`)
    // const response = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${api_key}`)
    // const response = await fetch (`https://developer.nps.gov/api/v1/activities?id=hiking&q=q&limit=20&start=0&api_key=EW43splo4ni8vWJ6oN2cJunf49yeRxy6IFk4aOTb`)
    const json = await response.json();
    console.log(json);
    setParks(json.data);
    setDisplayParks(json.data);
    
  };

  // search by text box 
  // updating search set 
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
    
    <div className="App">

  {/* Navbar  */}
      {/* <Navbar bg="light" variant="dark"

        fixed="top">
        <Navbar.Brand>
          <img src={logo} 
           alt=""
           width="70"
           height="70"
           className="d-inline-block align-top"/>
           {'  '}

          National Park Search  */}
        
        
       
    {/* </Navbar>  */}
        <>
          <Router>
            <Navbarselect/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/filter' component={Filter}/>
            </Switch>
          </Router>

        </>
    


        <Form inline onSubmit={getSearch} className="search-form">
          <FormControl type='text' placeholder="Search Park" value={search} onChange={updatedSearch} className="mr-sm-2"/>
          <Button className="search-button" variant="outline-light" type="submit"> Search</Button>
        </Form>

      
      <div className="state-selection-box">
      
        Select a state: <SelectUSState id="state" className="selectedState" type='text' onChange={onSelectChange}/>
      
      </div>
   

      <div className="park-description">
        {displayParks.map((park,idx,images, weatherInfo, states, url) => (
          <Park 
          key={idx}
          data={park} 
          image={park.images[0]?.url}
          weather={park.weatherInfo}
          state={park.states}
          park_url={park.url}
          />
          
        ))}
      

   
      </div>
    </div>
    
  );
 };


export default App;