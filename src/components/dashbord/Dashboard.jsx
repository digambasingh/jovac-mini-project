import React, { useState } from 'react';
import './Dashboard.css';
import NavScrollExample from '../home/NavScrollExample';
import Music from '../music/Music';
import Distruct from './Distruct';
import DurationField, { DurationFieldMinute } from './DurationField';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('start-now');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
    <NavScrollExample/>
    
    <div>
      <header className="section-header">
        <h1>
          <button type="button" className="schedule-manager-tab">
            My Sessions
          </button>
          <button type="button" className="session-history-tab">
            Session History
          </button>
        </h1>
      </header>

      <div className="schedule-manager">
        <div className="schedule-editor new-schedule-editor">
          <div className="new-schedule-form-header">
            <h2>Add Session</h2>
            <button className="close-new-schedule-form-button" type="button" aria-label="Close">
              Close
            </button>
          </div>
          <div className="new-schedule-form-tabs" role="tablist">
            <button
              type="button"
              className={activeTab === 'start-now' ? 'active-tab' : ''}
              onClick={() => handleTabClick('start-now')}
            >
              Start now
            </button>
            <a href="./settime" target="_top">
              <button type="button" onClick={() => handleTabClick('start-later')}>
                Start later
              </button>
            </a>
            <button
              type="button"
              onClick={() => handleTabClick('recurring')}
            >
              Recurring session
            </button>
          </div>
          <hr />
          <form
            id="start-now-session-form"
            className="schedule-form start-now-schedule-form"
            novalidate
          >
            <div className="main-fields">
              <div className="save-button-row">
                <div className="duration-fields">
                  <DurationField/>
                  
                  <label htmlFor="duration-hours">hours</label>
                  <DurationFieldMinute/>
                  
                  <label htmlFor="duration-minutes">minutes</label>
                </div>
                <div className="form-action-controls">
                  <button type="submit" className="start-button save-schedule-button">
                    Start
                  </button>
                </div>
              </div>
            </div>
            <div className="validation-message-list empty" aria-live="polite">
            </div>
          </form>
          <Distruct/>
          <Music/>
        </div>
      </div>
      
    </div>
    
    {/* <Music/> */}
    </>
  );
};

export default Dashboard;
