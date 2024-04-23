// SearchResults.js
import React from 'react';
import './SearchResults.css'; // Import CSS file for SearchResults component

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((flight) => (
            <li key={flight.id}>
              <span>Flight: {flight.flightNumber}</span>
              <span>Departure: {flight.departure}</span>
              <span>Arrival: {flight.arrival}</span>
              <span>Date: {flight.date}</span>
              <span>Price: {flight.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No search results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
