import React from "react";
import "./ActionItem.css";
import Navbar from "../Common/Navbar";
import { FaCheckCircle, FaExclamationTriangle, FaEdit } from 'react-icons/fa';

function ActionItem() {
  return (
    <div className="action-items-page">
      <Navbar />
      <div className="action-items-layout">
        {/* Sidebar for Filters/Categories */}
        <div className="sidebar">
          <h3>Filters</h3>
          <ul>
            <li>All Tasks</li>
            <li>High Priority</li>
            <li>Upcoming</li>
            <li>Completed</li>
          </ul>
        </div>
        
        {/* Main Content Area */}
        <div className="action-items-content">
          <h2>Meeting Summaries</h2>
          
          {/* Summaries Section */}
          <div className="summary-section">
            <div className="summary-item">
              <h3>Project Kickoff Meeting</h3>
              <p>Summary: Discussed project goals, timelines, and key deliverables...</p>
              <button className="view-summary-button">View Full Summary</button>
            </div>
            <div className="summary-item">
              <h3>Client Review Meeting</h3>
              <p>Summary: Reviewed the client's feedback and discussed next steps...</p>
              <button className="view-summary-button">View Full Summary</button>
            </div>
          </div>

          <h2>Action Items</h2>

          {/* High Priority Tasks */}
          <div className="task-category">
            <h3>High Priority</h3>
            <div className="action-item">
              <div className="task-info">
                <h3>Prepare Project Report</h3>
                <p>Due: July 20, 2024</p>
              </div>
              <div className="task-icons">
                <FaExclamationTriangle style={{ color: 'orange' }} />
              </div>
              <div className="action-buttons">
                <button className="complete-button">
                  <FaCheckCircle /> Complete
                </button>
                <button className="assign-button">
                  <FaEdit /> Assign
                </button>
              </div>
            </div>

            <div className="action-item">
              <div className="task-info">
                <h3>Client Follow-up Call</h3>
                <p>Due: July 22, 2024</p>
              </div>
              <div className="task-icons">
                <FaExclamationTriangle style={{ color: 'orange' }} />
              </div>
              <div className="action-buttons">
                <button className="complete-button">
                  <FaCheckCircle /> Complete
                </button>
                <button className="assign-button">
                  <FaEdit /> Assign
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="task-category">
            <h3>Upcoming</h3>
            <div className="action-item">
              <div className="task-info">
                <h3>Schedule Team Meeting</h3>
                <p>Due: July 25, 2024</p>
              </div>
              <div className="task-icons">
                <FaCheckCircle style={{ color: 'green' }} />
              </div>
              <div className="action-buttons">
                <button className="complete-button">
                  <FaCheckCircle /> Complete
                </button>
                <button className="assign-button">
                  <FaEdit /> Assign
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ActionItem;