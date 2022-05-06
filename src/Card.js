import React from "react";
import { formatNumbers } from "./Helper";

const Card = ({ countries }) => {

  return (
    <div>
      {countries.map((country) => {
        return (
          <div key={country.alpha2Code} className="card">
            <img src={country.flag} alt="" />
            <p>{country.name}</p>
            <p>Population: {formatNumbers(country.population)}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        )
      })}
    </div >
  )
}

export default Card;