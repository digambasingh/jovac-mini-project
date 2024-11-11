// Distruct.js
import React from 'react';
import CheckboxWithInfo from './CheckboxWithInfo';
import './Distruct.css';

const Distruct = () => {
  return (
    <div className="distruct-container">
      <div className="distruct-content">
      <h3 className="distruct-subtitle">
              Block these distractions:
            </h3>
        <form className='form-disctruct'>
          <div className="distruct-form-group">
            
            <CheckboxWithInfo
              id="block-all-websites"
              label="All Websites"
              description="Block access to all websites during your session"
            />
            <CheckboxWithInfo
              id="block-desktop-apps"
              label="Desktop Apps"
              description="Prevent usage of specified desktop applications"
            />
            <div className="checkbox-container">
              <input type="checkbox" id="block-distractions" className="checkbox-input" />
              <label htmlFor="block-distractions" className="checkbox-label">
                Distractions
              </label>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Distruct;
