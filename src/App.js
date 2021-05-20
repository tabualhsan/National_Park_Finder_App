import React, {useEffect, useState} from 'react';
import Park from './Park';
import './App.css';

const App = () => {

const api_key = 'EW43splo4ni8vWJ6oN2cJunf49yeRxy6IFk4aOTb';
const[search, setSearch] = useState('');
const [data, setdata] = useState([]);

// const [query, setQuery] = useState('yello');


useEffect(() => {
  getParks();

});

const getParks = async () => {
  const response = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${api_key}`)
  // const response = await fetch (`https://developer.nps.gov/api/v1/activities?id=hiking&q=q&limit=20&start=0&api_key=EW43splo4ni8vWJ6oN2cJunf49yeRxy6IFk4aOTb`)
  const data = await response.json();
  
  
  
  console.log(data);
  
  
};

const updatedSearch = e =>{ 
  setSearch(e.target.value);

}
// const getSearch = e => {
//   e.preventDefault();
//   setQuery(search);
//   getSearch('');
// }


  return (
    <div className="App">
      <form  className="search-form">
        <input className='seach-bar' type='text' value={search} onChange={updatedSearch}/>
        <button className="search-button" type="submit"> Search Park </button>
      </form>

  <div className="park-description">
    {data.map(fullName =>(
      <Park
      title ={data.data}
      />
      
  ))}

    </div>
  </div>
  );
 };


export default App;
