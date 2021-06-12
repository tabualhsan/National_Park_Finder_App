import React, {useEffect, useState} from 'react';
import Park from './Park';
import './App.css';
import logo from './images/logo.png';
import Header from './Header';
import states from 'states-us';
import SelectUSState from 'react-select-us-states';
// import Navbar from './components/Navbar';
import { Navbar } from 'react-bootstrap';


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
  // const [state, setState] = useState("");
  


  useEffect(() => {
    getParks();
  }, []);

  const getParks = async () => {
    const response = await fetch(`https://developer.nps.gov/api/v1/parks?api_key=${api_key}`)
    // const response = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${api_key}`)
    // const response = await fetch (`https://developer.nps.gov/api/v1/activities?id=hiking&q=q&limit=20&start=0&api_key=EW43splo4ni8vWJ6oN2cJunf49yeRxy6IFk4aOTb`)
    const json = await response.json();
    console.log(json);
    setParks(json.data);
    setDisplayParks(json.data);
  };

  const updatedSearch = e =>{
    setSearch(e.target.value);
  }
  const filterParks = searchString =>{

    
    setDisplayParks(parks.filter(park => park.fullName.toLowerCase().includes(searchString.toLowerCase())))

  }
  const getSearch = e =>{

    e.preventDefault();
    filterParks(search)

  };
  

  

 
  return (

 
    <div className="App">
      <Navbar bg="dark" variant="dark"

        fixed="top">
        <Navbar.Brand>
          <img src={logo} />{'  '}

          National Park Search 


        </Navbar.Brand>

      </Navbar>

      <div className='content'>

          


      </div>

      <form onSubmit={getSearch} className="search-form">
        <input className='seach-bar' type='text' value={search} onChange={updatedSearch}/>
        <button className="search-button" type="submit"> Search Park </button>
      </form>
    <div className="state-selection-box">
      <p>
        Select a state: <SelectUSState id="state" className="selectedState" />
      </p>
    </div>
   

      <div className="park-description">
        {displayParks.map((park,idx,images, weatherInfo, states) => (
          <Park 
          key={idx}
          data={park} 
          image={park.images[0].url}
          weather={park.weatherInfo}
          state={park.states}
          />
          
        ))}
      

   
      </div>
    </div>
        
  
  );
 };


export default App;