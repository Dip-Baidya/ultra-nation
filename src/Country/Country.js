import React from 'react';

const Country = (props) => {
    const { name, population, region, flags } = props.country;

    const flagStyle = { height: '150px' }
    const countryStyle = { border: '1px solid red', margin: '50px', padding: '20px' }

    return (
        <div style={countryStyle}>
            <h4>This is: {name.common}</h4>
            <img style={flagStyle} src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => props.handleAddCountry(props.country)}>Add Me</button>
        </div>
    );
};

export default Country;