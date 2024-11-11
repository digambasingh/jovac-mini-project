import React, { useState } from 'react';
import './Dashboard.css'
const DurationField = () => {
  // Initialize state for the input value
  const [hours, setHours] = useState(0);

  // Function to handle changes in the input
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);

    // Ensure value is within allowed range
    if (value >= 0 && value <= 24) {
      setHours(value);
    }
  };

  return (
    <div className="duration-fields">
      <input
        type="number"
        id="duration-hours"
        name="duration-hours"
        className="duration-input"
        min="0"
        max="24"
        value={hours} // Controlled value from state
        onChange={handleInputChange} // Update value on change
        aria-label="Hours"
      />
    </div>
  );
};

export default DurationField;



const DurationFieldMinute = () => {
  // Set initial value to 3 (as in your example)
  const [minutes, setMinutes] = useState(3);

  // Handler function to update minutes
  const handleMinutesChange = (e) => {
    const value = parseInt(e.target.value, 10);

    // Ensure value stays within 0 and 59
    if (!isNaN(value) && value >= 0 && value <= 59) {
      setMinutes(value);
    }
  };

  return (
    <div className="duration-fields">
      <input
        type="number"
        id="duration-minutes"
        name="duration-minutes"
        className="duration-input"
        min="0"
        max="59"
        value={minutes} // Bind value to state
        onChange={handleMinutesChange} // Update state on change
        aria-label="Minutes"
      />
    </div>
  );
};

export  {DurationFieldMinute};
