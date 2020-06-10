import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__progress" style={{ width: `${value}%` }}></div>
      <span className="progress-bar__value">{value}%</span>
    </div>
  );
};

export default ProgressBar;
