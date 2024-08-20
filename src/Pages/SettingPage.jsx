import React from 'react'
import Navbar from '../Components/Common/Navbar'
import './SettingPage.css';

function SettingPage() {
  return (
<div className="settings-page">
      <Navbar />
      <div className="settings-layout">
        <div className="sidebar">
          <h3>Settings</h3>
          <ul>
            <li>Account</li>
            <li>Notifications</li>
            <li>Privacy</li>
            <li>Billing</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="settings-content">
          <h2>Account Settings</h2>
          <div className="setting-item">
            <h3>Change Password</h3>
            <p>Update your account password to keep your account secure.</p>
            <button className="settings-button">Change Password</button>
          </div>

          <div className="setting-item">
            <h3>Manage Email Notifications</h3>
            <p>Choose which notifications you want to receive via email.</p>
            <button className="settings-button">Manage Notifications</button>
          </div>

          <div className="setting-item">
            <h3>Billing Information</h3>
            <p>View or update your billing information and payment methods.</p>
            <button className="settings-button">Update Billing</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingPage