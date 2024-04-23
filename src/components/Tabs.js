// Tabs.js
import React, { useState } from 'react';
import './Tabs.css'; // Import CSS file for Tabs component

const Tabs = ({ onChange }) => {
  const [activeTab, setActiveTab] = useState('oneWay');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onChange(tab);
  };

  return (
    <div className="tabs">
      <button className={activeTab === 'oneWay' ? 'active' : ''} onClick={() => handleTabChange('oneWay')}>
        One Way
      </button>
      <button className={activeTab === 'return' ? 'active' : ''} onClick={() => handleTabChange('return')}>
        Return
      </button>
      {activeTab === 'return' && (
        <div className="return-date">
          <label htmlFor="returnDate">Return Date:</label>
          <input type="date" id="returnDate" name="returnDate" />
        </div>
      )}
    </div>
  );
};

export default Tabs;
