const Country = ({countries,  isChecked, setIsChecked, addCountryVisited}) => {

    // const handleCountryVisited = (countryName) => {
    //     if(isChecked && countries.includes(countryName)){
    //         removeCountryFromVisited(countryName)

    //     }else{
    //     addCountryVisited(countryName);
    //     }
    //     setIsChecked=(!isChecked);


        const handleCountryVisited = (countryName) => {
            addCountryVisited(countryName);
            setIsChecked=(!isChecked);
      };


    return ( 
        <>
            <h2>Countries</h2>
          
            <ul>
                {countries ? 
                countries.map((country, index) => 
                (<li>
                    <input 
                        type="checkbox"
                        onChange={() => handleCountryVisited(country.name.common)} />
                        <label key={index}>{country.name.common} </label>
                </li>)):
                <p>Loading countries!</p>}
            </ul>
                
    
        </>
     );
}
 
export default Country;