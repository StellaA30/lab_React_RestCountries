import { useState, useEffect } from 'react';
import Country from './Country';
import './App.css';

const CountriesContainer = () => {

    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json()

    setCountries(jsonData);}

    useEffect(() => {
        fetchCountries ();
    }, [])

    const addCountryVisited = (countryName) =>{
        if(!(visitedCountries.includes(countryName))){
            setVisitedCountries([...visitedCountries, countryName]);

        }  
        }

    // const removeCountryFromVisited = (countryName) =>{
    //     if(visitedCountries.includes(countryName)){
    //         const updatedCountries = visitedCountries.filter(
    //             (country) => country !== countryName);
    //     setVisitedCountries(updatedCountries);

    //     }
    // }

    

    return ( 
        <>
        <div className='two-columns'>
            <div className='column'>
            <Country countries={countries}  isChecked={isChecked} setIsChecked={setIsChecked} addCountryVisited={addCountryVisited}/>   
            </div>
            <div className='columns'>
                <h2> Countries visited</h2>
                <ul>
                {visitedCountries.map((countryName, index) => (
              <li key={index}>{countryName}</li>
            ))}
          </ul>
            </div>

        </div>
             
        </>
     );
}


 
export default CountriesContainer;
