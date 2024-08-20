import React from "react";
import "./Dashboard.css";
import meetingsIcon from "../../Assets/icons8-ai-ios-17-outlined/meetings-icon.png";
import summariesIcon from "../../Assets/icons8-ai-ios-17-outlined/summaries-icon.png";
import actionItemsIcon from'../../Assets/icons8-ai-ios-17-outlined/icons8-call-to-action-100.png';



const Dashboard = () => {
  return (
    <div className="dashboard-page">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="dashboard-actions">
          <button>Add Meeting</button>
          <button>Filter</button>
          <button>Settings</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <img src={meetingsIcon} alt="Meetings Icon" className="card-icon" />
          <h3>Meetings</h3>
          <p>25</p>
        </div>
        <div className="card">
          <img src={summariesIcon} alt="Summaries Icon" className="card-icon" />
          <h3>Summaries Generated</h3>
          <p>15</p>
        </div>
        <div className="card">
          <img
            src={actionItemsIcon}
            alt="Action Items Icon"
            className="card-icon"
          />
          <h3>Pending Action Items</h3>
          <p>5</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-card">
          <h3>Meetings Overview</h3>
          <div className="chart-placeholder">[Chart Placeholder]</div>
        </div>
        <div className="chart-card">
          <h3>Action Items Status</h3>
          <div className="chart-placeholder">[Chart Placeholder]</div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          <li>Meeting with Project Team - July 14, 2024</li>
          <li>Client Review Meeting - July 13, 2024</li>
          <li>Weekly Standup - July 12, 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
