// App.js
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Tabs from './components/Tabs';
import './App.css'; // Import CSS file for App component

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [activeTab, setActiveTab] = useState('oneWay');

  const handleSearch = (searchData) => {
    // Perform search logic based on searchData
    // For now, let's assume searchData is an array of flight objects
    // Replace this with your actual search logic
    const filteredData = searchData; // Placeholder for search logic
    setSearchResults(filteredData);
  };

  return (
    <div className="app-container">
      <NavBar />
      <div className="box-container">
        <div className="app-content">
          <div className="search-container">
            <Tabs onChange={(tab) => setActiveTab(tab)} />
            <SearchForm onSearch={handleSearch} />
          </div>
          <SearchResults results={searchResults} />
        </div>
      </div>
    </div>
  );
}

export default App;
