import React, {useEffect, useState} from 'react';
import Park from './Park';
import './App.css';
import Button from 'react-bootstrap/Button'
const App = () => {

  // const api_key = 'EW43splo4ni8vWJ6oN2cJunf49yeRxy6IFk4aOTb';
  const api_key = 'iBIDgu279HOLibT9B72MGBhW3NOT8PIbD92dfSIr';
  const [search, setSearch] = useState('');
  const [parks, setParks] = useState([]);


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
  };

  const updatedSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{

    e.preventDefault();
    setParks(search);
    getSearch('');

  };

 
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className='seach-bar' type='text' value={search} onChange={updatedSearch}/>
        <button className="search-button" type="submit"> Search Park </button>
      </form>

      <div className="park-description">
        {parks.map((park,idx,images, weatherInfo) => (
          <Park 
          key={idx}
          data={park} 
          image={park.images[0].url}
          weather={park.weatherInfo}
          />
          
        ))}
      
      </div>
    </div>
        
  
  );
 };


export default App;