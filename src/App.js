import React, {useEffect, useState} from 'react';
import Park from './Park';
import './App.css';
import Button from 'react-bootstrap/Button'
import { Dropdown } from 'semantic-ui-react'
import DropdownButton from 'react-bootstrap/DropdownButton'
const App = () => {

  // const api_key = 'EW43splo4ni8vWJ6oN2cJunf49yeRxy6IFk4aOTb';
  const api_key = 'iBIDgu279HOLibT9B72MGBhW3NOT8PIbD92dfSIr';
  const [search, setSearch] = useState('');
  const [parks, setParks] = useState([]);
  const [displayParks, setDisplayParks] = useState([]);
  const [state, setState] = useState("");
  


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
      <form onSubmit={getSearch} className="search-form">
        <input className='seach-bar' type='text' value={search} onChange={updatedSearch}/>
        <button className="search-button" type="submit"> Search Park </button>
      </form>

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
{/* 
      <Dropdown>
      {/* <select className="custom-select" onChange={(e) =>{const selectedState=e.target.value;
      setState(selectedState);
      }}
      > */}
      {/* <select>
        <option value="grapef">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      {state}
      </Dropdown> */} 
      </div>
    </div>
        
  
  );
 };


export default App;