// CheckboxWithInfo.js
import React, { useState } from 'react';
import './Distruct.css';

const CheckboxWithInfo = ({ id, label, description }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="checkbox-container">
      <div className="checkbox-label-container">
        <input type="checkbox" id={id} className="checkbox-input" />
        <label htmlFor={id} className="checkbox-label">
          {label}
        </label>
      </div>
      <div className="tooltip-container">
        <button
          type="button"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="tooltip-button"
        >
          More Info
        </button>
        {showTooltip && (
          <div className="tooltip">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckboxWithInfo;
