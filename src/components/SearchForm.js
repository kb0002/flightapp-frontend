// SearchForm.js
import React, { useState } from 'react';
import Slider from 'react-slider';

const SearchForm = ({ onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [classType, setClassType] = useState('Economy');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchData = { from, to, date, classType, priceRange };
    onSearch(searchData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
      <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <select value={classType} onChange={(e) => setClassType(e.target.value)}>
        <option value="Economy">Economy</option>
        <option value="Business">Business</option>
      </select>
      <Slider
        min={0}
        max={1000}
        defaultValue={[0, 1000]}
        value={priceRange}
        onChange={handleSliderChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
