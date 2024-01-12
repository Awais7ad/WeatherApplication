import React, { useState, useEffect } from 'react';
import { getCity } from "./api/api";
import styled from 'styled-components';
import { Container} from 'styled-bootstrap-grid';
import { Spacer } from './shared';
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getAllCity = async (cityName) => {
    try {
      const fetchedCities = await getCity(cityName);
      setCities(fetchedCities);
      //  console.log("location");
      
      
    
      if (cityName !== 'Multan') {
        const successMessage = `Location found with this Name: ${cityName}`;
        toast.success(successMessage);
      }
        
    } catch (error) {
      console.error("Error fetching city data", error);  
      if (error.response && error.response.status === 404) {
        const errorMessage = `Location not found with this Name: ${cityName}`;
        toast.error(errorMessage);
      }
    }
  };

  useEffect(() => {
    const defaultCity = 'Multan';
    getAllCity(defaultCity);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const cityToSearch = searchTerm.trim() !== '' ? searchTerm : 'Multan';
    getAllCity(cityToSearch);
    setSearchTerm('');
  };

  return (
    <Container>
      <Wrapper>
        <Weather>Weather App</Weather>
        <SearchContainer>
          <Search
            type="text"
            placeholder="Search Location"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SearchButton onClick={handleSearchSubmit} ><FaSearch />Check Weather</SearchButton>
        </SearchContainer>
      </Wrapper>
      <Spacer height="1"></Spacer>
      <CityInfoContainer>
        <CityDetails>
          <h1>{cities?.city?.name}, {cities?.city?.country}</h1>
          <p>Population: {cities?.city?.population}</p>
        </CityDetails>
        <WeatherInfo>
          {cities?.list?.slice(0, 10)?.map((day, index) => (
            <DayInfo key={index}>
              <h1>Date:{new Date(day.dt * 1000).toLocaleDateString()}</h1>
              <p >Sky is {day?.weather[0]?.main}</p>
              <p>Temp: {day?.temp?.day}</p>
              <p>Humidity: {day?.humidity}</p>
              <p>Speed: {day?.speed}</p>
              <button 
  style={{
    border: '2px solid #4CAF50', 
    // border: '2px solid #87CEEB',
    borderRadius: '10px',
    color: '#FFF', 
    backgroundColor: '#4CAF50', 
    fontFamily:'Roboto',
    cursor: 'pointer',
    padding: '10px 20px', 
    fontSize: '1em', 
    transition: 'background-color 0.3s, color 0.3s, border 0.3s', 
    outline: 'none', 
  }}
>
  View more...
</button>
            </DayInfo>
          ))}
        </WeatherInfo>
      </CityInfoContainer>
      <Spacer height="2"></Spacer>
<ToastContainer/>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  color: #333;
  margin-top: 30px;
`;

const Weather = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
  // color:#cccefd;
  // box-shadow: 0 0 10px ;
  `;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  @media(max-width:500px){
    flex-direction:column;
    
  }
`;

const Search = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 15px;
  padding-left: 10px;
  border: 3px solid #ccc;
  margin-right: 10px;
  color:'#fff';
`;

const SearchButton = styled.button`
  // width:120px;
  border: none;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.9em;
  color: white;
  background-color: #4caf50;
  cursor: pointer;
  @media(max-width:500px){
    margin-top:20px;
    width:250px;
  }
`;

const CityInfoContainer = styled.div`
  font-family:Roboto;
  background-image:url('./clouds.avif');
  background-repeat:no-repeat;
  background-size:cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  // box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  `;

const CityDetails = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 1.5em;
  }

  p {
    color: #555;
  }
`;

const WeatherInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const DayInfo = styled.div`
  width: 200px;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  // box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  background-color: white;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  h1 {
    font-size: 1em;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

export default App;
