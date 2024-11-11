import React, { useState } from 'react';
import './setTime.css';

const SetTime = () => {
  const [startHour, setStartHour] = useState(7);
  const [startMinute, setStartMinute] = useState(0);
  const [startPeriod, setStartPeriod] = useState('PM');
  const [endHour, setEndHour] = useState(8);
  const [endMinute, setEndMinute] = useState(0);
  const [endPeriod, setEndPeriod] = useState('PM');
  const [duration, setDuration] = useState('1 hour');

  const calculateDuration = () => {
    const startTime = new Date();
    const endTime = new Date();

    startTime.setHours(startPeriod === 'PM' ? startHour + 12 : startHour);
    startTime.setMinutes(startMinute);

    endTime.setHours(endPeriod === 'PM' ? endHour + 12 : endHour);
    endTime.setMinutes(endMinute);

    let durationHours = (endTime - startTime) / (1000 * 60 * 60);

    if (durationHours < 0) durationHours += 24;

    setDuration(`${durationHours.toFixed(2)} hours`);
  };

  return (
    <div className="containerbox">
        <div className='close-move-to-dashboard'><a href="./dashboard">X</a></div>
      <h2>Set Session Time</h2>

      <div className="time-setter">
        <div className="time-input">
          <span>Starts:</span>
          <input
            type="number"
            min="1"
            max="12"
            value={startHour}
            onChange={(e) => setStartHour(Number(e.target.value))}
            aria-label="Start Hour"
          />
          <span>:</span>
          <input
            type="number"
            min="0"
            max="59"
            value={startMinute}
            onChange={(e) => setStartMinute(Number(e.target.value))}
            aria-label="Start Minute"
          />
          <select
            value={startPeriod}
            onChange={(e) => setStartPeriod(e.target.value)}
            aria-label="Start Period"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

        <div className="time-input">
          <span>Ends:</span>
          <input
            type="number"
            min="1"
            max="12"
            value={endHour}
            onChange={(e) => setEndHour(Number(e.target.value))}
            aria-label="End Hour"
          />
          <span>:</span>
          <input
            type="number"
            min="0"
            max="59"
            value={endMinute}
            onChange={(e) => setEndMinute(Number(e.target.value))}
            aria-label="End Minute"
          />
          <select
            value={endPeriod}
            onChange={(e) => setEndPeriod(e.target.value)}
            aria-label="End Period"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

        <button className="save-button" onClick={calculateDuration}>
          SAVE
        </button>
      </div>

      <hr />

      <div className="timezone-info">
        <div>Timezone: US/Eastern</div>
        <div className="session-duration">The session will last for {duration}</div>
      </div>
    </div>
  );
};

export default SetTime;
