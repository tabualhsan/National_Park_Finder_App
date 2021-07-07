import React, {useEffect, useState} from 'react';
import Park from './Park';
import './App.css';
import logo from './images/logo.png';
import SelectUSState from 'react-select-us-states';
import { Navbar, Form, Button, FormControl} from 'react-bootstrap';
import Map from './Map';
import Loader from './Loader'
import CardDeck from 'react-bootstrap/CardDeck';
import data from '@iconify/icons-mdi/pine-tree';

const App = () => {

  // const api_key = 'EW43splo4ni8vWJ6oN2cJunf49yeRxy6IFk4aOTb';
  const api_key = 'iBIDgu279HOLibT9B72MGBhW3NOT8PIbD92dfSIr';
  const [search, setSearch] = useState('');
  const [parks, setParks] = useState([]);
  const [displayParks, setDisplayParks] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getParks();
  }, []);

  const getParks = async () => {
    const response = await fetch(`https://developer.nps.gov/api/v1/parks?api_key=${api_key}&limit=500`)
    const json = await response.json();
    console.log(json);
    setParks(json.data);
    setDisplayParks(json.data);
    setLoading(false);
    
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
    <Navbar bg="dark" variant="light"

      fixed="top">
      {/* <Navbar.Brand> */}
        {/* <img src={logo} 
          alt=""
          width="70"
          height="70"
          className="d-inline-block align-top"/>
          {'  '}
      </Navbar.Brand>   */}

      <Form inline onSubmit={getSearch} className="topnav">
        <FormControl  type='text' placeholder="Search Park.." value={search} onChange={updatedSearch} />
      </Form>
      <Button className="search-button" variant="outline-light" type="submit"> <i class="fa fa-search"></i> </Button>
    
      <div  className="selectedState" >
  
       
 
      </div>
    </Navbar>
  
    <div className="content">
    <h6><strong>Select by State:</strong> </h6>
    <container>
    <SelectUSState   className="selectedState"  placeholder="Search By State.." type='text' onChange={onSelectChange}/>
    </container>
    {!loading ? <Map location={displayParks} /> :  <Loader /> }
    </div>

    <div className="card-deck" >
    <CardDeck>
            {displayParks.map((park, idx ) => (
            <Park 
            key={idx}
            data={park} 
            image={park.images[0]?.url}
            weather={park.weatherInfo}
            state={park.states}
            park_url={park.url}
            direction={park.latLong}
            />   
          ))};
    </CardDeck>
    </div>
  </div>
  );
 };


export default App;